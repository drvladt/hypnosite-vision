export type HomeContent = {
  /** Fixed English sub-brand shown under "Dr. Vlad" in the site header on every page. */
  subbrand: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    label: string;
    mobileLabel: string;
    toTop: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    items: { label: string; href: string }[];
    bookShort: string;
  };
  cta: {
    primary: string;
    note: string;
    write: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    portraitAlt: string;
    portraitCaption: string;
    badges: string[];
  };
  concerns: {
    eyebrow: string;
    title: string;
    items: string[];
    summary: string;
  };
  bigPicture: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    quote: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    moreApproachLabel: string;
    hypnotherapy: string[];
    moreHypnotherapyLabel: string;
  };
  consultation: {
    eyebrow: string;
    title: string;
    lead: string;
    outcomes: string[];
    suitableTitle: string;
    suitableIntro?: string[];
    suitableFor: string[];
    suitableNote: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    logoAlt: string;
    bannerAlt: string;
    research: { eyebrow: string; text: string; linkLabel: string };
    moreAboutLabel: string;
    bookLabel: string;
  };
  reviews: {
    eyebrow?: string;
    title: string;
    caption?: string;
    emptyLabel: string;
    previousLabel: string;
    nextLabel: string;
    playLabel: string;
    concernLabel: string;
    items: { name: string; concern: string; videoUrl: string; posterUrl?: string; youtubeId?: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    items: [string, string][];
    closing: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: [string, string][];
  };
  finalCta: {
    eyebrow: string;
    title: string;
  };
  footer: {
    role: string;
    disclaimer: string;
  };
};
