interface PriceProps {
  amount: number;
  className?: string;
}

export const Price = ({ amount, className = "" }: PriceProps) => (
  <span className={`text-2xl font-bold ${className}`}>
    ${amount.toFixed(2)}
  </span>
);
