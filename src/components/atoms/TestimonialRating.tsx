interface TestimonialRatingProps {
  rating: number;
}

export const TestimonialRating = ({ rating }: TestimonialRatingProps) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);
