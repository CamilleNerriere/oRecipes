import './Ingredients.scss';

import { IIngredient } from '../../@types';

interface IngredientsProps {
  ingredients: IIngredient[];
}

function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient) => (
        <li className="ingredients__item" key={ingredient.id}>
          <span className="ingredients__item--quantity">
            {' '}
            {ingredient.quantity} {ingredient.unit}
          </span>{' '}
          {ingredient.name}
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
