export interface ProductAPIResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  images: string[];
}
