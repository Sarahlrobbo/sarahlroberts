// Reusable case study content schema.
//
// Every case study (FarmIQ Thrive, Datapay, Plan My Walk, FarmIQ Team, ...)
// is a slug + a Cover + an ordered list of Sections. Sections are a union
// so each case study can place its image bands wherever Figma puts them —
// nothing here assumes a fixed asset position, per the build brief.

export interface CaseStudyImage {
  /** Real asset path once supplied; omitted while a placeholder is in use. */
  src?: string;
  alt: string;
  caption?: string;
  /** White caption over a photo, or muted-grey caption over a plain screenshot. */
  captionTone?: "light" | "dark";
  /** Tailwind aspect-ratio value, e.g. "600/400", "400/600", "1000/563". */
  aspect: string;
  fit?: "cover" | "contain";
  /** When set, renders a YouTube embed in place of `src` (e.g. "5uiJEoB7vc8" from the watch URL's `v=` param). */
  youtubeId?: string;
  /**
   * Set false when the source image is a pre-composed card that already has
   * its own rounded corners/shadow baked in (e.g. a dashboard screenshot
   * exported with margin around it). Rounding the outer box on top of that
   * clips across the image's own corner at a mismatched angle. Defaults true.
   */
  rounded?: boolean;
}

export interface StatCallout {
  label: string;
  value: string;
  context: string;
}

export interface NumberedItem {
  heading: string;
  body: string;
}

export interface OutcomeStat {
  value: string;
  label: string;
  context: string;
}

export interface OutcomeSignal {
  direction: "up" | "down";
  text: string;
}

export interface QuoteSlide {
  image: CaseStudyImage;
  quote: string;
  attribution: string;
}

/**
 * Vertical gap above this section, measured from the Figma frame:
 * - "tighter" (24px, spacing-md)  — sub-image to sub-image within one image group (e.g. the two-equal row to the single wide shot after it)
 * - "tight"   (40px, spacing-lg)  — an image band "attached" directly under the heading/paragraphs it illustrates
 * - "loose"   (96px, spacing-2xlg) — default; the gap Figma uses between every top-level block (My Role, Situation, Calls I Made, Solution, Shift, Outcome, Quote, What I Learned all sit in one flex-col with gap-[96px])
 * - "looser"  (160px = 96 + 64)    — Solution carries an extra pt-64 on top of the normal 96px block gap
 */
export type SpacingBefore = "tighter" | "tight" | "loose" | "looser";

export type CaseStudySection = (
  | {
      type: "intro";
      /** Client/company logo, 160×32 on desktop (Figma's "PlaceOfWork" component) — omit if none supplied yet. */
      logo?: CaseStudyImage;
      company: string;
      role: string;
      dateRange: string;
      stats: [StatCallout, StatCallout];
      paragraphs: string[];
      quote: { quote: string; attribution: string };
    }
  | {
      type: "text";
      heading: string;
      /** Paragraphs support inline **bold** markdown. */
      paragraphs: string[];
    }
  | {
      type: "textImage";
      heading: string;
      paragraphs: string[];
      image: CaseStudyImage;
    }
  | {
      type: "imageBand";
      layout: "single" | "two-equal" | "three-grid";
      images: CaseStudyImage[];
      /** Breaks out to the full 1440 canvas instead of the 1010 content column (Figma's "Image grid" band). */
      wide?: boolean;
    }
  | {
      type: "numberedList";
      heading: string;
      columns: 1 | 2;
      items: NumberedItem[];
    }
  | {
      type: "outcome";
      heading: string;
      stats: OutcomeStat[];
      signalsIntro: string;
      signals: OutcomeSignal[];
    }
  | {
      type: "quoteSlider";
      slides: QuoteSlide[];
    }
  | { type: "backToTop" }
) & {
  spacingBefore?: SpacingBefore;
  /**
   * Gives this section a jump-to anchor and an entry in the desktop
   * scrolling side nav (Figma node 79:39278 — "Back" + a list of section
   * links, active one highlighted brand-blue). Figma only links a subset
   * of sections (My Role, Situation, Calls I Made, Solution, Shift, What
   * I Learned) — Intro/Outcome/Quote/BackToTop are intentionally skipped.
   * The label can differ from the on-page heading (Figma shortens "The
   * Situation I Walked Into" to "The Situation" in the nav).
   */
  navLabel?: string;
};

export interface CaseStudy {
  slug: string;
  /** Hero title; `\n` marks the manual Figma line break. */
  title: string;
  cover: {
    background: CaseStudyImage;
    deviceImage: CaseStudyImage;
    /** Separate mobile crop/composition of the device mockup, if supplied — falls back to `deviceImage` when omitted. */
    deviceImageMobile?: CaseStudyImage;
  };
  authorName: string;
  /** Where the side nav's "Back" link and the top nav's "All Projects" go. */
  backHref?: string;
  sections: CaseStudySection[];
}

/** Minimal **bold** → <strong> inline markdown, nothing else. */
export function renderInline(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
