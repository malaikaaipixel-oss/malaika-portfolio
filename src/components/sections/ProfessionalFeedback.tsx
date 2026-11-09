import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProfessionalFeedback() {
  return (
    <section className="py-14 border-t border-plum-3" aria-label="Professional recommendations">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Star size={12} className="text-coral flex-shrink-0" />
              <span className="font-body text-xs text-coral tracking-widest uppercase font-medium">Recommendations</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ivory mb-2">
              Have we worked together?
            </h2>
            <p className="font-body text-sm text-lavender-2 leading-relaxed">
              If you've collaborated with me professionally, I'd love for you to share your experience.
              Recommendations are never published without your explicit approval.
            </p>
          </div>

          <Link
            to="/feedback"
            className="btn-outline whitespace-nowrap flex-shrink-0"
          >
            Leave a Recommendation
          </Link>
        </div>
      </div>
    </section>
  );
}
