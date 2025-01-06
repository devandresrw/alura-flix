export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('https://res.cloudinary.com')) {
    const parts = src.split('/upload/');
    return `${parts[0]}/upload/w_${width},q_${quality || 75}/${parts[1]}`;
  }
  return src;
}