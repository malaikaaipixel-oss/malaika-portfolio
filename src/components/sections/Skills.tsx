import { ScrollReveal } from '../ui/ScrollReveal';
import { CAPABILITIES } from '../../config/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28" aria-label="Capabilities">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">Capabilities</span>
              <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-[1.2]">
              What I bring<br />
              <span className="text-orchid">to the table.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="font-body text-base text-lavender leading-relaxed lg:pt-14">
              I combine engineering skills with product thinking — building digital experiences that
              are technically sound, well-designed, and genuinely useful.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CAPABILITIES.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div className="bg-plum-2 border border-plum-3 hover:border-plum-4 p-6 transition-colors duration-300 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-5 h-5 flex items-center justify-center bg-orchid/15 border border-orchid/30">
                    <span className="w-1.5 h-1.5 bg-orchid rounded-full" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ivory">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-xs text-lavender px-2.5 py-1.5 bg-plum-3 border border-plum-4 hover:border-orchid/30 hover:text-ivory transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
