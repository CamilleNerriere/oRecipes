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
    <>
      <img src={selectedRecipe.thumbnail} alt="" />
      <div className="title">
        <h1 className="title__main"> {selectedRecipe.title}</h1>
        <p className="title__infos">
          {' '}
          {selectedRecipe.author} - {selectedRecipe.difficulty}
        </p>{' '}
        <p>{selectedRecipe.description}</p>
      </div>
      <Ingredients ingredients={selectedRecipe.ingredients} />
      <Instructions instructions={selectedRecipe.instructions} />
    </>
  );
}

export default RecipeDetails;
