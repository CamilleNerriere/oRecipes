import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipesStatus, setLoadingRecipesStatus] = useState(true);

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
      <Nav />

      <Content recipes={recipes} loadingRecipesStatus={loadingRecipesStatus} />
    </div>
  );
}

export default App;
