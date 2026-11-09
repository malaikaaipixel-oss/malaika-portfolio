import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS, IDENTITY } from '../../config/portfolio';
import { useScrollProgress, useActiveSection } from '../../hooks/useIntersectionObserver';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const progress = useScrollProgress();
  const sectionIds = useMemo(
    () => NAV_ITEMS.map((item) => item.href.replace('#', '')),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      window.location.href = href === '#hero' ? '/' : `/${href}`;
      return;
    }
    if (href === '#hero') {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`
          hero-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-plum/90 backdrop-blur-md border-b border-plum-3/50' : 'bg-transparent'}
        `}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-orchid/10 border border-orchid/30 group-hover:border-orchid/60 transition-colors duration-200">
              <span className="font-display font-bold text-orchid text-lg leading-none">M</span>
            </span>
            <span className="font-display font-semibold text-ivory text-sm hidden sm:block">
              {IDENTITY.name}
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = location.pathname === '/' &&
                (activeSection === id || (id === 'hero' && activeSection === ''));
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`
                      font-body text-sm transition-colors duration-200
                      ${isActive ? 'text-ivory' : 'text-lavender-2 hover:text-lavender'}
                    `}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA — coral button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:inline-flex items-center gap-1.5 font-body text-xs font-medium px-4 py-2 bg-coral text-white hover:bg-coral-dark transition-all duration-200"
          >
            Say Hello
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-lavender-2 hover:text-ivory transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-plum flex flex-col pt-20
          transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 flex flex-col justify-center px-8">
          <ul className="space-y-1" role="list">
            {NAV_ITEMS.map(({ label, href }, i) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`
                    font-display text-4xl sm:text-5xl font-bold text-lavender hover:text-ivory
                    transition-all duration-300 py-2 w-full text-left
                    ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}
                  style={{ transitionDelay: `${80 + i * 50}ms` }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div
            className={`mt-12 pt-8 border-t border-plum-3 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '280ms' }}
          >
            <p className="font-body text-xs text-lavender-4 tracking-widest uppercase mb-2">
              Founder & CEO
            </p>
            <p className="font-body text-sm text-orchid">Beacon Bridge</p>
          </div>
        </div>
      </div>
    </>
  );
}
