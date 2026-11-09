export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating?: number;
}

// ─────────────────────────────────────────────────────────────
// HOW TO PUBLISH A RECOMMENDATION
//
// 1. A recommendation arrives in your Formspree inbox.
// 2. Verify the person's identity and review the content.
// 3. Reply to confirm they still want it published publicly.
// 4. Only then add an entry to this array.
//
// NEVER auto-populate this list from form submissions.
// ONLY add entries after receiving explicit written consent.
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [];
