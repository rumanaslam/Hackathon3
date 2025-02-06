// src/types.ts
export interface LocalProduct {
  _id: string;
  title: string;
  tags?: string[];
  price: number;
  isNew?: boolean;
  discountPercentage?: number;
  productImage?: string; // Optional if it's required elsewhere
}
