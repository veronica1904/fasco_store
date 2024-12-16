import { CategoryButton } from "../atoms/CategoryButton";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {categories.map((category) => (
      <CategoryButton
        key={category}
        label={category}
        isActive={category === activeCategory}
        onClick={() => onCategoryChange(category)}
      />
    ))}
  </div>
);
