// About page content — a single, one-off page (unlike case studies), so
// this is just plain data + a small inline-markdown helper, not a schema.

// Highlight treatment reference-matched from sarah-roberts-portfolio-2's
// .testimonial-quote .highlight — a highlighter-pen background that draws
// across the text once the card scrolls into view (see .testimonial-highlight
// + .in-view in global.css), not a static coloured mark.
export function renderHighlight(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, '<mark class="testimonial-highlight">$1</mark>');
}

// The 5 decorative accent photos (Hero, Current Role, Career Timeline x2,
// Leadership Philosophy) use Figma's own "Case-Study Assets" component —
// the exact same rounded-photo + on-image gradient-scrim caption treatment
// as the case study pages (components/case-study/CaseStudyImage.astro).
// Width/aspect below are the real pixel dimensions read via
// get_design_context on each instance (129:194363, 187:169041, 185:168994,
// 186:169208, 185:168988), not estimated — no rotation on any of them.
export interface AccentPhoto {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  widthPx: number;
}

export const heroPhoto: AccentPhoto = {
  src: "/images/about/01-roles-cover.png",
  alt: "",
  caption: "Farmer roles guiding decisions",
  aspect: "335/229",
  widthPx: 335,
};

export const currentRolePhoto: AccentPhoto = {
  src: "/images/about/02-team-collab-sessions.png",
  alt: "",
  caption: "Team Collab Sessions",
  aspect: "287/413",
  widthPx: 287,
};

export const careerTimelinePhotos: AccentPhoto[] = [
  {
    src: "/images/about/03-helping-trampers-stay-safe.png",
    alt: "",
    caption: "Helping trampers stay safe",
    aspect: "1/1",
    widthPx: 228,
  },
  {
    src: "/images/about/05-data-at-fingertips.png",
    alt: "",
    caption: "Data at your fingertips",
    aspect: "1/1",
    widthPx: 235,
  },
];

export const leadershipPhoto: AccentPhoto = {
  src: "/images/about/04-team-learning.png",
  alt: "",
  caption: "Team Learning",
  aspect: "335/229",
  widthPx: 335,
};

export interface TimelineEntry {
  role: string;
  company: string;
  logo: string;
  logoAlt: string;
  /** Always renders as a hard break between the two — "START ⏎ – END", not
   * natural wrapping — confirmed via get_design_context on all 4 real
   * Career row instances (each one has an explicit <br> in this exact spot). */
  dateStart: string;
  dateEnd: string;
  bullets: string[];
}

export const careerTimeline: TimelineEntry[] = [
  {
    role: "Design & Research Lead",
    company: "Datapay",
    logo: "/images/about/logos/datapay-icon.svg",
    logoAlt: "Datapay",
    dateStart: "May 2025",
    dateEnd: "current",
    bullets: [
      "Built the design and research practice from scratch",
      "Coaches a team of 2 designers, shaping how the team works with AI",
      "Leads the UX for our greenfield product, JTBD and OOUX inform the IA and the roadmap",
      "Runs customer research and plans customer workshops",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Basis",
    logo: "/images/about/logos/basis-wordmark.svg",
    logoAlt: "Basis",
    dateStart: "Jan 2025",
    dateEnd: "May 2025",
    bullets: [
      "Designed the Trade App experience for electricians, from discovery through to high-fi design",
      "Mentored other designers on the team",
    ],
  },
  {
    role: "Lead Product Designer",
    company: "FarmIQ",
    logo: "/images/farmiq-thrive/farmiq-logo.svg",
    logoAlt: "FarmIQ",
    dateStart: "Oct 2022",
    dateEnd: "Jan 2025",
    bullets: ["Grew and led a design team of 3", "Built FarmIQ's design system and team operating model", "Took mobile stickiness to 32.4%"],
  },
  {
    role: "Senior Product Designer",
    company: "Hatch",
    logo: "/images/about/logos/hatch-wordmark.svg",
    logoAlt: "Hatch",
    dateStart: "Jul 2021",
    dateEnd: "Oct 2022",
    bullets: ["Part of Hatch's build team", "Tax Time solution (FIF Report)", "Money Mindsets framework, Investing Newbies, and more"],
  },
];

export interface PhilosophyItem {
  emoji: string;
  label: string;
  body: string;
}

// Label has no trailing period — the period only appears at the end of the
// body sentence, confirmed via get_design_context on 133:169691 (the real
// text node uses a hard <br> between label and body, not a period).
export const philosophy: PhilosophyItem[] = [
  { emoji: "🧭", label: "Create clarity", body: "Before anyone starts building, the problem and principles have to be genuinely clear." },
  {
    emoji: "🤝",
    label: "Bring people into one conversation",
    body: "Design, product, engineering, and subject matter experts in the same decision loop, not separate threads, to save time.",
  },
  {
    emoji: "⚙️",
    label: "Make good outcomes repeatable",
    body: "I put in the JTBD frameworks, workshops, and roadmaps so results aren't luck or a one-off effort.",
  },
  { emoji: "🎯", label: "Use customer evidence, not opinion", body: "Research drives what's worth doing and what gets deprioritised." },
  {
    emoji: "🌱",
    label: "Invest in people",
    body: "I coach for skill, not just delivery. That goes for my own team and the PMs I work alongside.",
  },
];

export interface CraftTile {
  title: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  accentColor: string;
  logo: string;
  logoAlt: string;
  /** Real per-logo box, read off each tile instance via get_metadata
   * (136:169001/169029/169081/169145) — the Datapay icon is a square 80×80
   * badge, but the FarmIQ and Hatch marks are wide wordmarks (120px wide,
   * ~24–35px tall). A uniform size-20 box squashed the wordmarks down. */
  logoWidthPx: number;
  logoHeightPx: number;
  /** Confirmed via get_design_context on two real tile instances: the teal
   * tile uses dark text-primary, the navy tile uses white text-invert — text
   * colour tracks each tile's own background lightness, not a fixed value. */
  textTone: "dark" | "light";
}

export const craftTiles: CraftTile[] = [
  {
    title: "Interactive JTBD website",
    body: "Built and shipped using Cursor and GitHub, so customer insight lives alongside engineering work.",
    linkLabel: "Shaping Datapay's direction →",
    linkHref: "#",
    accentColor: "#0ab8d7",
    logo: "/images/about/logos/datapay-icon.svg",
    logoAlt: "Datapay",
    logoWidthPx: 80,
    logoHeightPx: 80,
    textTone: "dark",
  },
  {
    title: "Multi-platform design system",
    body: "Foundations through to governed components, co-owned with engineering.",
    linkLabel: "Growing the design team →",
    // Renamed from /case-studies/farmiq-thrive 2026-08-10 (slug rename, see
    // src/data/case-studies/farmiq-thrive.ts). Left pointed at the same
    // case study as before — NOT changed to /case-studies/design-leadership
    // even though this tile's own copy ("Growing the design team",
    // "Multi-platform design system") reads like it's about that case
    // study instead. Flagging to Sarah rather than silently repointing it,
    // same as the earlier Metlink/Hatch content mismatch.
    linkHref: "/case-studies/helping-farmers-thrive",
    accentColor: "#ffb2ea",
    logo: "/images/farmiq-thrive/farmiq-logo.svg",
    logoAlt: "FarmIQ",
    logoWidthPx: 120,
    logoHeightPx: 24,
    textTone: "dark",
  },
  {
    title: "FIF Report PDF and landing page",
    body: "Solo designer on the report customers paid $50 for, and the campaign landing page.",
    linkLabel: "Tax Time Calculator →",
    linkHref: "#",
    accentColor: "#7e54e3",
    logo: "/images/about/logos/hatch-wordmark.svg",
    logoAlt: "Hatch",
    logoWidthPx: 120,
    logoHeightPx: 35,
    textTone: "light",
  },
  {
    title: "Customer Advisory Board",
    body: "I design the agenda for our quarterly CAB sessions, product leaders help run them. Consistently rated customers' favourite part of the day.",
    linkLabel: "Shaping Datapay's AI direction →",
    linkHref: "#",
    accentColor: "#343b74",
    logo: "/images/about/logos/datapay-icon.svg",
    logoAlt: "Datapay",
    logoWidthPx: 80,
    logoHeightPx: 80,
    textTone: "light",
  },
];

export interface BioPhoto {
  src: string;
  alt: string;
  tooltip: string;
}

// Order + tooltip captions reference-matched from sarah-roberts-portfolio-2.
export const bioPhotos: BioPhoto[] = [
  { src: "/images/about/bio-mountains.png", alt: "Sarah in the mountains", tooltip: "In the mountains" },
  { src: "/images/about/bio-me-chch.png", alt: "Sarah smiling by the river in Christchurch", tooltip: "Hi! 👋 That's me" },
  { src: "/images/about/bio-hut.png", alt: "Sarah at a hut", tooltip: "In a hut" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// Real photos for Todd + Holly (Sarah supplied these); Cecilia, Lisa, and
// the unnamed engineer stay on a generic placeholder per Sarah's request.
const placeholderAvatar = "/images/about/avatar-placeholder.svg";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sarah is laser focused on improving the customers' overall experience of the product, but she knows that ==won't be best served unless the whole team functions well.== She has worked hard to improve collaboration within the Product Team, taking on extra work to ensure development always had what they needed. ==She tackles all problems with expertise, energy, and a great attitude.==",
    name: "Todd White",
    role: "Head of Product, FarmIQ",
    avatar: "/images/about/09-avatar-todd-white.png",
  },
  {
    quote:
      "Sarah uplifted how we did research at FarmIQ, and she ==made sure I was part of shaping it, not just delivering it.== Working closely with her on our design principles, I grew more confident making my own calls. The work we did together raised the bar for design output across the whole product.",
    name: "Holly Feary",
    // Figma literally renders "(lled)" here — reads like a typo (maybe
    // "(Lead)"?) but transcribed as-is rather than guessed at; flagged to
    // Sarah to confirm the real wording.
    role: "Senior Product Designer (lled), FarmIQ",
    avatar: "/images/about/10-avatar-holly-feary.png",
  },
  {
    quote:
      "Sarah changed how we plan. Before her JTBD work, we were prioritising off whoever shouted loudest. ==Now every roadmap conversation references jobs and outcomes, not just feature requests.== She made research something we actually use, not just something that happens.",
    name: "Cecilia Toh",
    role: "Senior Product Manager, Datapay",
    avatar: placeholderAvatar,
  },
  {
    quote:
      "The product session was the best part of the day. Sarah actually listened, she made sure everyone got a say, not just the loudest person in the room. It didn't feel like we were being sold to, ==it felt like we were building the product as a group with her.==",
    name: "Lisa Black",
    role: "Senior Payroll Leader, Farmers (Customer of Datapay)",
    avatar: placeholderAvatar,
  },
  {
    quote:
      "Sarah's designs come with the thinking already done. I'm not guessing what she meant or going back and ==forth on edge cases, the reasoning is right there.== That makes my job faster and the outcome better.",
    name: "???",
    role: "Lead Engineer, Datapay",
    avatar: placeholderAvatar,
  },
];
