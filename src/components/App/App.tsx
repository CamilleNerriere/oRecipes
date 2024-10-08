import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Recipes from '../Recipes/Recipes';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Icredentials, IAuthUser, IRecipe } from '../../@types';

function App() {
  //Gestion données API
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipesStatus, setLoadingRecipesStatus] = useState(true);

  const [favoriteRecipes, setFavoriteRecipes] = useState<IRecipe[]>([]);

  // Gestion authentification
  const [credentials, setCredentials] = useState<Icredentials | null>(null);
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  const [jwt, setJwt] = useState<string | null>(null);

  // récupération des recettes

  //Toutes les recettes

  const loadRecipes = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/recipes');
      const data = await response.json();
      setRecipes(data);
      setLoadingRecipesStatus(false);
    } catch (error) {
      console.log(error);
      // gérer un message d'erreur utilisateur
    }
  }, []);

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  // Les recettes prférées de l'utilisateur (suppose être log)
  useEffect(() => {
    const loadFavoriteRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/favorites', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
        const data = await response.json();

        setFavoriteRecipes(data.favorites);
      } catch (error) {
        console.log('catch/error', error);
      }
    };

    if (jwt !== null) {
      // console.log('il faut aller chercher les recettes préférées');

      loadFavoriteRecipes();
    }
  }, [jwt]);

  // login

  const login = useCallback(async () => {
    if (credentials) {
      const response = await fetch('http://localhost:3000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const user = await response.json();

      console.log(user);
      if (response.ok) {
        setAuthUser(user);
        setJwt(user.token);
      } else {
        throw user;
      }
    }
  }, [credentials]);

  useEffect(() => {
    login();
  }, [login]);

  if (loadingRecipesStatus) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Nav recipes={recipes} favoriteRecipes={favoriteRecipes} />
      <div className="content">
        <Header setCredentials={setCredentials} authUser={authUser} />

        <Routes>
          <Route
            path="/"
            element={
              <Recipes
                recipes={recipes}
                loadingRecipesStatus={loadingRecipesStatus}
                favoriteRecipes={favoriteRecipes}
              />
            }
          />
          <Route
            path="/recipes/:slug"
            element={<RecipeDetails recipes={recipes} />}
          />

          {favoriteRecipes.length ? (
            <Route
              path="/recipes/favorite"
              element={
                <Recipes
                  recipes={favoriteRecipes}
                  loadingRecipesStatus={loadingRecipesStatus}
                />
              }
            />
          ) : (
            <Route path="/recipes/favorite" element={<Navigate to="/404" />} />
          )}

          <Route path="*" element={<div>Page non trouvée</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
