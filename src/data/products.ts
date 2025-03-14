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
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1565978771542-0db9ab9ad3de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
  {
    id: "6",
    name: "Winter Sweatshirt",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sweatshirts",
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
  {
    id: "7",
    name: "Streetwear Sweatshirt",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sweatshirts",
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "8",
    name: "Designer Sweatshirt",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sweatshirts",
    isNew: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "9",
    name: "Vintage Sweatshirt",
    price: 60,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(60, 30),
    image:
      "https://images.unsplash.com/photo-1572495641004-28421ae29ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sweatshirts",
    isOnSale: true,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
  },
  {
    id: "17",
    name: "Casual Sweatshirt",
    price: 55,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(55, 30),
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sweatshirts",
    isOnSale: true,
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
  },
];
