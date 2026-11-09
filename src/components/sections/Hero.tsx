import { ArrowRight, ChevronDown } from 'lucide-react';
import { IDENTITY, PORTRAIT } from '../../config/portfolio';

function PortraitPlaceholder() {
  return (
    <svg
      viewBox="0 0 360 440"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Portrait placeholder — add your professional photo here"
      role="img"
    >
      <defs>
        <radialGradient id="heroGrad" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#3A2244" />
          <stop offset="100%" stopColor="#170B20" />
        </radialGradient>
        <radialGradient id="heroGlow" cx="50%" cy="30%" r="45%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coralGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF746C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF746C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="360" height="440" fill="url(#heroGrad)" />
      <rect width="360" height="440" fill="url(#heroGlow)" />

      {/* Subtle dot grid */}
      <g opacity="0.08">
        {[...Array(8)].map((_, col) =>
          [...Array(10)].map((_, row) => (
            <circle
              key={`${col}-${row}`}
              cx={25 + col * 45}
              cy={22 + row * 44}
              r="1"
              fill="#A855F7"
            />
          ))
        )}
      </g>

      {/* Decorative rings */}
      <circle cx="180" cy="158" r="90" fill="none" stroke="#A855F7" strokeWidth="0.6" opacity="0.2" />
      <circle cx="180" cy="158" r="115" fill="none" stroke="#A855F7" strokeWidth="0.3" opacity="0.1" />

      {/* Abstract silhouette — head */}
      <ellipse cx="180" cy="148" rx="48" ry="52" fill="#4E3060" opacity="0.7" />
      {/* Neck */}
      <rect x="166" y="194" width="28" height="22" rx="4" fill="#4E3060" opacity="0.6" />
      {/* Shoulders / torso */}
      <path
        d="M 60 400 Q 58 300 122 278 Q 150 268 180 270 Q 210 268 238 278 Q 302 300 300 400 Z"
        fill="#3A2244"
        opacity="0.7"
      />

      {/* Coral top gradient */}
      <rect width="360" height="80" fill="url(#coralGlow)" />

      {/* Corner brackets — coral */}
      <g stroke="#FF746C" strokeWidth="1.5" opacity="0.6">
        <line x1="18" y1="18" x2="42" y2="18" />
        <line x1="18" y1="18" x2="18" y2="42" />
        <line x1="342" y1="18" x2="318" y2="18" />
        <line x1="342" y1="18" x2="342" y2="42" />
        <line x1="18" y1="422" x2="42" y2="422" />
        <line x1="18" y1="422" x2="18" y2="398" />
        <line x1="342" y1="422" x2="318" y2="422" />
        <line x1="342" y1="422" x2="342" y2="398" />
      </g>

      {/* Divider */}
      <line x1="80" y1="400" x2="280" y2="400" stroke="#4E3060" strokeWidth="0.8" opacity="0.6" />

      {/* Label text */}
      <text
        x="180"
        y="418"
        textAnchor="middle"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="400"
        letterSpacing="2.5"
        fill="#7A6894"
      >
        YOUR PORTRAIT
      </text>
      <text
        x="180"
        y="432"
        textAnchor="middle"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="7.5"
        letterSpacing="1"
        fill="#4E3060"
      >
        Set PORTRAIT.src in portfolio.ts
      </text>
    </svg>
  );
}

export function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineLines = IDENTITY.headline.split('\n');

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 lg:pt-28 lg:pb-20"
      aria-label="Introduction"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #FF746C 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ─── Text ───────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Eyebrow */}
            <div className="hero-animate-1 flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-coral" aria-hidden="true" />
              <span className="font-body text-xs font-medium tracking-widest uppercase text-coral">
                {IDENTITY.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate-2 font-display font-bold text-ivory mb-5 leading-[1.18]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 1
                    ? <span className="text-orchid">{line}</span>
                    : line}
                </span>
              ))}
            </h1>

            {/* Supporting text */}
            <p className="hero-animate-3 font-body text-base text-lavender leading-relaxed mb-6 max-w-lg">
              {IDENTITY.shortBio}
            </p>

            {/* Expertise pills */}
            <div className="hero-animate-4 flex flex-wrap gap-2 mb-8">
              {IDENTITY.expertise.map((item) => (
                <span
                  key={item}
                  className="font-body text-xs text-lavender-2 px-3 py-1.5 border border-plum-4 bg-plum-2"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-animate-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleScroll('#work')}
                className="btn-primary group"
              >
                Explore My Work
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-outline"
              >
                Say Hello
              </button>
            </div>
          </div>

          {/* ─── Portrait ───────────────────────────────────────── */}
          <div className="hero-portrait order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[360px]">

              {/* Decorative offset frame */}
              <div
                className="absolute inset-0 border border-orchid/15 translate-x-3 translate-y-3 -z-10"
                aria-hidden="true"
              />

              {/* Portrait container — fixed aspect, no overflow crop */}
              <div className="relative border border-plum-3 overflow-hidden w-full aspect-[4/5] bg-plum-2">
                {PORTRAIT.src ? (
                  <img
                    src={PORTRAIT.src}
                    alt={PORTRAIT.alt}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full">
                    <PortraitPlaceholder />
                  </div>
                )}
              </div>

              {/* Info chip */}
              <div className="absolute -bottom-4 -left-4 bg-plum-1 border border-plum-3 px-4 py-2.5 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-lavender-2 leading-none mb-0.5">Founder & CEO</p>
                  <p className="font-display text-sm font-bold text-ivory leading-none">Beacon Bridge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex items-center gap-2 mt-14 text-lavender-4">
          <div className="scroll-indicator">
            <ChevronDown size={14} />
          </div>
          <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
