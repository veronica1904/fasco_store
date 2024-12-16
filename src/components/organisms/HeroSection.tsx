import { ImageCard } from "../molecules/ImageCard";
import { SaleCard } from "../molecules/SaleCard";
import leftImg from "../../assets/img/left.png";
import topImg from "../../assets/img/top.png";
import bottomImg from "../../assets/img/bottom.png";
import reigthImg from "../../assets/img/reigth.png";

export const HeroSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
    <div className="flex justify-center lg:justify-end bg-customGray rounded-lg relative  h-[724px]">
      <ImageCard imageUrl={leftImg} />
    </div>
    <div className="flex flex-col items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      <ImageCard
        imageUrl={topImg}
        width={340}
        height={120}
        className="rounded-lg shadow-lg"
      />

      <div className="w-[340px]">
        <SaleCard />
      </div>
      <ImageCard
        imageUrl={bottomImg}
        width={340}
        height={120}
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="flex justify-center lg:justify-start bg-customGray rounded-lg relative h-[724px]">
      <ImageCard imageUrl={reigthImg} />
    </div>
  </div>
);
