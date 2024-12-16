interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => (
  <button
    onClick={onClick}
    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
  >
    {direction === "prev" ? (
      <span className="sr-only">Previous</span>
    ) : (
      <span className="sr-only">Next</span>
    )}
    <svg
      className={`w-5 h-5 md:w-6 md:h-6 text-gray-800 ${direction === "prev" ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);
