import { getImageUrl } from "@/utils/cloudinary";

export interface Product {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  imagePublicId: string;
  additionalImages?: { url: string; publicId: string }[];
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
    name: "Essential Bra",
    price: 50,
    image: getImageUrl("1"),
    imagePublicId: "1",
    category: "Tops",
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
    name: "Classic Black Leggings",
    price: 80,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(80, 30),
    image: getImageUrl("2"),
    imagePublicId: "2",
    category: "Leggings",
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
    name: "Power Seamless Crop Top",
    price: 60,
    image: getImageUrl("3"),
    imagePublicId: "3",
    category: "T-Shirts",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "4",
    name: "Performance Tank Top",
    price: 90,
    image: getImageUrl("4"),
    imagePublicId: "4",
    category: "T-Shirts",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "6",
    name: "Flex Crop Top",
    price: 100,
    image: getImageUrl("6"),
    imagePublicId: "6",
    category: "T-Shirts",
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "7",
    name: "Seamless Flex Bra",
    price: 85,
    image: getImageUrl("7"),
    imagePublicId: "7",
    category: "Tops",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "8",
    name: "Vital Bra",
    price: 130,
    image: getImageUrl("8"),
    imagePublicId: "8",
    category: "Tops",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "9",
    name: "Hoops Jersey",
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
    name: "Vintage Hoodie",
    price: 35,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(35, 30),
    image: getImageUrl("10"),
    imagePublicId: "10",
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
    id: "11",
    name: "Relaxed Fit Hoodie",
    price: 30,
    image: getImageUrl("11"),
    imagePublicId: "11",
    category: "Hoodies",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "12",
    name: "Unisex Classic Hoodie",
    price: 40,
    image: getImageUrl("12"),
    imagePublicId: "12",
    additionalImages: [
      {
        url: getImageUrl("17"),
        publicId: "17",
      },
    ],
    category: "Hoodies",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "13",
    name: "Essential Hoodie",
    price: 35,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(35, 30),
    image: getImageUrl("13"),
    imagePublicId: "13",
    additionalImages: [
      {
        url: getImageUrl("30"),
        publicId: "30",
      },
    ],
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
    id: "15",
    name: "Trainer Hoodie",
    price: 30,
    image: getImageUrl("15"),
    imagePublicId: "15",
    category: "Hoodies",
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
    name: "Core Tee",
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
    id: "19",
    name: "Pure Fit Leggings",
    price: 55,
    image: getImageUrl("19"),
    imagePublicId: "19",
    category: "Leggings",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "20",
    name: "Motion Bra",
    price: 75,
    image: getImageUrl("20"),
    imagePublicId: "20",
    category: "Tops",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "21",
    name: "Elite Polo",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("21"),
    imagePublicId: "21",
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
    id: "22",
    name: "Fluid Seamless Leggings",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("22"),
    imagePublicId: "22",
    category: "Leggings",
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
    id: "23",
    name: "Nude Fit Seamless Leggings",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("23"),
    imagePublicId: "23",
    category: "Leggings",
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
    id: "24",
    name: "Ocean Fit Leggings",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("24"),
    imagePublicId: "24",
    category: "Leggings",
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
    id: "26",
    name: "Ultra Support Bra",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("26"),
    imagePublicId: "26",
    category: "Tops",
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
    id: "27",
    name: "Natura Fit Leggings",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("27"),
    imagePublicId: "27",
    category: "Leggings",
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
    id: "31",
    name: "Everyday Hoodie",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("31"),
    imagePublicId: "31",
    category: "Hoodies",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "32",
    name: "Lightmove Bra",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image: getImageUrl("32"),
    imagePublicId: "32",
    category: "Tops",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
];
