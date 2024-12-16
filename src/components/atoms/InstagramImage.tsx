interface InstagramImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const InstagramImage = ({
  src,
  alt,
  width,
  height,
}: InstagramImageProps) => (
  <div
    className="relative group overflow-hidden"
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
  </div>
);
