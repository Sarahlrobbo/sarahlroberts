// Home page content — desktop only for now (Figma node 123:194104), plain
// data + a small schema, matching the about.ts/case-study.ts pattern.

// "Design in action" grid, read directly off the real Figma instances
// (get_design_context on 123:194125, plus each card individually where the
// grid call was too large). Card order/sizes/scrims are transcribed as-is.
// Hover state (Figma 106:194022, one "Project Cover" frame per card in its
// hover variant): a near-opaque colour panel fades in over the photo,
// swapping the short title for a longer descriptive paragraph plus this
// project's own tag pills, kept up by the same logo. Read per-card via
// get_design_context on each of the 6 real hover frames — accent colours are
// each project's real brand colour (several match About page's craftTiles
// exactly, e.g. Datapay #0ab8d7, FarmIQ #ffb2ea, Hatch #7e54e3), not invented.
export interface ProjectCardHover {
  /** Panel colour, applied at `opacity` over the photo (not a flat opaque fill — a faint ghost of the photo shows through, confirmed on the real Figma render). */
  color: string;
  opacity: number;
  textTone: "light" | "dark";
  description: string;
  tags: string[];
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
}

export interface ProjectCard {
  title: string;
  href: string;
  /** Real cover photo, once confidently matched from Sarah's asset folders — omitted still falls back to CaseStudyImage's grey placeholder. */
  src?: string;
  alt: string;
  /** aspect used where the card's own box isn't fully fixed by w/h classes (the one true aspect-ratio card, "Growing FarmIQ's Design Team"). */
  aspect: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  textTone: "light" | "dark";
  /** CSS gradient value, applied with mix-blend-multiply over the photo — omitted where Figma has no scrim (card relies on the photo already being dark-bottomed). */
  scrim?: string;
  hover: ProjectCardHover;
}

// Cover photos matched against "~/Documents/New Website" (Sarah pointed at
// these folders mid-build) by comparing each candidate file's actual pixel
// content against the real Figma card screenshots — not guessed by filename
// alone. Each of the 4 confirmed below has its own dedicated case-study
// folder with exactly one obvious "Cover" file, and was visually verified.
export const projectCards: ProjectCard[] = [
  {
    title: "Designing Datapay's Greenfields Future: From Evidence to Screens",
    href: "#",
    src: "/images/home/covers/datapay-greenfields.png",
    alt: "Datapay Greenfields case study cover",
    aspect: "613/400",
    logoSrc: "/images/about/logos/datapay-icon.svg",
    logoAlt: "Datapay",
    logoWidth: 80,
    logoHeight: 80,
    textTone: "dark",
    hover: {
      color: "#0ab8d7",
      opacity: 0.98,
      textTone: "dark",
      description:
        "Datapay had 300+ competing feature requests and no structured way to prioritise them. I built a JTBD framework from 21 research studies, then led an AI-era discovery process validated with our Customer Advisory Board.",
      tags: ["JTBD", "Strategy", "Leadership", "Research"],
      logoSrc: "/images/about/logos/datapay-icon.svg",
      logoAlt: "Datapay",
      logoWidth: 80,
      logoHeight: 80,
    },
  },
  {
    title: "Helping Farmers Thrive: Creating Their Essential App",
    href: "#",
    src: "/images/home/covers/farmiq-essential-app.png",
    alt: "FarmIQ essential app case study cover",
    aspect: "635/460",
    logoSrc: "/images/farmiq-thrive/farmiq-logo.svg",
    logoAlt: "FarmIQ",
    logoWidth: 120,
    logoHeight: 24,
    textTone: "light",
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) 80.9%, rgba(40,49,50,0.5) 90.1%)",
    hover: {
      color: "#3d2df7",
      opacity: 0.95,
      textTone: "light",
      description:
        "Farmers were going back to paper notes because the app couldn't keep up with life in the paddock. I led the redesign of an offline-first mobile experience, taking app stickiness to 32.4%, a 17.5% year-on-year increase.",
      tags: ["Leadership", "UX & UI", "Research"],
      logoSrc: "/images/farmiq-thrive/farmiq-logo.svg",
      logoAlt: "FarmIQ",
      logoWidth: 120,
      logoHeight: 24,
    },
  },
  {
    title: "Growing FarmIQ's Design Team, Practice & Systems",
    // The only card of the six that already has a real case study built.
    href: "/case-studies/farmiq-thrive",
    src: "/images/home/covers/farmiq-design-team.png",
    alt: "FarmIQ design team case study cover",
    aspect: "624/460",
    logoSrc: "/images/farmiq-thrive/farmiq-logo.svg",
    logoAlt: "FarmIQ",
    logoWidth: 160,
    logoHeight: 32,
    textTone: "light",
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) 66.3%, rgba(106,106,114,0.5) 84.1%)",
    hover: {
      color: "#ffb2ea",
      opacity: 0.95,
      textTone: "dark",
      description:
        "A newly restructured team had no shared operating model to keep quality high while moving fast. I built a Design Team Charter, refreshed our customer understanding through JTBD, and led the shift to a governed multi-platform design system.",
      tags: ["Leadership", "Strategy"],
      logoSrc: "/images/farmiq-thrive/farmiq-logo.svg",
      logoAlt: "FarmIQ",
      logoWidth: 120,
      logoHeight: 24,
    },
  },
  {
    title: "Tax Time Calculator",
    href: "#",
    src: "/images/home/covers/hatch-tax-time.png",
    alt: "Hatch Tax Time Calculator case study cover",
    aspect: "557/400",
    logoSrc: "/images/about/logos/hatch-wordmark.svg",
    logoAlt: "Hatch",
    logoWidth: 160,
    logoHeight: 47,
    textTone: "light",
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) 74.7%, #a286e7 88.9%)",
    hover: {
      color: "#7e54e3",
      opacity: 0.95,
      textTone: "light",
      description:
        "Tax time is stressful for NZ investors navigating FIF obligations. I was the sole designer on a printable FIF Report PDF and campaign landing page, helping customers feel confident enough to pay $50 for clarity they couldn't get anywhere else.",
      tags: ["UX & UI", "Research", "JTBD"],
      logoSrc: "/images/about/logos/hatch-wordmark.svg",
      logoAlt: "Hatch",
      logoWidth: 160,
      logoHeight: 47,
    },
  },
  {
    // Figma's REST state for this card still shows the same title/logo/cover
    // as the Hatch card above (title "Tax Time Calculator", Hatch logo) —
    // originally read as a duplicate placeholder. But its HOVER state
    // (get_design_context on 121:195111, the real hover frame for this exact
    // grid slot) reveals completely different content: a Metlink project,
    // dark-teal accent, its own paragraph and tags. That's a real mismatch in
    // the Figma file itself (unfinished rest-state content), not something to
    // silently invent a fix for — flagged to Sarah. Implemented literally: at
    // rest this still shows "Tax Time Calculator"/Hatch (only real data
    // available for the rest state), but hovering it correctly reveals the
    // Metlink content per Figma's actual hover frame.
    title: "Tax Time Calculator",
    href: "#",
    src: "/images/home/covers/hatch-tax-time.png",
    alt: "Hatch Tax Time Calculator case study cover (rest-state content doesn't match this slot's real hover content — see note above)",
    aspect: "557/400",
    logoSrc: "/images/about/logos/hatch-wordmark.svg",
    logoAlt: "Hatch",
    logoWidth: 160,
    logoHeight: 47,
    textTone: "light",
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) 74.7%, #a286e7 88.9%)",
    hover: {
      color: "#00374c",
      opacity: 0.95,
      textTone: "light",
      description:
        "I joined mid-project to unify work left by four designers with no handovers. I raised and fixed critical accessibility issues, personally testing with users with visual impairments to make sure the redesign worked for everyone.",
      tags: ["UX & UI", "Research"],
      logoSrc: "/images/home/logos/metlink-logo.png",
      logoAlt: "Metlink",
      logoWidth: 120,
      logoHeight: 52,
    },
  },
  {
    title: "The App Keeping Kiwis Safe Outdoors",
    href: "#",
    // No dedicated "cover" file found in the Plan My Walk folder (unlike the
    // other four) — left as a placeholder rather than guessing which of the
    // dozen raw screenshots in there is meant to be the composite cover.
    alt: "Plan My Walk / MSC Outdoor Safety case study cover",
    aspect: "635/460",
    // Real MSC Outdoor Safety logo, from "Logo companies/msc-logo.png" — a
    // fuller lockup (icon + wordmark + council name) than Figma's compact
    // card render, but the real mark rather than a placeholder.
    logoSrc: "/images/home/logos/msc-logo.png",
    logoAlt: "MSC Outdoor Safety",
    logoWidth: 100,
    logoHeight: 71,
    textTone: "light",
    hover: {
      color: "#cfe739",
      opacity: 0.95,
      textTone: "dark",
      description:
        "MSC's existing safety tool was outdated and underused. I facilitated a five-day Design Sprint and led the UX and UI, shipping an app that's since reached over 1 million users and was a Best Design Awards Finalist.",
      tags: ["UX & UI", "Research"],
      logoSrc: "/images/home/logos/msc-logo.png",
      logoAlt: "MSC Outdoor Safety",
      logoWidth: 100,
      logoHeight: 71,
    },
  },
];

// "Design in action" filter pills (Figma 123:194129) — visual only for now,
// no filtering behaviour wired up. "Selected" is always the first, active pill.
export const filterPills = ["Leadership", "JTBD", "Research", "UX/UI", "Strategy"];

export interface CompanyLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

// "Some companies I've worked with" (Figma 123:194214) — FarmIQ/Datapay/
// Basis/Hatch reuse the SVGs already in the repo (About page's career
// timeline); ACC/Metlink are new, exported as flat PNGs straight off their
// Figma instances (123:194221 / 123:194222) since they're small standalone
// marks, not the photography Sarah's sending separately.
export const companyLogos: CompanyLogo[] = [
  { name: "FarmIQ", src: "/images/farmiq-thrive/farmiq-logo.svg", width: 100, height: 20 },
  { name: "Datapay", src: "/images/about/logos/datapay-icon.svg", width: 60, height: 60 },
  { name: "Basis", src: "/images/about/logos/basis-wordmark.svg", width: 100, height: 22 },
  { name: "Hatch", src: "/images/about/logos/hatch-wordmark.svg", width: 100, height: 29 },
  { name: "ACC", src: "/images/home/logos/acc-logo.png", width: 50, height: 50 },
  { name: "Metlink", src: "/images/home/logos/metlink-logo.png", width: 116, height: 50 },
];

// Hero "Design in action" fan of 5 project-cover photos (Figma 123:194117,
// "Group 3", read via get_design_context/get_metadata on the Header node).
// Positions/rotations are the real values Figma returns, re-baselined so the
// topmost card sits at top:0 within its own wrapper — not estimated off the
// screenshot. Cards 3 and 5 (Leadership, Hatch) have no rotation in Figma.
export interface HeroCover {
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number;
  height: number;
  rotate: number;
}

// Sarah pointed at "~/Documents/New Website/Hero", which turned out to have
// 4 of these 5 photos pre-numbered 01–04 matching the fan's left-to-right
// order exactly — confirmed by opening each file and comparing it against
// the real Figma screenshot, not just trusting the numbering. Slot 5 (the
// Hatch dashboard) had no numbered match in that folder; reused from the
// Hatch case-study cover instead, flagged as inferred rather than confirmed.
export const heroCovers: HeroCover[] = [
  { src: "/images/home/hero/01-datapay.png", alt: "Datapay screens preview", top: 39, left: -220, width: 357, height: 246, rotate: 3.78 },
  {
    src: "/images/home/hero/02-fiq-diary.png",
    alt: "Farmer using FarmIQ in the field",
    top: 0,
    left: 28,
    width: 354,
    height: 241,
    rotate: -3,
  },
  {
    src: "/images/home/hero/03-design-leadership.png",
    alt: "Leading the Design Team",
    top: 120,
    left: 258,
    width: 355,
    height: 242,
    rotate: 0,
  },
  { src: "/images/home/hero/04-list.png", alt: "Plan My Walk packing list on phone", top: 18, left: 501, width: 356, height: 245, rotate: -3.57 },
  {
    // Best-guess match, not folder-confirmed like the other four — see note above.
    src: "/images/home/hero/05-hatch-tax-time.png",
    alt: "Hatch Tax Time Calculator dashboard",
    top: 78,
    left: 735,
    width: 346,
    height: 229,
    rotate: 0,
  },
];
