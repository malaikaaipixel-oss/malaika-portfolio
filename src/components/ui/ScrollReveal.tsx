import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'fade';
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  const revealClass =
    direction === 'up'
      ? 'reveal-up'
      : direction === 'left'
      ? 'reveal-left'
      : 'reveal-fade';

  return (
    <div
      ref={ref}
      className={`${revealClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
