import { Price } from "../atoms/Price";
import { StarRating } from "../atoms/StarRating";
import { ReviewCount } from "../atoms/ReviewCount";
import { ProductBrand } from "../atoms/ProductBrand";
import { SoldOutBadge } from "../atoms/SoldOutBadge";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: { count: number; label: string };
  brand: string;
  almostSoldOut?: boolean;
}

export const ProductCard = ({
  image,
  title,
  price,
  rating,
  reviews,
  brand,
  almostSoldOut = false,
}: ProductCardProps) => (
  <div className="bg-white rounded-2xl p-4 space-y-4">
    {/* Image Container */}
    <div className="aspect-[4/3] rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content Container */}
    <div className="space-y-2">
      {/* Title and Brand */}
      <div>
        <div className="flex justify-between gap-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <StarRating rating={rating} />
        </div>

        <ProductBrand name={brand} />
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center">
        <ReviewCount {...reviews} />
      </div>

      {/* Price and Status */}
      <div className="flex justify-between items-center">
        <Price amount={price} />
        {almostSoldOut && <SoldOutBadge />}
      </div>
    </div>
  </div>
);
