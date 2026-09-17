import coffeeImage from "@/assets/menu-coffee.jpg";
import Macchiato from "@/assets/Macchiato.jpg";
import Breakfast from "@/assets/Breakfast.jpg";
import fruit from  "@/assets/fresh-fruit-tart.jpg";
import mango from  "@/assets/fresh-mano-juice.jpg";
import checolate from  "@/assets/Signature-Chocolate-Cake.jpg";
import chicken from  "@/assets/Herbed-Chicken-Plate.jpg";
import avocado from  "@/assets/Avocado-Toast.jpg";

export type MenuCategory = "Coffee" | "Breakfast" | "Main Dishes" | "Desserts" | "Fresh Juices";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  featured?: boolean;
};

export const menuCategories: Array<"All" | MenuCategory> = [
  "All",
  "Coffee",
  "Breakfast",
  "Main Dishes",
  "Desserts",
  "Fresh Juices",
];

export const menuItems: MenuItem[] = [
  {
    name: "Ethiopian Coffee Ceremony",
    description: "Freshly roasted beans, incense, and the ritual of three pours.",
    price: "ETB 280",
    category: "Coffee",
    image: coffeeImage,
    featured: true,
  },
  {
    name: "Macchiato",
    description: "Silky espresso finished with a cloud of steamed milk.",
    price: "ETB 160",
    category: "Coffee",
    image: Macchiato,
  },
  {
    name: "Luxury Breakfast",
    description: "Eggs, avocado, sourdough, roasted tomato, and seasonal greens.",
    price: "ETB 420",
    category: "Breakfast",
    image: Breakfast,
    featured: true,
  },
  {
    name: "Avocado Toast",
    description: "Sourdough, smashed avocado, herbs, and a soft poached egg.",
    price: "ETB 320",
    category: "Breakfast",
    image: avocado,
  },
  {
    name: "Woldia Beef Tenderloin",
    description: "Chargrilled tenderloin, garden vegetables, and a rich coffee jus.",
    price: "ETB 780",
    category: "Main Dishes",
    image: chicken,
    featured: true,
  },
  {
    name: "Herbed Chicken Plate",
    description: "Roasted chicken, fragrant rice, and bright seasonal salad.",
    price: "ETB 560",
    category: "Main Dishes",
    image: chicken,
  },
  {
    name: "Signature Chocolate Cake",
    description: "Dark chocolate sponge, velvet ganache, and a touch of gold.",
    price: "ETB 260",
    category: "Desserts",
    image: checolate,
    featured: true,
  },
  {
    name: "Seasonal Fruit Tart",
    description: "Buttery pastry, vanilla cream, and the best fruit of the season.",
    price: "ETB 220",
    category: "Desserts",
    image: fruit,
  },
  {
    name: "Mango & Passion Fresh Juice",
    description: "Sun-ripened mango blended with bright passion fruit.",
    price: "ETB 190",
    category: "Fresh Juices",
    image: mango,
  },
];