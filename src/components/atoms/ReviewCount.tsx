interface ReviewCountProps {
  count: number;
  label: string;
}

export const ReviewCount = ({ count, label }: ReviewCountProps) => (
  <span className="text-gray-600 text-sm">
    ({count}k) {label}
  </span>
);
