import Header from '../Header/Header';
import Recipes from '../Recipes/Recipes';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
  loadingRecipesStatus: boolean;
}

import './Content.scss';

function Content({ recipes, loadingRecipesStatus }: RecipesProps) {
  return (
    <div className="content">
      <Header />
      <Recipes recipes={recipes} loadingRecipesStatus={loadingRecipesStatus} />
    </div>
  );
}

export default Content;
