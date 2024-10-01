import './RecipeDetails.scss';
import Ingredients from './Ingredients.tsx';
import Instructions from './Instructions.tsx';

function RecipeDetails() {
  return (
    <>
      <img src="" alt="gateau" />
      <div className="title">
        <h1 className="title__main"> Fondant au chocolat</h1>
        <p className="title__infos"> Solène- Facile</p>
      </div>
      <Ingredients />
      <Instructions />
    </>
  );
}

export default RecipeDetails;
