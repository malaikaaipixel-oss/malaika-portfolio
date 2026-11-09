import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange?: (rating: number) => void;
  size?: number;
}

export function StarRating({ value, onChange, size = 16 }: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const interactive = !!onChange;
  const active = interactive ? (hovered || value) : value;

  return (
    <div className="flex gap-0.5" role="group" aria-label={`${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = active >= star;
        if (interactive) {
          return (
            <button
              key={star}
              type="button"
              onClick={() => onChange?.(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              aria-pressed={value === star}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={size}
                fill={filled ? 'currentColor' : 'none'}
                className={filled ? 'text-coral' : 'text-plum-4'}
              />
            </button>
          );
        }
        return (
          <span key={star} aria-hidden="true">
            <Star
              size={size}
              fill={filled ? 'currentColor' : 'none'}
              className={filled ? 'text-coral' : 'text-plum-4'}
            />
          </span>
        );
      })}
    </div>
  );
}
