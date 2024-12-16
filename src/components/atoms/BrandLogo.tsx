import { HTMLAttributes } from "react";

interface BrandLogoProps extends HTMLAttributes<HTMLImageElement> {
  name: string;
  logoUrl?: string;
  className?: string;
}

export const BrandLogo = ({
  name,
  logoUrl,
  className = "",
  ...props
}: BrandLogoProps) => {
  const src = logoUrl || `/brands/${name.toLowerCase().replace(" ", "-")}.svg`;

  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={`h-6 opacity-80 hover:opacity-100 transition-opacity ${className}`}
      {...props}
    />
  );
};
