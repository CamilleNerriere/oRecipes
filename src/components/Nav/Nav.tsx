import './Nav.scss';
import Link from '../Link/Link';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
}

function Nav({ recipes }: RecipesProps) {
  return (
    <nav className="nav">
      <Link url={'/'} title="Accueil" />
      {recipes.map((recipe) => (
        <Link
          url={`/recipes/${recipe.slug}`}
          key={recipe.id}
          title={recipe.title}
        />
      ))}
    </nav>
  );
}

export default Nav;
