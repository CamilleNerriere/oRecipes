import './Recipe.scss';
import { Link } from 'react-router-dom';

import { IRecipe } from '../../@types';

function Recipe({ thumbnail, title, difficulty, slug }: IRecipe) {
  return (
    <div className="recipe">
      <img className="recipe__img" src={thumbnail} alt="cookies" />
      <div className="recipe__resume">
        <h3 className="recipe__title"> {title}</h3>
        <p className="recipe__level">Difficulté: {difficulty}</p>
        <Link className="recipe__link" to={`recipes/${slug}`}>
          <button className="recipe__button" type="button">
            {' '}
            Voir la recette
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
