import { getImageUrl } from "@/utils/cloudinary";

export interface Product {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  imagePublicId: string;
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
    image: getImageUrl("1"),
    imagePublicId: "1",
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
    image: getImageUrl("2"),
    imagePublicId: "2",
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
    image: getImageUrl("3"),
    imagePublicId: "3",
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
    image: getImageUrl("4"),
    imagePublicId: "4",
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
    image: getImageUrl("5"),
    imagePublicId: "5",
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
    image: getImageUrl("6"),
    imagePublicId: "6",
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
    image: getImageUrl("7"),
    imagePublicId: "7",
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
    image: getImageUrl("8"),
    imagePublicId: "8",
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
    image: getImageUrl("9"),
    imagePublicId: "9",
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
    image: getImageUrl("10"),
    imagePublicId: "10",
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
    image: getImageUrl("11"),
    imagePublicId: "11",
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
    image: getImageUrl("12"),
    imagePublicId: "12",
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
    image: getImageUrl("13"),
    imagePublicId: "13",
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
    image: getImageUrl("14"),
    imagePublicId: "14",
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
    image: getImageUrl("15"),
    imagePublicId: "15",
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
    image: getImageUrl("16"),
    imagePublicId: "16",
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
    image: getImageUrl("17"),
    imagePublicId: "17",
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
    image: getImageUrl("18"),
    imagePublicId: "18",
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
    image: getImageUrl("19"),
    imagePublicId: "19",
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
    image: getImageUrl("20"),
    imagePublicId: "20",
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
    image: getImageUrl("21"),
    imagePublicId: "21",
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
