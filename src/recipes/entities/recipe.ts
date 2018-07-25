import { Ingredients } from './ingredients';

export interface Recipe {
    title: string;
    href: string;
    ingredients: Ingredients[];
    thumbnail: string;
}
