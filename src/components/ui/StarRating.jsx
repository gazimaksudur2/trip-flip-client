import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ value = 0, onChange, precision = 0.5, size = 20, readOnly = false, className = '' }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  const handleClick = (starValue) => {
    if (readOnly || !onChange) return;
    onChange(starValue);
  };

  const handleMouseEnter = (starValue) => {
    if (readOnly) return;
    setHoverValue(starValue);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = displayValue - i;
    let StarIcon;
    if (diff >= 0) {
      StarIcon = FaStar;
    } else if (diff > -1 && precision <= 0.5) {
      StarIcon = FaStarHalfAlt;
    } else {
      StarIcon = FaRegStar;
    }

    stars.push(
      <button
        key={i}
        type="button"
        onClick={() => handleClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        className={`text-amber-400 transition-transform ${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
        disabled={readOnly}
        tabIndex={readOnly ? -1 : 0}
        aria-label={`${i} star${i > 1 ? 's' : ''}`}
      >
        <StarIcon size={size} />
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} role="group" aria-label="Star rating">
      {stars}
    </div>
  );
};

export default StarRating;
