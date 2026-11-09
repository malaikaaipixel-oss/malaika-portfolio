import { useEffect, useState } from 'react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { PROJECTS } from '../../config/portfolio';
import type { Project } from '../../types';

// ─── Project illustrations (plum/orchid/coral palette) ──────────────────────

function BeaconBridgeIllustration() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="300" fill="#0F0418" />
      {/* Nav */}
      <rect width="560" height="40" fill="#1D1028" />
      <rect x="16" y="13" width="32" height="14" rx="2" fill="#A855F7" opacity="0.9" />
      <rect x="56" y="15" width="60" height="10" rx="2" fill="#28152F" />
      <rect x="124" y="15" width="50" height="10" rx="2" fill="#28152F" />
      <rect x="440" y="11" width="64" height="18" rx="2" fill="#A855F7" opacity="0.85" />
      <rect x="512" y="11" width="40" height="18" rx="2" fill="#28152F" />
      {/* Hero text */}
      <rect x="28" y="60" width="200" height="14" rx="2" fill="#3A2244" />
      <rect x="28" y="82" width="160" height="9" rx="2" fill="#28152F" />
      <rect x="28" y="97" width="180" height="9" rx="2" fill="#28152F" />
      <rect x="28" y="120" width="84" height="26" rx="2" fill="#A855F7" opacity="0.9" />
      <rect x="120" y="120" width="80" height="26" rx="2" fill="#28152F" />
      {/* Challenge cards */}
      <rect x="28" y="168" width="158" height="108" rx="3" fill="#1D1028" stroke="#3A2244" strokeWidth="1" />
      <rect x="40" y="180" width="70" height="8" rx="2" fill="#A855F7" opacity="0.7" />
      <rect x="40" y="194" width="134" height="7" rx="2" fill="#28152F" />
      <rect x="40" y="207" width="110" height="7" rx="2" fill="#28152F" />
      <rect x="40" y="220" width="90" height="7" rx="2" fill="#28152F" />
      <rect x="40" y="248" width="44" height="16" rx="2" fill="#A855F7" opacity="0.8" />
      <rect x="92" y="248" width="44" height="16" rx="2" fill="#28152F" />
      {/* Second card */}
      <rect x="196" y="168" width="158" height="108" rx="3" fill="#1D1028" stroke="#3A2244" strokeWidth="1" />
      <rect x="208" y="180" width="70" height="8" rx="2" fill="#FF746C" opacity="0.7" />
      <rect x="208" y="194" width="134" height="7" rx="2" fill="#28152F" />
      <rect x="208" y="207" width="110" height="7" rx="2" fill="#28152F" />
      <rect x="208" y="220" width="90" height="7" rx="2" fill="#28152F" />
      <rect x="208" y="248" width="44" height="16" rx="2" fill="#FF746C" opacity="0.7" />
      {/* Candidate panel */}
      <rect x="368" y="48" width="172" height="232" rx="3" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
      <circle cx="454" cy="98" r="26" fill="#28152F" />
      <circle cx="454" cy="88" r="14" fill="#3A2244" />
      <rect x="430" y="134" width="48" height="8" rx="2" fill="#4E3060" />
      <rect x="440" y="148" width="28" height="6" rx="2" fill="#28152F" />
      <rect x="384" y="168" width="140" height="1" fill="#28152F" />
      <rect x="384" y="180" width="60" height="6" rx="2" fill="#A855F7" opacity="0.5" />
      <rect x="384" y="192" width="140" height="6" rx="2" fill="#28152F" />
      <rect x="384" y="204" width="120" height="6" rx="2" fill="#28152F" />
      <rect x="384" y="216" width="130" height="6" rx="2" fill="#28152F" />
      <rect x="384" y="246" width="140" height="22" rx="2" fill="#A855F7" opacity="0.85" />
    </svg>
  );
}

function NorthstarCafeIllustration() {
  return (
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="280" fill="#170B20" />
      <defs>
        <linearGradient id="cafeOverlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D1028" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#170B20" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="520" height="180" fill="#1D1028" opacity="0.5" />
      <rect width="520" height="180" fill="url(#cafeOverlay)" />
      {/* Hero text centered */}
      <text x="260" y="70" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="700" fill="#F8F3FA" opacity="0.9">Northstar Café</text>
      <rect x="200" y="80" width="120" height="1" fill="#D9C8EA" opacity="0.3" />
      <text x="260" y="100" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#FF746C" letterSpacing="3">SPECIALTY COFFEE</text>
      <rect x="210" y="118" width="58" height="22" rx="1" fill="#A855F7" opacity="0.9" />
      <text x="239" y="133" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#fff" fontWeight="600">EXPLORE</text>
      <rect x="276" y="118" width="58" height="22" rx="1" fill="#28152F" />
      <text x="305" y="133" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#B9A9C5">RESERVE</text>
      {/* Cards row */}
      <rect x="16" y="194" width="148" height="72" rx="2" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
      <text x="90" y="222" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#F8F3FA" fontWeight="600">Menu</text>
      <text x="90" y="238" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#B9A9C5">Browse selections</text>
      <rect x="172" y="194" width="148" height="72" rx="2" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
      <text x="246" y="222" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#F8F3FA" fontWeight="600">Gallery</text>
      <text x="246" y="238" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#B9A9C5">Our space</text>
      <rect x="328" y="194" width="148" height="72" rx="2" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
      <text x="402" y="222" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#F8F3FA" fontWeight="600">Reserve</text>
      <text x="402" y="238" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#B9A9C5">Book a table</text>
    </svg>
  );
}

function NorthstarAIIllustration() {
  return (
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="280" fill="#170B20" />
      {/* Chat window */}
      <rect x="32" y="24" width="456" height="240" rx="6" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
      {/* Header */}
      <rect x="32" y="24" width="456" height="40" rx="6" fill="#28152F" />
      <rect x="32" y="48" width="456" height="16" fill="#28152F" />
      <circle cx="58" cy="44" r="12" fill="#170B20" />
      <text x="58" y="48" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#FF746C" fontWeight="700">AI</text>
      <rect x="78" y="38" width="72" height="7" rx="2" fill="#3A2244" />
      <rect x="78" y="49" width="50" height="5" rx="2" fill="#28152F" />
      {/* Messages */}
      <rect x="50" y="80" width="210" height="34" rx="4" fill="#28152F" />
      <rect x="60" y="88" width="140" height="6" rx="1" fill="#3A2244" />
      <rect x="60" y="99" width="110" height="6" rx="1" fill="#3A2244" />
      {/* Suggestion chips */}
      <rect x="50" y="122" width="80" height="18" rx="9" fill="none" stroke="#FF746C" strokeWidth="1" opacity="0.5" />
      <text x="90" y="135" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#FF746C" opacity="0.8">View Menu →</text>
      <rect x="138" y="122" width="92" height="18" rx="9" fill="none" stroke="#FF746C" strokeWidth="1" opacity="0.5" />
      <text x="184" y="135" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#FF746C" opacity="0.8">Book a Table →</text>
      {/* User msg */}
      <rect x="250" y="152" width="180" height="26" rx="4" fill="#3A2244" />
      <rect x="260" y="160" width="140" height="6" rx="1" fill="#4E3060" />
      <rect x="260" y="170" width="100" height="6" rx="1" fill="#4E3060" />
      {/* AI reply */}
      <rect x="50" y="192" width="260" height="44" rx="4" fill="#28152F" />
      <rect x="60" y="200" width="170" height="6" rx="1" fill="#3A2244" />
      <rect x="60" y="212" width="190" height="6" rx="1" fill="#3A2244" />
      <rect x="60" y="224" width="140" height="6" rx="1" fill="#3A2244" />
      {/* Typing dots */}
      <circle cx="64" cy="248" r="3" fill="#A855F7" opacity="0.9" />
      <circle cx="75" cy="248" r="3" fill="#A855F7" opacity="0.55" />
      <circle cx="86" cy="248" r="3" fill="#A855F7" opacity="0.25" />
      {/* Input */}
      <rect x="32" y="246" width="456" height="18" fill="#28152F" />
      <rect x="48" y="252" width="180" height="5" rx="2" fill="#3A2244" opacity="0.5" />
      <circle cx="468" cy="255" r="7" fill="#A855F7" opacity="0.8" />
    </svg>
  );
}

function AuraStudioIllustration() {
  return (
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="280" fill="#170B20" />
      {/* Big editorial letter */}
      <text x="520" y="260" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="200" fontWeight="800" fill="#28152F" opacity="0.5">A</text>
      {/* Headline stack */}
      <text x="36" y="74" fontFamily="DM Sans, sans-serif" fontSize="46" fontWeight="800" fill="#F8F3FA" opacity="0.95">Aura</text>
      <text x="36" y="122" fontFamily="DM Sans, sans-serif" fontSize="46" fontWeight="800" fill="#A855F7" opacity="0.9" fontStyle="italic">Studio</text>
      <rect x="36" y="133" width="180" height="1" fill="#A855F7" opacity="0.3" />
      <text x="36" y="152" fontFamily="DM Sans, sans-serif" fontSize="9" letterSpacing="3" fill="#B9A9C5">DIGITAL DESIGN AGENCY</text>
      {/* Service cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${36 + i * 120}, 172)`}>
          <rect width="108" height="80" rx="3" fill="#1D1028" stroke="#28152F" strokeWidth="1" />
          <rect x="10" y="12" width="36" height="36" rx="2" fill="#A855F7" opacity={0.08 + i * 0.04} />
          <rect x="14" y="16" width="28" height="4" rx="1" fill="#A855F7" opacity="0.5" />
          <rect x="14" y="24" width="22" height="4" rx="1" fill="#A855F7" opacity="0.3" />
          <rect x="14" y="32" width="26" height="4" rx="1" fill="#A855F7" opacity="0.2" />
          <rect x="10" y="56" width="72" height="5" rx="1" fill="#28152F" />
          <rect x="10" y="65" width="55" height="5" rx="1" fill="#28152F" />
        </g>
      ))}
    </svg>
  );
}

function ProjectIllustration({ id }: { id: string }) {
  switch (id) {
    case 'beacon-bridge':  return <BeaconBridgeIllustration />;
    case 'northstar-cafe': return <NorthstarCafeIllustration />;
    case 'northstar-ai':   return <NorthstarAIIllustration />;
    case 'aura-studio':    return <AuraStudioIllustration />;
    default:               return null;
  }
}

// ─── Case Study Modal ────────────────────────────────────────────────────────

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-plum/95 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="relative w-full max-w-2xl bg-plum-1 border border-plum-3 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-plum-3 flex items-start justify-between gap-4">
          <div>
            <span className="section-label block mb-2">{project.category}</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ivory">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-plum-3 text-lavender-2 hover:text-ivory hover:border-plum-4 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Status */}
        <div className="px-6 pt-4">
          <span className="inline-flex items-center gap-2 text-xs font-body text-lavender-2 border border-plum-3 bg-plum-2 px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orchid" />
            {project.statusLabel}
          </span>
        </div>

        {/* Illustration */}
        <div className="mx-6 mt-4 aspect-video bg-plum-2 overflow-hidden border border-plum-3">
          <ProjectIllustration id={project.id} />
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-display text-base font-bold text-ivory mb-2">Overview</h3>
            <p className="font-body text-sm text-lavender leading-relaxed">{project.longDescription}</p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ivory mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 bg-orchid rounded-full mt-2 flex-shrink-0" />
                  <span className="font-body text-sm text-lavender">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ivory mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-body text-xs text-lavender-2 px-2.5 py-1 border border-plum-3 bg-plum-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              View Live Project <ExternalLink size={13} />
            </a>
          ) : (
            <p className="font-body text-xs text-lavender-4 text-center py-3 border border-plum-3 bg-plum-2">
              Live URL will be added when available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Featured card (Beacon Bridge) ──────────────────────────────────────────

function FeaturedCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollReveal>
        <article className="group relative bg-plum-1 border border-plum-3 hover:border-plum-4 transition-all duration-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Info panel */}
            <div className="p-7 lg:p-9 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-orchid/60">{project.number}</span>
                <span className="h-px w-6 bg-plum-4" />
                <span className="font-body text-xs text-lavender-4 tracking-widest uppercase">{project.statusLabel}</span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-1">{project.title}</h3>
              <p className="font-body text-xs text-orchid tracking-wide mb-5">{project.category}</p>

              <p className="font-body text-sm text-lavender leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs text-lavender-2 px-2.5 py-1 border border-plum-3 bg-plum-2">
                    {tag}
                  </span>
                ))}
              </div>

              <button onClick={() => setOpen(true)} className="btn-primary self-start group/btn">
                View Case Study
                <ArrowUpRight size={13} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </button>
            </div>

            {/* Illustration */}
            <div className="relative bg-plum-2 overflow-hidden min-h-[220px] lg:min-h-0">
              <div className="absolute inset-0">
                <ProjectIllustration id={project.id} />
              </div>
              <div className="absolute inset-0 bg-plum/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Featured tag */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-plum-2 border border-orchid/20 px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orchid animate-pulse" />
            <span className="font-body text-xs text-orchid/80 tracking-wider">Featured</span>
          </div>
        </article>
      </ScrollReveal>
      {open && <CaseStudyModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Grid card ───────────────────────────────────────────────────────────────

function GridCard({ project, delay }: { project: Project; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollReveal delay={delay}>
        <article className="group flex flex-col bg-plum-1 border border-plum-3 hover:border-plum-4 transition-all duration-300 overflow-hidden h-full cursor-pointer">
          <div className="aspect-video bg-plum-2 relative overflow-hidden flex-shrink-0">
            <ProjectIllustration id={project.id} />
            <div className="absolute inset-0 bg-plum/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-orchid/50">{project.number}</span>
              <span className="font-body text-xs text-lavender-4 border border-plum-3 px-2 py-0.5">
                {project.statusLabel}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-ivory mb-0.5">{project.title}</h3>
            <p className="font-body text-xs text-orchid/70 tracking-wide mb-3">{project.category}</p>
            <p className="font-body text-sm text-lavender-2 leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-1.5 font-body text-sm text-lavender-2 group-hover:text-orchid transition-colors self-start"
            >
              View Case Study
              <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </article>
      </ScrollReveal>
      {open && <CaseStudyModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const grid = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 lg:py-28 bg-plum-1" aria-label="Selected work">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-label">Selected Work</span>
                <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
                Things I've built.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="font-body text-sm text-lavender-2 max-w-xs">
              From early-stage startups to concept builds and interactive prototypes.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-5">
            <FeaturedCard project={featured} />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {grid.map((p, i) => (
            <GridCard key={p.id} project={p} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
