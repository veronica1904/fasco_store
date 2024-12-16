interface ProductBrandProps {
  name: string;
}

export const ProductBrand = ({ name }: ProductBrandProps) => (
  <span className="text-gray-600 text-sm">At {name}</span>
);
