import type { CaseStudy } from "../../lib/case-study";

// Content: farmiq-team-case-study-FINAL.md (Sarah's handover doc, 2026-08-13).
// Structure: verified against Figma (aX33B4dvgRAkY1eo6olJj6, node 245:233155,
// "Case Study - Design Leadership") — that frame is a straight duplicate of
// the FarmIQ Thrive case study frame with only the Cover title/Intro block
// customised so far; every other block (My Role, Situation, Calls I Made,
// Solution, Image grid, Shift, Outcome, Quote slider, What I Learned) still
// has Thrive's old typeset copy sitting in it. So section ORDER/TYPES below
// come from Figma (proven-safe, since it matches Thrive's already-shipped
// template 1:1 — see farmiq-thrive.ts), but all COPY comes from the MD, not
// from what's currently typeset in the Figma duplicate.
//
// Nav side-bar differs from Thrive in one place: this frame's own Cover nav
// lists "Quotes" as its own linked item (Thrive's doesn't link its Quote
// section at all) and does NOT shorten "The Situation I Walked Into" the
// way Thrive's nav does — both followed literally here since that's what's
// actually in this frame's Navigation instance.
//
// STILL OPEN — flagged in the MD's own status note, not resolved here:
// the four Design Principle cards (Reduce Reuse Recycle, Built for Farm
// Life, Help is on Hand, Every Second Counts) exist as designed visuals
// somewhere in Sarah's Figma but aren't placed in this frame yet — she
// still needs to decide whether they go in Calls I Made #1 or The Solution.
// See the TODO comment on Calls I Made #1 below.
//
// ASSETS: every image below is a structural placeholder (no `src`) — Sarah
// is sourcing real photos/screenshots next. Aspects/layout come from the
// Figma frame's own slots where a matching slot exists there; where the MD
// doesn't specify what a Figma slot should show (the post-Calls single wide
// image, the Situation/Solution/Shift supporting images, the image-grid
// band), that's flagged inline — don't assume these captions from Thrive's
// leftover copy in Figma, they're Thrive's, not this case study's.
export const designLeadership: CaseStudy = {
  slug: "design-leadership",
  title: "Growing FarmIQ's Design Team, Practice & Systems",
  authorName: "Sarah Roberts",
  backHref: "/",
  // Sarah rejected the first pass (Thrive's photo+device-mockup treatment,
  // 2026-08-15) — this asset is one big illustrated team-retro board, not a
  // photo+app-screens pair, and Thrive's crop/zoom chopped off her 4th
  // column. Replaced with the one-off "team" hero variant: plain title,
  // then this full-width uncropped board with each teammate's photo
  // (Smita/Sarah/Holly/Marco, real exports, all 480x480) parallax-scrolling
  // over it. Kept scoped to this case study only, per her call — see
  // TeamHeroPerson/the "team" cover variant in lib/case-study.ts.
  cover: {
    variant: "team",
    background: {
      src: "/images/design-leadership/01-hero-board.png",
      alt: "Team retro board — strengths, weaknesses, and working styles for Smita, Sarah, Holly, and Marco",
      // Pre-cropped by Sarah in Figma to her exact chosen bottom edge
      // (01-hero-cover-CROP.png, 2026-08-15) — not consumed by TeamHero.astro
      // itself (it reads the image's own natural size), kept accurate here
      // for documentation/consistency with the rest of the schema.
      aspect: "2400/1197",
    },
    people: [
      { name: "Smita", image: { src: "/images/design-leadership/01-team-Smita.png", alt: "Smita", aspect: "1/1" } },
      { name: "Sarah", image: { src: "/images/design-leadership/01-team-Sarah.png", alt: "Sarah", aspect: "1/1" } },
      { name: "Holly", image: { src: "/images/design-leadership/01-team-Holly.png", alt: "Holly", aspect: "1/1" } },
      { name: "Marco", image: { src: "/images/design-leadership/01-team-Marco.png", alt: "Marco", aspect: "1/1" } },
    ],
  },
  sections: [
    {
      type: "intro",
      // Reused from Thrive — same company, same real asset, no new export needed.
      logo: {
        src: "/images/farmiq-thrive/farmiq-logo.svg",
        alt: "FarmIQ logo",
        aspect: "160/32",
      },
      company: "FarmIQ, Lead Product Designer",
      role: "Lead Product Designer",
      dateRange: "Oct 2022 – Jan 2025",
      stats: [
        {
          label: "In-product feedback",
          value: "75–80%",
          context:
            "Response rate on surveys reaching farm workers we'd typically struggled to hear from before in our regular research.",
        },
        {
          label: "Mobile recording CSAT",
          value: "~80%",
          context: "Average customer satisfaction score (CSAT) for new mobile recording flows farmers use most.",
        },
      ],
      paragraphs: [
        "I led FarmIQ's shift from ad-hoc design and fragmented UI to a repeatable operating model and multi-platform design system, grounded in real farmer roles and jobs-to-be-done.",
        "What started as inconsistent products and a newly re-formed team became a governed system that let us move fast without sacrificing quality, the same foundations that went on to power two of FarmIQ's most-used features, Diary and Tasks.",
      ],
      quote: {
        quote:
          "Sarah uplifted how we did research at FarmIQ, and she made sure I was part of shaping it, not just delivering it. Working closely with her on our principles, I grew more confident making my own calls. The work we did together raised the bar for design output across the product.",
        attribution: "Holly Feary, Senior Product Designer, FarmIQ",
      },
    },
    // Matches Thrive's own imageBand right after Intro (Figma's "Top images"
    // slot on this frame still literally shows Thrive's two captions — not
    // reused here since they're Thrive-specific, but the layout/spacing is).
    {
      type: "imageBand",
      spacingBefore: "tighter",
      layout: "two-equal",
      images: [
        {
          alt: "TBD — image 1, right after intro",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
        {
          alt: "TBD — image 2, right after intro",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
      ],
    },
    {
      type: "text",
      navLabel: "My Role",
      background: "dots",
      heading: "My Role",
      paragraphs: [
        "**Lead Product Designer, FarmIQ.** Led a team of 2 Product Designers and a Graphic Designer, building the operating model and design system that took FarmIQ from fragmented, inconsistent UI to a governed, multi-platform practice. Partnered with Product Managers, Engineering Leads, Customer Success, and farming SMEs throughout.",
      ],
    },
    {
      type: "text",
      // Not shortened — Figma's own nav for this frame spells it out in full,
      // unlike Thrive's which shortens to "The Situation".
      navLabel: "The Situation I Walked Into",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        "FarmIQ had grown organically. Across web and mobile, the products felt inconsistent, designers solved the same problems twice, engineers rebuilt near-identical patterns with similar behaviours, and delivery slowed.",
        "After a significant restructure, we had a newly re-formed team with different backgrounds and working styles, but no shared operating model, mission, rituals, measures, to keep quality high while moving quickly.",
        "Our customer understanding also needed to mature. The existing personas were too narrow and didn't reflect roles, context, or device use, so discovery inputs lacked the clarity needed for confident prioritisation.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      background: "dots",
      layout: "two-equal",
      images: [
        { alt: "TBD — Situation supporting image 1", aspect: "600/400" },
        { alt: "TBD — Situation supporting image 2", aspect: "600/400" },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      background: "dots",
      layout: "single",
      images: [
        {
          alt: "TBD — Situation wide image",
          aspect: "1010/266",
          fit: "contain",
        },
      ],
    },
    {
      type: "numberedList",
      navLabel: "The Calls I Made",
      heading: "The Calls I Made",
      columns: 2,
      items: [
        {
          heading: "Gave the team a clear north star",
          // TODO(Sarah): the four Design Principle cards (Reduce Reuse
          // Recycle, Built for Farm Life, Help is on Hand, Every Second
          // Counts) exist as designed visuals — decide whether they slot in
          // here as a visual callout or go in The Solution instead.
          body: "We co-created a Design Team Charter defining mission, roles, values, collaboration agreements, and measures. I translated the company's strategy into a concise design narrative and four guiding principles that resolved debates without looping around the same discussions.",
        },
        {
          heading: "Modernised customer understanding",
          body: 'I led a refresh of our customer understanding through research. Every interview began with consistent "farmer introduction" questions, and each session produced a farmer-on-a-page summary. With SMEs, we co-created role definitions across farm owners, farm managers, stock managers, workers, and third-party users, and paired them with Jobs-to-Be-Done to focus on outcomes that matter.',
        },
        {
          heading: "Closed the loop with in-product feedback",
          body: "To learn quickly from all roles, including hard-to-reach workers, I introduced in-product surveys across web and mobile. Insights fed straight back into iteration and prioritisation, alongside quantitative analytics, helping us measure the success of released solutions.",
        },
        {
          heading: "Scaled consistency with a multi-platform Design System",
          body: "I led the evolution from fragmented design libraries to a governed Design System co-owned with engineering. We audited components and behaviours, defined system architecture, foundations through to components and patterns, and introduced a contribution model: propose, review, approve, document.",
        },
        {
          heading: "Cadences that let the team own problems end-to-end",
          body: "I introduced weekly Design Jams and structured design reviews, working alongside our PM, Head of Product, and agile coach, so designers had a fast, reliable rhythm to move through without waiting on me to unblock every decision.",
        },
      ],
      // MD's closing line after these 5 ("Together, these five calls gave the
      // team a shared way to pick up problems, design solutions, and validate
      // them quickly, without needing me in every decision.") has nowhere to
      // go — the schema's numberedList type has no trailing-paragraph slot
      // and Figma's own Frame 23 doesn't show one either. Dropped, not lost —
      // flagging here rather than silently discarding it.
    },
    // Figma's template has a single wide image/video slot here (Thrive uses
    // a real YouTube embed of the app). No equivalent asset exists for a
    // design-team story yet — Sarah to decide whether this slot applies at
    // all here (e.g. a design-system walkthrough clip) or should be dropped.
    {
      type: "imageBand",
      layout: "single",
      images: [
        {
          alt: "TBD — wide image/video after Calls I Made (may not apply to this case study, see comment above)",
          aspect: "710/400",
        },
      ],
    },
    {
      type: "textImage",
      navLabel: "The Solution",
      background: "solid",
      heading: "The Solution",
      paragraphs: [
        "The design system isn't a component library sitting untouched in Figma. It runs on a contribution model, propose, review, approve, document, so any designer or engineer can suggest a new pattern, and it gets debated and documented rather than quietly duplicated.",
        "Customer understanding works the same way. Roles and Jobs-to-Be-Done aren't a slide deck, they're the reference point a designer opens before starting any new flow. And the feedback loop closes it: in-product pulses turn a shipped release into evidence for what to build next, not a one-off survey that gets filed away.",
        'The result: a designer proposing a new pattern, a PM prioritising a feature, and an engineer building a component are all working from the same source of truth, not three separate interpretations of "what good looks like."',
      ],
      image: {
        alt: "TBD — Solution portrait image",
        aspect: "267/400",
        aspectMobile: "1/1",
        aspectTablet: "600/400",
      },
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "three-grid",
      images: [
        { alt: "TBD — image grid 1", aspect: "400/600", aspectMobile: "1/1" },
        { alt: "TBD — image grid 2", aspect: "400/600", aspectMobile: "1/1" },
        { alt: "TBD — image grid 3", aspect: "400/600", aspectMobile: "1/1" },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        { alt: "TBD — image grid 4", aspect: "600/400" },
        { alt: "TBD — image grid 5", aspect: "600/400" },
      ],
    },
    {
      type: "text",
      navLabel: "The Shift",
      heading: "The Shift",
      paragraphs: [
        "Before, design and engineering worked from fragmented libraries with no shared principles, and problem-solving was reactive rather than systematic. After, a governed design system and shared rhythm mean the whole team works from one source of truth. PMs and engineering leads reported fewer surprises and clearer trade-offs, designers reported greater autonomy. The same foundations went on to underpin Diary and Tasks, two of FarmIQ's most-used features.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        { alt: "TBD — Shift supporting image 1", aspect: "600/400" },
        { alt: "TBD — Shift supporting image 2", aspect: "600/400" },
      ],
    },
    {
      type: "outcome",
      heading: "The Outcome",
      stats: [
        {
          value: "75–80%",
          label: "response rate on in-product surveys",
          context: "reaching farm workers our previous research had missed entirely.",
        },
        {
          value: "~80%",
          label: "CSAT on new mobile recording flows",
          context: "the workflows farmers rely on most.",
        },
      ],
      // MD's outcome section reads as 3 prose lines (CSAT/NPS trend, Design
      // Jams cadence, refreshed customer model) rather than Thrive's clean
      // up/down signal list. Reshaped into the schema's signalsIntro +
      // signals shape below — both existing signals genuinely read positive
      // ("replaced ad-hoc" / "extended coverage"), so both are "up"; flagging
      // this reshaping since it's not verbatim from the MD.
      signalsIntro: "CSAT and NPS scores increased season-on-season as feedback fed directly back into iteration:",
      signals: [
        {
          direction: "up",
          text: "3x weekly Design Jams replaced ad-hoc, reactive problem-solving with a structured rhythm the whole team could rely on.",
        },
        {
          direction: "up",
          text: "Design coverage extended to workers and third-party users — roles earlier personas had missed — with roles + JTBD as FarmIQ's single source of truth for framing new discovery.",
        },
      ],
    },
    // MD's "One Quote" section originally had just Todd's — Sarah asked
    // (2026-08-15) to add Holly's intro quote back in as a second slide, to
    // match Thrive's own convention of repeating its top-of-page quote
    // later in the slider (Thrive's Chris Hursthouse slide is verbatim the
    // intro quote). Both are real, attributed quotes already used elsewhere
    // on the site — no new content invented. Figma's template has a 3rd
    // slide slot still sitting on Thrive's old Alistair Bird quote/photo —
    // open whether Sarah wants a 3rd real quote or to drop that slide.
    // Figma's Cover nav links this section as "Quotes" (its own nav item,
    // unlike Thrive which doesn't link its Quote section at all) — kept
    // that navLabel here.
    {
      type: "quoteSlider",
      navLabel: "Quotes",
      slides: [
        {
          image: {
            alt: "Todd White, Head of Product, FarmIQ",
            aspect: "834/440",
          },
          quote:
            "Sarah is laser focused on improving the customers' overall experience of the product, but she knows that won't be best served unless the whole team functions well. She has worked hard to improve collaboration within the Product Team, taking on extra work to ensure development always had what they needed. She tackles problems with expertise, energy, and a great attitude.",
          attribution: "Todd White, Head of Product, FarmIQ",
          // TODO(assets): side/accentColor are placeholders — per the site's
          // convention (see design-decision-workflow), accentColor must be
          // hand-picked from Todd's actual photo once chosen, never averaged.
          side: "left",
          accentColor: "#5E6566",
        },
        {
          image: {
            // Her existing avatar (/images/about/10-avatar-holly-feary.png)
            // is a portrait headshot, not this slide's landscape 834/440
            // format — Sarah will need a different/wider photo of Holly for
            // this slot, not just a reuse of the About-page avatar crop.
            alt: "Holly Feary, Senior Product Designer, FarmIQ",
            aspect: "834/440",
          },
          // Verbatim repeat of the intro quote, same as Thrive's pattern.
          quote:
            "Sarah uplifted how we did research at FarmIQ, and she made sure I was part of shaping it, not just delivering it. Working closely with her on our principles, I grew more confident making my own calls. The work we did together raised the bar for design output across the product.",
          attribution: "Holly Feary, Senior Product Designer, FarmIQ",
          // TODO(assets): side/accentColor placeholders — hand-pick once a
          // real photo is chosen, never averaged (see design-decision-workflow).
          side: "left",
          accentColor: "#5E6566",
        },
      ],
    },
    {
      type: "numberedList",
      navLabel: "What I Learned",
      heading: "What I Learned",
      columns: 1,
      items: [
        {
          heading: "Clarity has to come before autonomy",
          body: "Once the problem, principles, and decision criteria were explicit, the team could move faster on their own, they weren't waiting on me to unblock things.",
        },
        {
          heading: "A design system only works if engineering owns it too",
          body: "Co-ownership mattered more than how many components we had.",
        },
        {
          heading: "Roles and Jobs-to-Be-Done gave us more than generic personas ever did",
          body: "Once we modelled users by role, context, and job, discovery became something we could act on, with confidence.",
        },
        {
          heading: "In-product feedback reached a wider number of users",
          body: "Targeted, in-the-moment pulses surfaced insight from workers we'd struggled to hear from before.",
        },
        {
          heading: "None of it holds without repeatable habits",
          body: "Cadences, a contribution model, and living documentation stopped things sliding back into one-off decisions and opinion.",
        },
      ],
    },
    { type: "backToTop" },
  ],
};
