import { TestimonialAvatar } from "../atoms/TestimonialAvatar";
import { TestimonialRating } from "../atoms/TestimonialRating";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  content: string;
}

export const TestimonialCard = ({
  avatar,
  name,
  role,
  rating,
  content,
}: TestimonialCardProps) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md h-full">
    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
      <TestimonialAvatar src={avatar} alt={name} />
      <div>
        <h3 className="font-semibold text-base md:text-lg">{name}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{role}</p>
      </div>
    </div>
    <TestimonialRating rating={rating} />
    <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700 line-clamp-4 md:line-clamp-none">
      {content}
    </p>
  </div>
);
