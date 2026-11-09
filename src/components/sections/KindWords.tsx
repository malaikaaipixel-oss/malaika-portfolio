import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { StarRating } from '../ui/StarRating';
import { TESTIMONIALS } from '../../config/testimonials';

export function KindWords() {
  return (
    <section id="kind-words" className="py-20 lg:py-28" aria-label="Testimonials">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">Kind Words</span>
            <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory mb-5 leading-[1.2]">
            What others say.
          </h2>
        </ScrollReveal>

        {TESTIMONIALS.length === 0 ? (
          <ScrollReveal delay={100}>
            <div className="border border-plum-3 border-dashed py-16 px-8 text-center">
              <Quote size={24} className="text-plum-4 mx-auto mb-4" />
              <p className="font-display text-base font-semibold text-ivory mb-2">
                Testimonials coming soon.
              </p>
              <p className="font-body text-sm text-lavender-2">
                Have we worked together?{' '}
                <Link
                  to="/feedback"
                  className="text-orchid underline underline-offset-2 hover:text-orchid-light transition-colors"
                >
                  Share your experience.
                </Link>
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <article className="bg-plum-2 border border-plum-3 p-6 flex flex-col h-full">
                  {t.rating !== undefined && t.rating > 0 && (
                    <div className="mb-4">
                      <StarRating value={t.rating} size={14} />
                    </div>
                  )}
                  <blockquote className="font-body text-sm text-lavender leading-relaxed flex-1 mb-5">
                    "{t.text}"
                  </blockquote>
                  <footer>
                    <p className="font-display font-semibold text-ivory text-sm">{t.name}</p>
                    <p className="font-body text-xs text-lavender-2 mt-0.5">
                      {t.role}{t.company ? ` · ${t.company}` : ''}
                    </p>
                  </footer>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
