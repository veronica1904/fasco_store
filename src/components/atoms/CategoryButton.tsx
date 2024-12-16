interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryButton = ({
  label,
  isActive = false,
  onClick,
}: CategoryButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition-colors ${
      isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {label}
  </button>
);
