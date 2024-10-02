export interface IIngredient {
  name: string;
  id: number;
  quantity: number;
  unit: string;
}

export interface IRecipe {
  id: number;
  title: string;
  slug: string;
  url: sting;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  instructions: array<string>;
  ingredients: array<IIngredient>;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IAuthUser {
  pseudo: string;
  token: string;
  logged: boolean;
}
