
interface PopularityProps {
  popularity: number
}


export const Popularity = ({ popularity }: PopularityProps) => {
  const maxPopularity = 4201.992;
  const starCount = 5;
  const popularityPercentage = (popularity / maxPopularity) * starCount;

  const renderStars = (count: number) => {
    const fullStars = Math.floor(count);
    const halfStar = count % 1 >= 0.5 ? 1 : 0;
    const emptyStars = starCount - fullStars - halfStar;

    return (
      <>
        {fullStars === 0 && halfStar === 0 && (
          <span className="text-gray-300">★</span>
        )}
        {Array.from({ length: fullStars }, (_, index) => (
          <span className="text-yellow-300" key={`full-${index}`}>★</span>
        ))}
        {halfStar === 1 && <span key="half" className="text-yellow-300">★</span>}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">☆</span>
        ))}
      </>
    );
  };

  return (
    <div className="">
      <div className="flex items-center">
        {renderStars(popularityPercentage)}
      </div>

    </div>
  );
};

export default Popularity;