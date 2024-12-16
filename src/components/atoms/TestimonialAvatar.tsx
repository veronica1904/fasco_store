interface TestimonialAvatarProps {
  src: string;
  alt: string;
}

export const TestimonialAvatar = ({ src, alt }: TestimonialAvatarProps) => (
  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg flex-shrink-0">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);
