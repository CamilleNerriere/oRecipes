import Header from '../Header/Header';
import Recipes from '../Recipes/Recipes';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
}

import './Content.scss';

function Content({ recipes }: RecipesProps) {
  return (
    <div className="content">
      <Header />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default Content;
