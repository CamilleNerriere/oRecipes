import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';

import { Route, Routes, Navigate } from 'react-router-dom';

interface UserAuth {
  email: string;
  password: string;
}

interface UserData {
  pseudo: string;
  token: string;
  logged: boolean;
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipesStatus, setLoadingRecipesStatus] = useState(true);
  const [userAuth, setUserAuth] = useState<UserAuth | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

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
    if (userAuth) {
      const response = await fetch('http://localhost:3000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userAuth.email,
          password: userAuth.password,
        }),
      });
      const user = await response.json();
      setUserData(user);
      console.log(user);
      if (response.ok) {
        console.log(user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        throw user;
      }
    }
  }, [userAuth]);

  useEffect(() => {
    login();
  }, [login]);

  return (
    <div className="container">
      <Nav recipes={recipes} />

      <Routes>
        <Route
          path="/"
          element={
            <Content
              recipes={recipes}
              loadingRecipesStatus={loadingRecipesStatus}
              setUserAuth={setUserAuth}
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        />
        <Route
          path="/recipes/"
          element={<Navigate to="/" />}
          setUserAuth={setUserAuth}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
        <Route
          path="/recipes/:slug"
          element={<Content recipes={recipes} setUserAuth={setUserAuth} />}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
      </Routes>
    </div>
  );
}

export default App;
