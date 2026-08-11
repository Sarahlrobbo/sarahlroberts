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
  /** Short label for the mobile nav's "All Projects" submenu (Navigation.astro) — the real `title`s are full sentences, too long for a nav row. Only set on the 4 go-live cards; the parked cards below don't need one since they're not in the nav. */
  navLabel?: string;
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
    navLabel: "Designing Datapay",
    // URL scheme assigned 2026-08-10 (Sarah's call) so the nav's "All
    // Projects" submenu and this card point at the same place — the case
    // study itself isn't built yet, so this 404s until it is.
    href: "/case-studies/designing-datapay",
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
      tags: ["JTBD", "Strategy", "Workshop Facilitation", "Cross-functional Leadership"],
      logoSrc: "/images/about/logos/datapay-icon.svg",
      logoAlt: "Datapay",
      logoWidth: 80,
      logoHeight: 80,
    },
  },
  {
    title: "Helping Farmers Thrive: Creating Their Essential App",
    navLabel: "Helping Farmers Thrive",
    // The real, built case study — its content (offline-first mobile, paddock,
    // 32.4% stickiness) matches this card, not "Growing FarmIQ's Design Team" below.
    // Slug renamed from farmiq-thrive to helping-farmers-thrive 2026-08-10
    // (Sarah's call, see src/data/case-studies/farmiq-thrive.ts) — the old
    // URL still resolves via the redirect in astro.config.mjs.
    href: "/case-studies/helping-farmers-thrive",
    src: "/images/home/covers/farmiq-essential-app.png",
    alt: "FarmIQ essential app case study cover",
    aspect: "635/460",
    logoSrc: "/images/farmiq-thrive/farmiq-logo-white.svg",
    logoAlt: "FarmIQ",
    // Matches the "Growing FarmIQ's Design Team" card below — same logo file,
    // same grid, was mismatched (120x24 vs 160x32), flagged by Sarah as an error.
    logoWidth: 140,
    logoHeight: 28,
    textTone: "light",
    // calc(), not the original Figma percentages (80.9%/90.1%) — those are
    // percentages of the box's OWN height, correct only at the 460px
    // desktop box they were measured against. The title band underneath
    // this scrim is a fixed 96px regardless of box height, but tablet's
    // box is much shorter (aspect-ratio-driven, ~260-290px), so the same
    // percentages squeeze the dark region down to a ~26px sliver — well
    // short of the 96px band, leaving the title's top line over bare photo
    // (Sarah: "It's unreadable now", 2026-08-11, tablet screenshot).
    // calc(100% - Npx) keeps the dark region's real pixel height constant
    // — reverse-engineered from the original percentages at 460px (0.909
    // dark-start ≈ 88px from bottom, 0.099 dark-end ≈ 46px) — so it covers
    // the same real footprint at any box height, tablet included.
    //
    // Dark colour rgb(106,106,114), not the original rgb(40,49,50) — that
    // was near-black, and even at the same 0.5 opacity, mix-blend-multiply
    // against a near-black colour reads far harsher than against a mid
    // grey (the alpha only interpolates toward the blend colour, it
    // doesn't soften how dark that colour itself is). Matched to "Growing
    // FarmIQ's Design Team" below, which uses this same grey and which
    // Sarah pointed to directly as the softer, correct-looking one
    // (2026-08-11 — "Even desktop gradient is too harsh... that's much
    // better"). This is the base value so it's desktop's colour too, not
    // just a tablet/mobile override — those two tiers have their own
    // position-only calc() overrides in global.css that inherited the same
    // wrong colour and needed the identical fix.
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) calc(100% - 88px), rgba(106,106,114,0.5) calc(100% - 46px))",
    hover: {
      color: "#3d2df7",
      opacity: 0.98,
      textTone: "light",
      description:
        "Farmers were going back to paper notes because the app couldn't keep up with life in the paddock. I led the redesign of an offline-first mobile experience, taking app stickiness to 32.4%, a 17.5% year-on-year increase.",
      tags: ["Leadership", "Strategy"],
      logoSrc: "/images/farmiq-thrive/farmiq-logo-white.svg",
      logoAlt: "FarmIQ",
      // Unused at render time (ProjectCard.astro hoists the logo to one
      // persistent element sized off the top-level logoWidth/logoHeight),
      // kept in sync anyway so this doesn't mislead anyone reading the data.
      logoWidth: 140,
      logoHeight: 28,
    },
  },
  {
    title: "Growing FarmIQ's Design Team, Practice & Systems",
    navLabel: "Design Leadership",
    // No case study built for this one yet — don't point it at
    // helping-farmers-thrive, that content is about the essential-app card
    // above, not this topic. URL scheme assigned 2026-08-10 (Sarah's call);
    // 404s until the case study is built.
    href: "/case-studies/design-leadership",
    src: "/images/home/covers/farmiq-design-team.png",
    alt: "FarmIQ design team case study cover",
    // 624/460 — deliberately smaller than Figma's real 691/509 (node
    // 123:220205, "Frame 45" in the 3-row/6-card grid there). Tried the
    // real Figma size 2026-08-11 while chasing a row-2 edge-alignment
    // complaint, since 691+64+557 happens to sum to exactly row 1's 1312px
    // — but Sarah called that out immediately: this card being smaller
    // than row 1's cards, with row 2 reading as a narrower, offset block,
    // is deliberate composition (this trimmed 4-card go-live grid doesn't
    // map to any single real Figma row anyway — it pairs cards from two
    // different Figma rows once Hatch/Metlink are cut). Reverted. Edge
    // alignment against row 1 is handled with `justify-between` on
    // `.project-row` in index.astro instead of resizing this card.
    aspect: "624/460",
    logoSrc: "/images/farmiq-thrive/farmiq-logo-white.svg",
    logoAlt: "FarmIQ",
    // Matches "Helping Farmers Thrive" above — see note there.
    logoWidth: 140,
    logoHeight: 28,
    textTone: "light",
    // calc(), not the original Figma percentages (66.3%/84.1%) — same fix
    // as "Helping Farmers Thrive" above, same reason: those percentages
    // are only correct at the 460px desktop box they were measured
    // against. Reverse-engineered to fixed pixels from bottom (0.337 dark-
    // start ≈ 155px, 0.159 dark-end ≈ 73px) so the dark region's real
    // height holds constant at any box height instead of shrinking to an
    // unreadable sliver on tablet.
    scrim: "linear-gradient(to bottom, rgba(255,255,255,0.5) calc(100% - 155px), rgba(106,106,114,0.5) calc(100% - 73px))",
    hover: {
      color: "#ffb2ea",
      opacity: 0.98,
      textTone: "dark",
      description:
        "A newly restructured team had no shared operating model to keep quality high while moving fast. I built a Design Team Charter, refreshed our customer understanding through JTBD, and led the shift to a governed multi-platform design system.",
      tags: ["Cross-functional Leadership", "Process Improvement", "Coaching", "Design System"],
      logoSrc: "/images/farmiq-thrive/farmiq-logo-white.svg",
      logoAlt: "FarmIQ",
      // Unused at render time — see note on the other FarmIQ card above.
      logoWidth: 140,
      logoHeight: 28,
    },
  },
  {
    title: "The App Keeping Kiwis Safe Outdoors",
    navLabel: "Keeping Kiwis Safe",
    // URL scheme assigned 2026-08-10 (Sarah's call); 404s until the case
    // study is built.
    href: "/case-studies/keeping-kiwis-safe",
    // No dedicated "cover" file found in the Plan My Walk folder (unlike the
    // other four) — left as a placeholder rather than guessing which of the
    // dozen raw screenshots in there is meant to be the composite cover.
    alt: "Plan My Walk / MSC Outdoor Safety case study cover",
    // 613/400 — matches DataPay's box (index.astro row 1) exactly. Was
    // 557/400 (Sarah's own earlier correction, at the time read off a
    // Figma "Project Cover" instance that turned out on closer look to be
    // the paused Hatch card sharing that row, not this one — an easy mix-up
    // since every cover instance in that frame is generically named
    // "Project Cover"). Sized off DataPay directly instead, 2026-08-11:
    // Sarah circled the two and asked for them to match, which also closes
    // most of row 2's oversized middle gap (624+64+613=1301, within 11px of
    // row 1's 1312 instead of 131px short).
    aspect: "613/400",
    // MSC Outdoor Safety logo — swapped 2026-08-09 to Sarah's own
    // "Company-MSC.svg" export (icon + wordmark, same file used in the
    // companies row below), replacing the old fuller council lockup PNG.
    // Natural size is 100x72, but at that size it's the single biggest logo
    // on the grid (7200px² vs Datapay's 6400px² and FarmIQ's 3920px²) and
    // Sarah flagged it as visibly oversized — scaled down, aspect preserved.
    logoSrc: "/images/home/logos/msc-company-logo.svg",
    logoAlt: "MSC Outdoor Safety",
    logoWidth: 70,
    logoHeight: 50,
    textTone: "light",
    hover: {
      color: "#cfe739",
      opacity: 0.95,
      textTone: "dark",
      description:
        "MSC's existing safety tool was outdated and underused. I facilitated a five-day Design Sprint and led the UX and UI, shipping an app that's since reached over 1 million users and was a Best Design Awards Finalist.",
      tags: ["Design Sprint", "Awards Finalist"],
      logoSrc: "/images/home/logos/msc-company-logo.svg",
      logoAlt: "MSC Outdoor Safety",
      logoWidth: 70,
      logoHeight: 50,
    },
  },
];

// Parked for go-live (2026-08-09, Sarah's call): the grid ships with just
// Datapay, both FarmIQ cards, and Plan My Walk while those three get real
// case studies written. Hatch and Metlink are kept here rather than deleted
// — same copy/colours/tags as before, including the unresolved Figma
// rest/hover content mismatch on the Metlink card (see its comment) — so
// they can go straight back into `projectCards` once ready, without
// re-pulling anything from Figma.
export const pausedProjectCards: ProjectCard[] = [
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
      opacity: 0.98,
      textTone: "light",
      description:
        "Tax time is stressful for NZ investors navigating FIF obligations. I was the sole designer on a printable FIF Report PDF and campaign landing page, helping customers feel confident enough to pay $50 for clarity they couldn't get anywhere else.",
      tags: ["Exploratory Research", "JTBD", "Customer Journey"],
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
      tags: ["Accessibility Testing", "WCAG Compliance"],
      logoSrc: "/images/home/logos/metlink-logo.png",
      logoAlt: "Metlink",
      logoWidth: 120,
      logoHeight: 52,
    },
  },
];

export interface CompanyLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

// "Some companies I've worked with" (Figma 123:194214) — FarmIQ/Datapay/
// Basis/Hatch reuse the SVGs already in the repo (About page's career
// timeline). ACC/Metlink originally shipped as flat PNGs exported straight
// off their Figma instances (123:194221 / 123:194222); swapped 2026-08-09 to
// Sarah's own "Company-ACC.svg"/"Company-Metlink.svg" exports (About me
// folder, same source as the MSC logo below) per her explicit ask for SVGs
// here. Natural sizes (80x80 / 160x69) are near-identical aspect to the old
// PNGs, so display sizes are unchanged.
export const companyLogos: CompanyLogo[] = [
  { name: "FarmIQ", src: "/images/farmiq-thrive/farmiq-logo.svg", width: 100, height: 20 },
  { name: "Datapay", src: "/images/about/logos/datapay-icon.svg", width: 60, height: 60 },
  { name: "Basis", src: "/images/about/logos/basis-wordmark.svg", width: 100, height: 22 },
  { name: "Hatch", src: "/images/about/logos/hatch-wordmark.svg", width: 100, height: 29 },
  { name: "ACC", src: "/images/home/logos/acc-logo.svg", width: 50, height: 50 },
  { name: "Metlink", src: "/images/home/logos/metlink-logo.svg", width: 116, height: 50 },
  // Added 2026-08-09 — Sarah's own "Company-MSC.svg" export, matching this
  // row's other Company-*.svg files (About page's career-timeline folder).
  // Natural size 100x72 (icon + wordmark lockup); scaled to h:52 to sit at
  // the same height as Metlink, the row's other icon+wordmark combo mark.
  { name: "MSC Outdoor Safety", src: "/images/home/logos/msc-company-logo.svg", width: 72, height: 52 },
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
