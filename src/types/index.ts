export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  status: 'live' | 'concept' | 'pilot' | 'prototype';
  statusLabel: string;
  featured: boolean;
  liveUrl: string | null;
  highlights: string[];
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
