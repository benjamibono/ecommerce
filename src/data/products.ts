export interface Product {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isLimitedEdition?: boolean;
  discountPercentage?: number;
  sizes: {
    name: string;
    inStock: boolean;
  }[];
  description?: string;
}

// Helper function to calculate discounted price
const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number
): number => {
  return Math.round(price * (1 - discountPercentage / 100));
};

export const products: Product[] = [
  {
    id: "1",
    name: "1",
    price: 50,
    image: "/images/1.png",
    category: "Hoodies",
    isNew: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "2",
    name: "2",
    price: 80,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(80, 30),
    image: "/images/2.png",
    category: "Hoodies",
    isOnSale: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
  },
  {
    id: "3",
    name: "3",
    price: 60,
    image: "/images/3.png",
    category: "Hoodies",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "4",
    name: "4",
    price: 90,
    image: "/images/4.png",
    category: "Hoodies",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "5",
    name: "5",
    price: 70,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(70, 30),
    image: "/images/5.png",
    category: "Hoodies",
    isOnSale: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "6",
    name: "6",
    price: 100,
    image: "/images/6.png",
    category: "Hoodies",
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "7",
    name: "7",
    price: 85,
    image: "/images/7.png",
    category: "Hoodies",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "8",
    name: "8",
    price: 130,
    image: "/images/8.png",
    category: "Hoodies",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "9",
    name: "9",
    price: 25,
    image: "/images/9.png",
    category: "T-Shirts",
    isNew: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "10",
    name: "10",
    price: 35,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(35, 30),
    image: "/images/10.png",
    category: "T-Shirts",
    isOnSale: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
  },
  {
    id: "11",
    name: "11",
    price: 30,
    image: "/images/11.png",
    category: "T-Shirts",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "12",
    name: "12",
    price: 40,
    image: "/images/12.png",
    category: "T-Shirts",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "13",
    name: "13",
    price: 35,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(35, 30),
    image: "/images/13.png",
    category: "T-Shirts",
    isOnSale: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "14",
    name: "14",
    price: 35,
    image: "/images/14.png",
    category: "T-Shirts",
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "15",
    name: "15",
    price: 30,
    image: "/images/15.png",
    category: "T-Shirts",
    isLimitedEdition: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "16",
    name: "16",
    price: 45,
    image: "/images/16.png",
    category: "T-Shirts",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "17",
    name: "17",
    price: 45,
    image: "/images/17.png",
    category: "Sweatshirts",
    isNew: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "18",
    name: "18",
    price: 65,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(65, 30),
    image: "/images/18.png",
    category: "Sweatshirts",
    isOnSale: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
  },
  {
    id: "19",
    name: "19",
    price: 55,
    image: "/images/19.png",
    category: "Sweatshirts",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "20",
    name: "20",
    price: 75,
    image: "/images/20.png",
    category: "Sweatshirts",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "21",
    name: "21",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: "/images/21.png",
    category: "Sweatshirts",
    isOnSale: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
];
