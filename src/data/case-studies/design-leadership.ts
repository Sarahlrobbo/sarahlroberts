import type { CaseStudy } from "../../lib/case-study";

// Content: originally farmiq-team-case-study-FINAL.md (2026-08-13), since
// superseded section-by-section by Figma's own now-finalised copy where the
// two differ (Solution's "Farmer Building Blocks" framing, Outcome's 4 real
// signals) — see the inline comments on those two sections.
// Structure: verified against Figma (aX33B4dvgRAkY1eo6olJj6). NOTE the
// frame's node id has changed at least twice as Sarah iterated
// (245:233155 → 248:272049 as of 2026-09-05) — always re-resolve the node
// id from her latest URL rather than trusting one saved here, per
// [[case-study-figma-first-workflow]]'s frame-renaming/reuse gotcha. Section
// order/types match Thrive's shared template (see farmiq-thrive.ts).
//
// Nav side-bar matches Thrive's shared pattern exactly (corrected
// 2026-09-05, Sarah's call) — no "Quotes" nav item, and "The Situation"
// shortened in the sidebar even though the on-page heading stays "The
// Situation I Walked Into" in full. An earlier pass followed this frame's
// own Cover/Navigation instance literally instead, which added both back —
// wrong call, reverted.
//
// STILL OPEN — flagged in the MD's own status note, not resolved here:
// the four Design Principle cards (Reduce Reuse Recycle, Built for Farm
// Life, Help is on Hand, Every Second Counts) exist as designed visuals
// somewhere in Sarah's Figma but aren't placed in this frame yet — she
// still needs to decide whether they go in Calls I Made #1 or The Solution.
// See the TODO comment on Calls I Made #1 below.
//
// ASSETS: all real now (2026-09-05) — Sarah placed every image directly in
// a newer Figma frame (node 248:272049, same file) with real captions.
// Pulled via the cloud Figma connector's download_assets/get_design_context
// (not her loose asset folder, which had ambiguous filename variants —
// going straight to what's actually placed in Figma sidesteps that
// entirely) and reprocessed into public/images/design-leadership/. Captions
// below are typed exactly as they render in Figma.
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
      alt: "Team charter board — strengths, working styles, and collaboration agreements for Smita, Sarah, Holly, and Marco",
      // Pre-cropped by Sarah in Figma to her exact chosen bottom edge, then
      // re-exported 2026-09-06 with the candy-heart stickers removed ("Cover-
      // Less Hearts.png" in New Website/Leadership/) — they read too playful
      // at hero scale and undercut the leadership framing; the stickies stay.
      // Not consumed by TeamHero.astro itself (it reads the image's own
      // natural size), kept accurate here for schema consistency. Resized to
      // 2400px wide on import (from 4060) — same crop, same 2400/1197 ratio.
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
          value: "80%",
          context: "Average CSAT for new mobile recording flows farmers use most.",
        },
      ],
      paragraphs: [
        "I led FarmIQ's shift from ad-hoc design and fragmented UI to a repeatable operating model and multi-platform design system, grounded in real farmer roles and jobs-to-be-done. It started with the team itself. In a charter session, we mapped our strengths, working styles, and how we'd collaborate.",
        "What started as inconsistent products and a newly re-formed team became a governed system that let us move fast without sacrificing quality. The same foundations that went on to power two of FIQ's most-used features that I crafted, Diary and Tasks.",
      ],
      quote: {
        quote:
          "Sarah uplifted how we did research at FarmIQ, and she made sure I was part of shaping it, not just delivering it. Working closely with her on our principles, I grew more confident making my own calls. The work we did together raised the bar for design output across the product.",
        attribution: "Holly Feary, Senior Product Designer, FarmIQ",
      },
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      layout: "two-uneven",
      images: [
        {
          src: "/images/design-leadership/07-brand-consistency.png",
          alt: "Whilst at FIQ I uplifted the brand by adding consistency across the products.",
          caption: "Uplifting brand consistency across the products.",
          captionTone: "light",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
        {
          src: "/images/design-leadership/08-design-principles.png",
          alt: "Design Principles Holly created with coaching.",
          caption: "Design Principles Holly created with coaching.",
          captionTone: "light",
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
        "As Lead Product Designer at FarmIQ, I led a team of 2 Product Designers and a Graphic Designer, building the operating model and design system that took FarmIQ from fragmented, inconsistent UI to a governed, multi-platform practice. Partnered with Product Managers, Engineering Leads, Customer Success, and farming SMEs throughout.",
      ],
    },
    {
      type: "text",
      // Corrected (2026-09-05, Sarah's call) — this page follows Thrive's
      // shared nav pattern, short nav label but full heading below.
      navLabel: "The Situation",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        // "across products" (2026-09-05 re-pull) reads a little redundant
        // right after "Across web and mobile" a few words earlier — typed
        // verbatim from Figma rather than smoothed out, flag to Sarah in
        // case it's an unintentional duplicate on her end.
        "FarmIQ had grown organically. Across web and mobile, the products felt inconsistent, across products designers solved the same problems twice, engineers rebuilt near-identical patterns with similar behaviours, and delivery slowed.",
        "After a significant restructure, we had a newly re-formed team with different backgrounds and working styles, but no shared operating model, mission, rituals, measures, to keep quality high while moving quickly.",
        "Our customer understanding needed to mature. The existing personas were too narrow and didn't reflect roles, context, or device use, so discovery inputs lacked the clarity needed for confident prioritisation.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      wide: true,
      background: "dots",
      layout: "two-equal",
      images: [
        {
          src: "/images/design-leadership/02-situation-before.png",
          alt: "Products before aligned design system.",
          caption: "Products before aligned design system.",
          captionTone: "dark",
          aspect: "600/400",
        },
        {
          src: "/images/design-leadership/03-situation-after.png",
          alt: "Products after understanding customers roles and JTBD.",
          caption: "Products after design system, roles & JTBD.",
          captionTone: "dark",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "dots",
      layout: "single",
      images: [
        {
          src: "/images/design-leadership/04-situation-wide.png",
          alt: "Aligning all product and visual design across FarmIQ.",
          // Caption removed (Sarah's call, 2026-09-05) — the collage's own
          // 4 library labels (Core/Mobile app/Web-ex/Design Bible) already
          // say what this image is, a caption on top was redundant.
          // No `fit` override (defaults to "cover") — "contain" was the
          // actual cause of the corner/width complaint: the image's real
          // ratio (2020/664 ≈ 3.04) doesn't quite match this box's 1010/327
          // (≈3.09), so "contain" left a ~8px letterbox gap on each side.
          // That gap is what the rounded-corner mask was clipping into
          // (reads as a "notch"), and what made the band look narrower
          // than the two-image row above it. "cover" fills the box exactly
          // flush with that row, at the cost of an imperceptible ~5px
          // total vertical crop — the periwinkle backdrop runs edge-to-edge
          // in the source file with no real content near the top/bottom
          // edge to lose. Rounded corners restored (default).
          aspect: "1010/327",
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
          body: 'I led a refresh of our customer understanding through research. Every interview began with consistent "farmer introduction" questions, and each session produced a farmer-on-a-page summary. With SMEs, we co-created role definitions across farm owners, farm managers, stock managers, workers, and third-party users, and paired them with Jobs-to-Be-Done to focus on outcomes that matter. We then validated them with customers and kept them upto date every season.',
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
    {
      type: "imageBand",
      layout: "single",
      images: [
        {
          src: "/images/design-leadership/05-design-jams.png",
          alt: "Cross-team DesignJams: faster, more collaborative, and genuinely fun. FWFP was a team effort with Holly, Marco, and me.",
          caption: "Cross-team DesignJams: faster, more collaborative, and genuinely fun.",
          captionTone: "dark",
          aspect: "1010/569",
        },
      ],
    },
    {
      type: "textImage",
      navLabel: "The Solution",
      background: "solid",
      heading: "The Solution",
      // Updated to match Figma's now-finalised copy (2026-09-05) — the
      // "Farmer Building Blocks" framing is new since the last pass.
      paragraphs: [
        "The design system isn't a component library sitting untouched in Figma. It runs on a contribution model, propose, review, approve, document, so any designer or engineer can suggest a new pattern, and it gets debated and documented rather than quietly duplicated.",
        "Customer understanding become shared in a similar way. Our Farmer Building Blocks consist of the individuals: technology adoption, FIQ pack, Role and Jobs-to-Be-Done. I created the research system that enabled Designers and Product Managers to keep our roles on a page upto date every time we spoke to customers. As behaviours and attitudes shifted overtime, we kept our understanding their sentiment. Our Farmer Building Blocks are the reference point for Product and Design Discovery, opening them up before starting a new feature or flow, and during build. I also enabled a post go-live feedback loop: in-product pulses turn a shipped release into measures of success or evidence for what to enhance or build next.",
        'The result: a designer proposing a new pattern, a PM prioritising a feature, and an engineer building a component are all working from the same source of truth, not three separate interpretations of "what good looks like."',
      ],
      // Figma's slot for this is now a 339x339 square (was portrait before) —
      // aspectTablet/Mobile dropped since there's no distinct crop shown
      // for those in Figma for this slot, "1/1" holds at every size.
      image: {
        src: "/images/design-leadership/06-solution-processes.png",
        alt: "The product processes I uplifted.",
        caption: "The product processes I uplifted.",
        captionTone: "dark",
        aspect: "1/1",
      },
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      wide: true,
      background: "solid",
      layout: "three-grid",
      images: [
        {
          src: "/images/design-leadership/09-customer-roles.png",
          alt: "Every customer we spoke to in discovery shared our roles.",
          caption: "Every customer in discovery shaped our roles.",
          // Solid band instead of overlaying the persona collage directly
          // (Sarah's call, 2026-09-05) — exact hex from her own colour
          // picker.
          captionBg: "#E0CCFB",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/design-leadership/10-farmer-building-blocks.png",
          alt: "Farmer building blocks: tech adoption, packs, roles & JTBD.",
          caption: "Farmer Building Blocks: adoption, packs, roles & JTBD.",
          captionTone: "dark",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/design-leadership/11-roles-on-a-page.png",
          alt: "Roles on a page helped Product understand customers needs.",
          caption: "Roles-on-a-page helped Product understand customers.",
          // Solid band instead of overlaying the grid directly (Sarah's
          // call, 2026-09-05) — exact hex from her own colour picker.
          captionBg: "#F7FEE7",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/design-leadership/12-diary-desktop.png",
          alt: "Diary: farm-wide view for in-field decisions.",
          caption: "Diary: farm-wide view for in-field decisions.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/design-leadership/13-diary-mobile.png",
          alt: "Diary on the mobile app: 80% CSAT on launch.",
          caption: "Diary on the mobile app: 80% CSAT on launch.",
          captionTone: "light",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "text",
      navLabel: "The Shift",
      heading: "The Shift",
      paragraphs: [
        "Before, design and engineering worked from fragmented libraries with no shared principles, and problem-solving was reactive rather than systematic. After, a governed design system and shared rhythm mean the whole team works from one source of truth. PMs and engineering leads reported fewer surprises and clearer trade-offs, designers reported greater autonomy. The same foundations went on to underpin Diary and Tasks, two of FarmIQ's most-used features that I crafted.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        {
          src: "/images/design-leadership/14-shift-feedback.png",
          alt: "Introducing in-product feedback allowed us to move with confidence.",
          caption: "In-product feedback let us move with confidence.",
          captionTone: "dark",
          fit: "contain",
          aspect: "600/400",
        },
        {
          src: "/images/design-leadership/15-shift-farmers.png",
          alt: "Farmers happier to help with discovery, they could see our progress.",
          caption: "Farmers happier to help, they could see our progress.",
          captionTone: "dark",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "outcome",
      heading: "The Outcome",
      // Updated to match Figma's now-finalised copy (2026-09-05): stat 2
      // dropped its "~"/"new" wording, and 4 real signals now exist instead
      // of the earlier 2-signal reshaping (last pass only had 2 real facts
      // to work with and left 3 Figma slots TBD — all but one are filled
      // now; the schema's 5th signal slot, a 3rd "up", is still genuinely
      // unfilled in Figma itself, not a gap on this end).
      stats: [
        {
          value: "75–80%",
          label: "response rate on surveys",
          context: "reaching farm workers our previous research had missed entirely.",
        },
        {
          value: "80%",
          label: "CSAT on mobile recording",
          context: "the workflows farmers rely on most.",
        },
      ],
      signalsIntro: "With conservative measurement, we also saw strong behavioural signals:",
      signals: [
        { direction: "up", text: "NPS scores increased season-on-season." },
        {
          direction: "up",
          text: "30% average increase in feature requests via in-product surveys, helping us maintain the backlog and build the roadmap with confidence.",
        },
        {
          direction: "down",
          text: "Less ad-hoc, reactive problem-solving. Replaced with 3 weekly design jams creating a structured rhythm the whole team could rely on.",
        },
        {
          direction: "up",
          text: "We could do more with less. Design coverage extended to workers and third-party users, roles earlier personas had missed entirely.",
        },
      ],
    },
    // Corrected (2026-09-05, Sarah's call) — matches Thrive's shared nav
    // pattern, no "Quotes" nav item; not linked in the sidebar.
    {
      type: "quoteSlider",
      slides: [
        {
          image: {
            src: "/images/design-leadership/16-quote-todd.jpg",
            alt: "Todd White, Head of Product, FarmIQ, on farm with the team and their dogs",
            aspect: "834/440",
          },
          quote:
            "Sarah is laser focused on the customer experience, but she knows that won't be served unless the whole team functions well. She worked hard to improve collaboration within the Product Team, taking on extra work so development had what they needed.",
          attribution: "Todd White · Head of Product, FarmIQ",
          // Real photo: group farm shot, subjects spread across the frame —
          // text sits on the left per Figma, over the more open grass area.
          side: "left",
          // Hand-picked from the photo's own foliage, not averaged (see
          // design-decision-workflow) — muted forest green from the trees
          // behind the group.
          accentColor: "#3D4A2E",
        },
        {
          // Real event/stage photo (colourful stage-lighting backdrop,
          // people on stage) — not a flat gradient graphic as it first
          // looked at thumbnail size when picking this asset; correcting
          // that assumption here since it's a genuine photo, not a
          // placeholder illustration.
          image: {
            src: "/images/design-leadership/17-quote-holly.png",
            alt: "Holly Feary, Senior Product Designer, FarmIQ, on stage at a conference",
            aspect: "834/440",
          },
          quote:
            "Sarah uplifted how we did research at FarmIQ, and she made sure I was part of shaping it, not just delivering it. Working closely with her on our principles, I grew more confident making my own calls.",
          attribution: "Holly Feary, Senior Product Designer, FarmIQ",
          side: "right",
          // Hand-picked from the gradient's own dominant hue (magenta/pink),
          // not averaged.
          accentColor: "#8B2F6B",
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
        // Figma trimmed this list to 3 items (2026-09-05 re-pull) — the
        // "In-product feedback reached a wider number of users" and "None
        // of it holds without repeatable habits" items that used to be
        // here are gone from the frame, not just visually reordered.
      ],
    },
    { type: "backToTop" },
  ],
};
