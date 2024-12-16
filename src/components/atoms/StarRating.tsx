interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => (
  <div className="flex">
    {[...Array(maxRating)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-orange-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);
