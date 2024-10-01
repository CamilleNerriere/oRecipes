import './RecipeDetails.scss';
import Ingredients from './Ingredients.tsx';
import Instructions from './Instructions.tsx';

import { IRecipe } from '../../@types';

interface RecipeDetailsProps {
  recipe: IRecipe;
}

function RecipeDetails({ recipe }: RecipeDetailsProps) {
  const {
    thumbnail,
    title,
    author,
    difficulty,
    description,
    ingredients,
    instructions,
  } = recipe;
  return (
    <>
      <img src={thumbnail} alt="" />
      <div className="title">
        <h1 className="title__main"> {title}</h1>
        <p className="title__infos">
          {' '}
          {author} - {difficulty}
        </p>{' '}
        <p>{description}</p>
      </div>
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </>
  );
}

export default RecipeDetails;
