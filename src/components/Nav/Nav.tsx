import './Nav.scss';
import Link from '../Link/Link';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
}

function Nav({ recipes }: RecipesProps) {
  return (
    <nav className="nav">
      <Link slug="" title="Accueil" />
      {recipes.map((recipe) => (
        <Link slug={recipe.slug} key={recipe.id} title={recipe.title} />
      ))}
    </nav>
  );
}

export default Nav;
