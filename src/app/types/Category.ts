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
    rate: number;
  };