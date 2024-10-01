import './Recipes.scss';
import Recipe from '../Recipe/Recipe';
import Spinner from '../Spinner/Spinner';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
  loadingRecipesStatus: boolean;
}

function Recipes({ recipes, loadingRecipesStatus }: RecipesProps) {
  return (
    <div className="recipes">
      <h1 className="recipes__title">Les recettes oRecipes</h1>
      <p className="recipes__resume">Voici nos 6 recettes</p>
      <div className="recipes__container">
        {loadingRecipesStatus && <Spinner />}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            thumbnail={recipe.thumbnail}
            title={recipe.title}
            difficulty={recipe.difficulty}
            slug={recipe.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
