import { useState, useEffect } from "react";
import { SectionTitle } from "../atoms/SectionTitle";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { CarouselButton } from "../atoms/CarouselButton";
import { useWindowSize } from "../../hooks/useWindowSize";
import testimonial1 from "../../assets/img/customers/testimonio1.png";
import testimonial2 from "../../assets/img/customers/testimonio2.png";
import testimonial3 from "../../assets/img/customers/testimonio3.png";

const testimonials = [
  {
    id: 1,
    avatar: testimonial1,
    name: "Sarah W.",
    role: "Customer",
    rating: 5,
    content:
      "I was looking for formal wear for my sister's wedding and found exactly what I needed here. The quality is outstanding!",
  },
  {
    id: 2,
    avatar: testimonial2,
    name: "James K.",
    role: "Traveler",
    rating: 5,
    content:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!\"",
  },
  {
    id: 3,
    avatar: testimonial3,
    name: "Emily R.",
    role: "Fashion Designer",
    rating: 5,
    content:
      "The attention to detail and the quality of the materials exceeded my expectations. Highly recommended!",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const getVisibleCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  useEffect(() => {
    if (currentIndex > testimonials.length - visibleCount) {
      setCurrentIndex(0);
    }
  }, [visibleCount]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="This Is What Our Customers Say"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem."
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-stretch gap-4 md:gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-1 transition-all duration-300 ${
                  isMobile ||
                  (isTablet && index === 1) ||
                  (!isTablet && index === 1)
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-95"
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-5">
            <CarouselButton direction="prev" onClick={prevSlide} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-5">
            <CarouselButton direction="next" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </section>
  );
};
