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
    name: "Classic Hoodie",
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
    name: "Premium Cotton Hoodie",
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
    name: "Sport Hoodie",
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
    name: "Limited Edition Hoodie",
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
    name: "Urban Style Hoodie",
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
    name: "Winter Hoodie",
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
    name: "Streetwear Hoodie",
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
    name: "Designer Hoodie",
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
    name: "Classic T-Shirt",
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
    name: "Premium Cotton T-Shirt",
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
    name: "Sport T-Shirt",
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
    name: "Limited Edition T-Shirt",
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
    name: "Graphic Print T-Shirt",
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
    name: "Summer T-Shirt",
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
    name: "Streetwear T-Shirt",
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
    name: "Designer T-Shirt",
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
    id: "1",
    name: "Classic Sweatshirt",
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
    id: "2",
    name: "Premium Cotton Sweatshirt",
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
    id: "3",
    name: "Sport Sweatshirt",
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
    id: "4",
    name: "Limited Edition Sweatshirt",
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
    id: "5",
    name: "Urban Style Sweatshirt",
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
  }
];
