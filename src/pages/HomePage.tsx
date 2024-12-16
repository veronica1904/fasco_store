import { HeroSection } from "../components/organisms/HeroSection";
import { BrandsSection } from "../components/organisms/BrandsSection";
import { NewArrivalsSection } from "../components/organisms/NewArrivalsSection";
import { TestimonialsSection } from "../components/organisms/TestimonialsSection";
import { InstagramSection } from "../components/organisms/InstagramSection";
import { TheMonth } from "../components/organisms/TheMonth";

export const HomePage = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto">
        <HeroSection />
        <BrandsSection />
      </div>
      <TheMonth />
      <NewArrivalsSection />
      <InstagramSection />
      <TestimonialsSection />
    </main>
  );
};
