export interface MenuItem {
  label: string;
  subLabel: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface NewsItem {
  id: number;
  year: string;
  month: string;
  day: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TimelineItem {
  id: number;
  year: string;
  month: string;
  day: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Partner {
  id: number;
  name: string;
  slogan: string;
  description: string;
  category: string;
  company?: string;
  location: string;
  image: string;
  href: string;
}

export interface Album {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface WorkMember {
  id: number;
  name: string;
  image: string;
  href: string;
}

export interface ExternalLink {
  id: number;
  name: string;
  image: string;
  href: string;
}

export interface ActivityItem {
  id: number;
  title: string;
  image: string;
  period: string;
  href: string;
}