import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Recipes from '../Recipes/Recipes';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Toast from '../Toast/Toast';

import { IRecipe } from '../../@types';

interface RecipesProps {
  recipes: IRecipe[];
  loadingRecipesStatus: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<UserAuth | null>>;
  isAuthenticated: boolean | null;
  userData: UserData;
}

interface UserData {
  pseudo: string;
  token: string;
  logged: boolean;
}

import './Content.scss';

function Content({
  recipes,
  loadingRecipesStatus,
  setUserAuth,
  isAuthenticated,
  userData,
}: RecipesProps) {
  const { slug } = useParams();

  const selectedRecipe = slug
    ? recipes.find((recipe) => recipe.slug === slug)
    : null;

  return (
    <div className="content">
      <Header setUserAuth={setUserAuth} />

      {isAuthenticated === true && (
        <Toast userData={userData} isLogged={true} />
      )}
      {isAuthenticated === false && <Toast isLogged={false} />}
      {slug && !selectedRecipe ? (
        // Slug fourni mais aucune recette correspondante
        <p>Recipe not found</p>
      ) : selectedRecipe ? (
        // Slug fourni et une recette correspondante est trouvée
        <RecipeDetails recipe={selectedRecipe} />
      ) : (
        // Pas de slug, affiche l'index des recettes
        <Recipes
          recipes={recipes}
          loadingRecipesStatus={loadingRecipesStatus}
        />
      )}
    </div>
  );
}

export default Content;
