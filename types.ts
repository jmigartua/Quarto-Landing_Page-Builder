import React from 'react';

export enum ElementType {
  HERO = 'hero',
  FEATURES = 'features',
  CTA = 'cta',
  NAVBAR = 'navbar',
  FOOTER = 'footer',
  BANNER = 'banner',
  ABOUT = 'about',
  SEPARATOR = 'separator',
  CAROUSEL = 'carousel',
}

// Navbar Props
export interface NavbarItem {
  id: string;
  type: 'link' | 'icon';
  text?: string;
  href: string;
  icon?: 'github' | 'twitter' | 'linkedin';
}

export interface NavbarProps {
  title: string;
  leftItems: NavbarItem[];
  rightItems: NavbarItem[];
  themeSwitcher: boolean;
  languageSwitcher: boolean;
}

// Hero Props
export interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  imageUrl?: string;
  imageAlt?: string;
}

// Features Props
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imagePosition?: 'top' | 'left' | 'right';
  href?: string;
}

export interface FeaturesProps {
  gridColumns: number;
  features: FeatureItem[];
  hoverEffect: boolean;
}

// CTA Props
export interface CtaProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

// Banner Props
export interface BannerProps {
    text: string;
}

// Footer Props
export interface FooterLink {
    id: string;
    text: string;
    href: string;
}
export interface FooterProps {
    copyrightText: string;
    links: FooterLink[];
}

// About Props
export interface AboutButton {
    id: string;
    text: string;
    link: string;
    type: 'primary' | 'secondary';
}
export interface AboutProps {
    title: string;
    subtitle: string;
    text: string;
    imageUrl: string;
    imageAlt: string;
    buttons: AboutButton[];
}

// Separator Props
export interface SeparatorProps {}

// Carousel Props
export interface CarouselImage {
    id: string;
    src: string;
    alt: string;
    caption?: string;
}
export interface CarouselProps {
    images: CarouselImage[];
}


// Discriminated Union for Page Components
export type PageComponent =
  | { id: string; type: ElementType.NAVBAR; props: NavbarProps }
  | { id: string; type: ElementType.HERO; props: HeroProps }
  | { id: string; type: ElementType.FEATURES; props: FeaturesProps }
  | { id:string; type: ElementType.CTA; props: CtaProps }
  | { id: string; type: ElementType.BANNER; props: BannerProps }
  | { id: string; type: ElementType.FOOTER; props: FooterProps }
  | { id: string; type: ElementType.ABOUT; props: AboutProps }
  | { id: string; type: ElementType.SEPARATOR; props: SeparatorProps }
  | { id: string; type: ElementType.CAROUSEL; props: CarouselProps };


export interface ElementDefinition {
  type: ElementType;
  name: string;
  description: string;
  // Fix: Used React.ReactElement instead of JSX.Element to resolve namespace issue.
  icon: React.ReactElement;
}
