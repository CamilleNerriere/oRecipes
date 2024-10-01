import './Recipes.scss';
import Recipe from '../Recipe/Recipe';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
}

function Recipes({ recipes }: RecipesProps) {
  return (
    <div className="recipes">
      <h1 className="recipes__title">Les recettes oRecipes</h1>
      <p className="recipes__resume">Voici nos 6 recettes</p>
      <div className="recipes__container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            thumbnail={recipe.thumbnail}
            title={recipe.title}
            difficulty={recipe.difficulty}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
