import './Recipe.scss';
import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <div className="recipe">
      <img
        className="recipe__img"
        src="../../assets/cookies.png"
        alt="cookies"
      />
      <h3 className="recipe__title"> Cookies au beurre de cacahuète</h3>
      <p className="recipe__level">Difficulté: Facile</p>
      <Link className="recipe__link" to="cookies">
        <button className="recipe__button" type="button">
          {' '}
          Voir la recette
        </button>
      </Link>
    </div>
  );
}

export default Recipe;
