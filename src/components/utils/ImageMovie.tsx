import Image from 'next/image';
import { useState } from 'react';

interface ImageMovieProps {
  alt: string;
  height: number;
  width: number;
  src: string;
  styles?: string;
}

export const ImageMovie = ({
  alt,
  height,
  src,
  width,
  styles
}: ImageMovieProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <div className="">
      <Image
        alt={alt}
        height={height}
        width={width}
        className={styles}
        src={isError ? '/images/fallback-image.jpg' : src}
        onError={() => setIsError(true)}
        loading="lazy"
        priority={false}
        quality={75}
        blurDataURL="/images/blur.jpg"
        placeholder="blur"
      />
    </div>
  );
};