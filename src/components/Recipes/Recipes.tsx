import './Recipes.scss';
import Recipe from '../Recipe/Recipe';
import Spinner from '../Spinner/Spinner';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
  loadingRecipesStatus: boolean;
  favoriteRecipes: IRecipe[];
}

function Recipes({
  recipes,
  loadingRecipesStatus,
  favoriteRecipes,
}: RecipesProps) {
  const favoriteRecipesId = favoriteRecipes.map((recipe) => recipe.id);
  return (
    <div className="recipes">
      <h1 className="recipes__title">Les recettes oRecipes</h1>

      <p className="recipes__resume">Voici nos {recipes.length} recettes</p>
      <div className="recipes__container">
        {loadingRecipesStatus && <Spinner />}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            favorite={favoriteRecipesId.includes(recipe.id)}
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
