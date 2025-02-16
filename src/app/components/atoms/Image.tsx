import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      unoptimized={true}
    />
  );
};

export default Image;
