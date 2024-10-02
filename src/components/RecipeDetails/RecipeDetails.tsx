import { Navigate, useParams } from 'react-router-dom';

import './RecipeDetails.scss';
import Ingredients from './Ingredients.tsx';
import Instructions from './Instructions.tsx';

import { IRecipes } from '../../@types';

function RecipeDetails({ recipes }: IRecipes) {
  const { slug } = useParams();

  const selectedRecipe = recipes.find((recipe) => recipe.slug === slug);

  if (!selectedRecipe) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-detail__header">
        <img
          className="recipe-detail__header--img"
          src={selectedRecipe.thumbnail}
          alt=""
        />
        <div className="recipe-detail__header--title">
          <h1 className="recipe-detail__header--title__main">
            {' '}
            {selectedRecipe.title}
          </h1>
          <p className="recipe-detail__header--title__infos">
            {' '}
            {selectedRecipe.author} - {selectedRecipe.difficulty}
          </p>{' '}
          <p className="recipe-detail__header--title__difficulty">
            {selectedRecipe.description}
          </p>
        </div>
      </div>
      <Ingredients ingredients={selectedRecipe.ingredients} />
      <Instructions instructions={selectedRecipe.instructions} />
    </div>
  );
}

export default RecipeDetails;
