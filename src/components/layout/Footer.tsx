import { GithubIcon, Linkedin, Mail } from 'lucide-react';
import { IDENTITY, CONTACT, NAV_ITEMS } from '../../config/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-plum-3 bg-plum-1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 flex items-center justify-center bg-orchid/10 border border-orchid/30">
                <span className="font-display font-bold text-orchid text-base leading-none">M</span>
              </span>
              <span className="font-display font-semibold text-ivory text-sm">{IDENTITY.name}</span>
            </div>
            <p className="font-body text-xs text-lavender-2 leading-relaxed">
              Founder & CEO of Beacon Bridge. Building digital products with purpose and vision.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-xs text-lavender-4 tracking-widest uppercase mb-4">Navigate</p>
            <ul className="space-y-2" role="list">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-body text-sm text-lavender-2 hover:text-lavender transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs text-lavender-4 tracking-widest uppercase mb-4">Connect</p>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 group"
                aria-label="Email"
              >
                <Mail size={13} className="text-lavender-4 group-hover:text-orchid transition-colors" />
                <span className="font-body text-sm text-lavender-2 group-hover:text-lavender transition-colors">
                  {CONTACT.email}
                </span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} className="text-lavender-4 group-hover:text-orchid transition-colors" />
                <span className="font-body text-sm text-lavender-2 group-hover:text-lavender transition-colors">
                  LinkedIn
                </span>
              </a>
              {CONTACT.github && (
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
                aria-label="GitHub"
              >
                <GithubIcon size={13} className="text-lavender-4 group-hover:text-orchid transition-colors" />
                <span className="font-body text-sm text-lavender-2 group-hover:text-lavender transition-colors">
                  GitHub
                </span>
              </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-plum-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-lavender-4">
            © {year} {IDENTITY.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-lavender-4">
            Designed & built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
