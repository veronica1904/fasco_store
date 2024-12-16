import { SectionTitle } from "../atoms/SectionTitle";
import { InstagramGrid } from "../molecules/InstagramGrid";
import foll1Img from "../../assets/img/follwus/follw1.png";
import foll2Img from "../../assets/img/follwus/follw2.png";
import foll3Img from "../../assets/img/follwus/follw3.png";
import foll4Img from "../../assets/img/follwus/follw4.png";
import foll5Img from "../../assets/img/follwus/follw5.png";
import foll6Img from "../../assets/img/follwus/follw6.png";
import foll7Img from "../../assets/img/follwus/follw7.png";

const instagramPosts = [
  {
    id: "1",
    imageUrl: foll1Img,
    alt: "Fashion model in beige coat",
  },
  {
    id: "2",
    imageUrl: foll2Img,
    alt: "Model in gray tracksuit",
  },
  {
    id: "3",
    imageUrl: foll3Img,
    alt: "Summer fashion model",
  },
  {
    id: "4",
    imageUrl: foll4Img,
    alt: "Casual men fashion",
  },
  {
    id: "5",
    imageUrl: foll5Img,
    alt: "Woman in blue dress",
  },
  {
    id: "6",
    imageUrl: foll6Img,
    alt: "Urban fashion style",
  },
  {
    id: "7",
    imageUrl: foll7Img,
    alt: "Elegant fashion look",
  },
];

export const InstagramSection = () => (
  <section className="mt-10">
    <div className="container mx-auto px-4 mb-12">
      <SectionTitle
        title="Follow Us On Instagram"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin"
      />
    </div>
    <InstagramGrid posts={instagramPosts} />
  </section>
);
