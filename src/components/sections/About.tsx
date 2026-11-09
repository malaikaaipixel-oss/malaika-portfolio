import { ScrollReveal } from '../ui/ScrollReveal';
import { IDENTITY } from '../../config/portfolio';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-plum" aria-label="About">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-label">About</span>
                <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory mb-6 leading-[1.2]">
                Founder, product builder,<br />
                <span className="text-orchid">and developer.</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div>
            <ScrollReveal delay={100}>
              <p className="font-body text-base text-lavender leading-relaxed mb-8">
                {IDENTITY.about}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Venture', value: 'Beacon Bridge' },
                  { label: 'Role', value: 'Founder & CEO' },
                  { label: 'Focus', value: 'HRTech · Product' },
                  { label: 'Stack', value: 'React · TypeScript' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-plum-2 border border-plum-3 px-4 py-3">
                    <p className="font-body text-xs text-lavender-4 tracking-widest uppercase mb-1">{label}</p>
                    <p className="font-body text-sm text-ivory font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
