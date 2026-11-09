/**
 * Portfolio Configuration
 * ─────────────────────────────────────────────────────────────
 * Edit this file to update all personal information, projects,
 * social links, and settings. One file, everything in one place.
 * ─────────────────────────────────────────────────────────────
 */

import type { Project, CapabilityGroup, NavItem } from '../types';

// ─── Personal Identity ──────────────────────────────────────────────────────

export const IDENTITY = {
  name: 'Malaika',
  eyebrow: 'FOUNDER · PRODUCT BUILDER',
  title: 'Founder & CEO · Frontend Developer',
  headline: 'Building digital products\nwith purpose and vision.',
  shortBio:
    "I'm the founder of Beacon Bridge, creating technology-driven solutions and meaningful digital experiences through product thinking, design, and development.",
  about:
    "I build digital products that solve real problems. As the founder of Beacon Bridge, I'm reimagining graduate recruitment through challenge-based evaluation — helping companies discover what candidates can actually do, beyond what a CV says. I work across the full product lifecycle: from shaping strategy and defining user experience, to writing the code that brings it to life.",
  expertise: ['Product Strategy', 'UI/UX Design', 'Frontend Development'],
};

// ─── Contact & Social ───────────────────────────────────────────────────────

export const CONTACT = {
  email: 'nehan.pixelai@gmail.com',
  linkedin: 'https://www.linkedin.com/in/malaika-habibullah-02b478449/',
  github: '',
};

// ─── Portrait ───────────────────────────────────────────────────────────────

export const PORTRAIT = {
  src: '/images/portfolio%20image.jpeg',
  alt: 'Illustrated avatar of Malaika — Founder & Product Builder',
};

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',    href: '#hero' },
  { label: 'About',   href: '#about' },
  { label: 'Work',    href: '#work' },
  { label: 'Contact', href: '#contact' },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'beacon-bridge',
    number: '01',
    title: 'Beacon Bridge',
    category: 'HRTech · Startup',
    tags: ['React', 'TypeScript', 'Product Design', 'UX', 'Frontend Development'],
    description:
      'An early-stage HRTech platform connecting graduates with companies through practical, challenge-based evaluation — revealing capability beyond the CV.',
    longDescription:
      'Beacon Bridge solves a genuine problem: the disconnect between how graduates are evaluated and how well they actually perform in roles. The platform replaces surface-level CV screening with practical challenge-based assessments that give employers meaningful insight into real capability.',
    status: 'pilot',
    statusLabel: 'Early Stage · Pilot',
    featured: true,
    liveUrl: 'https://beaconbridge.pk/',
    highlights: [
      'Challenge-based candidate evaluation flows',
      'Graduate and employer-facing interfaces',
      'Responsive React frontend application',
      'Product direction & iterative development',
      'Early-stage startup incubation journey',
    ],
  },
  {
    id: 'northstar-cafe',
    number: '02',
    title: 'Northstar Café',
    category: 'Business Website · Concept',
    tags: ['React', 'TypeScript', 'UI/UX', 'Animation'],
    description:
      'A premium café website concept showcasing brand presentation, interactive menus, and a rich customer experience.',
    longDescription:
      'A concept project demonstrating how a premium café brand presents itself online. Features interactive menu exploration, smooth image gallery, brand storytelling, and a polished reservations experience.',
    status: 'concept',
    statusLabel: 'Concept',
    featured: false,
    liveUrl: 'https://northstar-cafe-six.vercel.app/',
    highlights: [
      'Responsive brand presentation',
      'Interactive menu experience',
      'Image gallery with transitions',
      'Customer-focused UX patterns',
    ],
  },
  {
    id: 'northstar-ai',
    number: '03',
    title: 'Northstar AI',
    category: 'Chatbot Prototype · Frontend',
    tags: ['React', 'TypeScript', 'Chat UI', 'State Management'],
    description:
      'A conversational café assistant prototype with local response engine, typing animations, and contextual suggestion prompts.',
    longDescription:
      'A frontend chatbot prototype built for Northstar Café. Uses a predefined local response engine (not a live AI service) to handle menu queries, reservations, and café information through a polished chat interface.',
    status: 'prototype',
    statusLabel: 'Prototype',
    featured: false,
    liveUrl: 'https://northstar-ai-three.vercel.app/',
    highlights: [
      'Conversational chat interface',
      'Local knowledge-base response engine',
      'Typing animation & suggestion chips',
      'Fully responsive chat experience',
    ],
  },
  {
    id: 'aura-studio',
    number: '04',
    title: 'Aura Studio',
    category: 'Agency Website · Concept',
    tags: ['React', 'TypeScript', 'Animation', 'Editorial Design'],
    description:
      'A fictional digital agency website concept featuring editorial design, portfolio filtering, and animated interactions.',
    longDescription:
      'A concept build for a premium digital agency. Demonstrates editorial web design, refined typography, portfolio filtering by category, and smooth animated page interactions.',
    status: 'concept',
    statusLabel: 'Concept',
    featured: false,
    liveUrl: 'https://aura-studio-coral-ten.vercel.app/',
    highlights: [
      'Editorial web design & typography',
      'Portfolio filtering interface',
      'Animated page interactions',
      'Service & capabilities showcase',
    ],
  },
];

// ─── Capabilities ────────────────────────────────────────────────────────────

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: 'Engineering',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Responsive Development', 'Component Architecture'],
  },
  {
    title: 'Product & Design',
    items: ['UI/UX Design', 'Product Thinking', 'Design Systems', 'Interactive Interfaces', 'User-Centred Design'],
  },
  {
    title: 'Startup',
    items: ['Product Strategy', 'Concept to Build', 'Iterative Development', 'Early-Stage Execution'],
  },
];
