import { useState } from "react";
import { CategoryTabs } from "../molecules/CategoryTabs";
import { ProductCard } from "../molecules/ProductCard";
import WhiteShirtImg from "../../assets/img/cards/White Shirt.png";
import WhiteDressImg from "../../assets/img/cards/White Dress.png";
import ShinyDressImg from "../../assets/img/cards/Shiny Dress.png";
import LongDressImg from "../../assets/img/cards/Long Dress.png";
import FullSweaterImg from "../../assets/img/cards/Full Sweater.png";
import ColorfulDressImg from "../../assets/img/cards/Colorful Dress.png";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const products = [
  {
    id: 1,
    image: ShinyDressImg,
    title: "Shiny Dress",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: true,
  },
  {
    id: 2,
    image: LongDressImg,
    title: "Long Dress",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: false,
  },
  {
    id: 3,
    image: FullSweaterImg,
    title: "Full Sweater",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: true,
  },
  {
    id: 4,
    image: WhiteDressImg,
    title: "White Dress",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: true,
  },
  {
    id: 5,
    image: ColorfulDressImg,
    title: "Colorful Dress",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: false,
  },
  {
    id: 6,
    image: WhiteShirtImg,
    title: "White Shirt",
    brand: "Karam",
    price: 95.5,
    rating: 5,
    reviews: { count: 4.1, label: "Customer Reviews" },
    almostSoldOut: true,
  },
];

export const NewArrivalsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  return (
    <section className="py-20 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          View More
        </button>
      </div>
    </section>
  );
};
