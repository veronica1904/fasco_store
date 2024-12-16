interface ShopNowButtonProps {
  className?: string;
}

export const ShopNowButton = ({ className = "" }: ShopNowButtonProps) => (
  <button
    className={`bg-black text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors ${className}`}
  >
    SHOP NOW
  </button>
);
