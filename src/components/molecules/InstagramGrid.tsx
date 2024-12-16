import { InstagramImage } from "../atoms/InstagramImage";

interface InstagramPost {
  id: string;
  imageUrl: string;
  alt: string;
}

interface InstagramGridProps {
  posts: InstagramPost[];
}

export const InstagramGrid = ({ posts }: InstagramGridProps) => (
  <div className="flex w-full justify-center">
    {posts.map((post, index) => {
      const isEven = index % 2 === 0;
      const width = isEven ? 300 : 256;
      const height = isEven ? 298 : 380;

      return (
        <InstagramImage
          key={post.id}
          src={post.imageUrl}
          alt={post.alt}
          width={width}
          height={height}
        />
      );
    })}
  </div>
);
