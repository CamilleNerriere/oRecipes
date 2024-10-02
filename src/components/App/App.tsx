import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Recipes from '../Recipes/Recipes';
import Header from '../Header/Header';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Icredentials, IAuthUser } from '../../@types';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipesStatus, setLoadingRecipesStatus] = useState(true);
  const [credentials, setCredentials] = useState<Icredentials | null>(null);
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);

  // récupération des recettes

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
      } else {
        throw user;
      }
    }
  }, [credentials]);

  useEffect(() => {
    login();
  }, [login]);

  return (
    <div className="container">
      <Nav recipes={recipes} />
      <div className="content">
        <Header setCredentials={setCredentials} authUser={authUser} />

        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />

          <Route
            path="/recipes/:slug"
            element={<RecipeDetails recipes={recipes} />}
          />

          <Route path="*" element={<div>Page non trouvée</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
