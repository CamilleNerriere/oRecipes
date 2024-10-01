import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';

import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipesStatus, setLoadingRecipesStatus] = useState(true);
  const [showIndex, setshowIndex] = useState(true);

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
            />
          }
        />
        <Route path="/recipes/" element={<Navigate to="/" />} />
        <Route path="/recipes/:slug" element={<Content recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
