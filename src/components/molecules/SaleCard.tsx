import { ShopNowButton } from "../atoms/ShopNowButton";

export const SaleCard = () => (
  <div className="bg-white p-8 flex flex-col items-center justify-center text-center space-y-6 rounded-lg shadow-md h-[426px]">
    <div className="space-y-4">
      <h2 className="text-5xl font-bold text-textTitle">ULTIMATE</h2>
      <div className="relative">
        <h2
          className="text-8xl font-bold text-transparent"
          style={{ WebkitTextStroke: "2px #1a1a1a" }}
        >
          SALE
        </h2>
      </div>
    </div>
    <p className="text-gray-600 uppercase tracking-wider">NEW COLLECTION</p>
    <ShopNowButton />
  </div>
);
