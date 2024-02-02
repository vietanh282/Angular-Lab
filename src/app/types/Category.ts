import { Product } from "./Product";

export type Category = {
    _id: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  };
  export type CategoryAdd = {
    title: string;
    description: string;
    slug: string
  };

export type CategoryAdmin = Omit<Category, 'id' > & {
  _id: string;
  category: string;
};