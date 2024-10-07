import './Nav.scss';
import Link from '../Link/Link';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
  favoriteRecipes: IRecipe[] | null;
}

function Nav({ recipes, favoriteRecipes }: RecipesProps) {
  if (favoriteRecipes.length) {
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
        {favoriteRecipes && <Link url={'/recipes/favorite'} title="Favoris" />}
      </nav>
    );
  }
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
