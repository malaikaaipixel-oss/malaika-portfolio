import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ProfessionalFeedbackForm } from '../components/sections/ProfessionalFeedbackForm';

export function FeedbackPage() {
  return (
    <main className="pt-16" aria-label="Leave a recommendation">
      <div className="relative py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #FF746C 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-body text-xs text-lavender-2 hover:text-ivory mb-10 transition-colors duration-200 group"
          >
            <ChevronLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">Recommendations</span>
            <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-4 leading-[1.2]">
            Share Your Experience
          </h1>
          <p className="font-body text-base text-lavender leading-relaxed mb-10">
            If we've worked together professionally, I'd love for you to share your experience.
            All submissions are reviewed privately — your recommendation will never be published
            without your explicit permission.
          </p>

          <ProfessionalFeedbackForm />
        </div>
      </div>
    </main>
  );
}
