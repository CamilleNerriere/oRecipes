import './Recipes.scss';
import Recipe from '../Recipe/Recipe';

function Recipes() {
  return (
    <div className="recipes">
      <h1 className="recipes__title">Les recettes oRecipes</h1>
      <p className="recipes__resume">Voici nos 6 recettes</p>
      <div className="recipes__container">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
}

export default Recipes;
