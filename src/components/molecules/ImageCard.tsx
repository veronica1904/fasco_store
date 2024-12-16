interface ImageCardProps {
  imageUrl: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ImageCard = ({
  imageUrl,
  width,
  height,
  className = "",
}: ImageCardProps) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      width: width ? `${width}px` : "100%",
      height: height ? `${height}px` : "auto",
    }}
  >
    <img
      src={imageUrl}
      alt="Fashion model"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
    />
  </div>
);
