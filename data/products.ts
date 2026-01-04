export interface Product {
  name: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    name: "Cookies",
    price: 5.99,
    image: require("@/assets/images/icon.png"),
  },
  {
    name: "Croissant",
    price: 3.99,
    image: require("@/assets/images/icon.png"),
  },
];

