import type { CaseStudy } from "../../lib/case-study";

// Full re-sync with Figma frame 248:310737 (2026-09-17, Sarah: "update all of
// the assets and copy to match what is in my design"). This replaces the
// 2026-09-14/16 build (see the pivot/quote-schema/stats history still worth
// keeping in mind, recorded in memory) — Figma's own copy for every section
// changed since that build, and 5 image slots that were still FarmIQ
// stand-ins/TBD placeholders got real content. Re-pulled every section fresh
// via get_metadata → get_design_context rather than assuming only some
// slots changed, per the project's established Figma-sync pattern.
//
// Copied Sarah's own Figma text close to verbatim (placement/order/images
// from Figma, wording from Figma too, since there's no separate handover MD
// for this pass) — including some apparent typos in her draft ("AI works
// work", "machanics", "beuro", "matric", "have not payroll experts", "a
// nother suggestion", "winning problem", "per payroll task" vs "per task").
// Per [[no-em-dashes-in-copy]] that rule is about my own composed copy, not
// revising her authored content — left these as-is rather than silently
// "fixing" wording that might be intentional. Flagged the full list to Sarah
// to confirm/fix in Figma (source of truth) rather than editing blind.
//
// One real content mismatch flagged, not silently fixed: the "Image grid"
// row 2 left image (customer journey map diagram) carries the caption
// "Recording health treatments offline" — reads like a leftover placeholder
// from a different (farm/livestock) context, not this image. Its Figma
// scrim is also set to 0% opacity (no darkening), which would make the
// white caption text illegible over a light screenshot — used
// `captionTone: "dark"` instead so it's at least readable, but the caption
// text itself needs Sarah's real copy.
//
// Two new schema/component bits this pass needed (both opt-in, don't affect
// the other case studies): `imageBand.layout: "two-uneven-reverse"` — the
// mirror of the existing "two-uneven" (roughly 880/457 ≈ 66/34, left column
// bigger instead of right) for the Image grid's middle row. And the Solution
// image now has its real Figma crop baked in via Pillow (the previous build
// shipped the raw uncropped source and let CSS object-cover center-crop it,
// which was close but not the same off-centre framing Figma specifies).
//
// Still genuinely open (Figma's own "TBD" placeholders, not filled per
// [[case-study-figma-first-workflow]]'s no-invented-content rule):
// - Calls I Made's 5th slot now has a real heading ("We have a clear path
//   forwards") but body is still literally "TBD" in Figma — left out of
//   code, still 4 items, same as before.
// - The wide band right after Calls I Made is still explicitly marked TBD
//   in Figma ("may not apply to this case study — no equivalent asset in
//   the handover MD") — still the FarmIQ stand-in, only its aspect ratio
//   updated (1010/266 → 1010/569, Figma's box grew).
// - Outcome's 5th signal slot: "TBD — 5th signal slot (current content only
//   has 4 real signals, all positive)" — still 4 signals.
// - What I Learned's 3rd slot: "TBD — 3rd learning slot (current content
//   only has 2 real items)" — still 2 items.
//
// Real assets pulled fresh from Figma into public/images/designing-datapay/:
// the Top images band's right photo (was the "team video call" placeholder,
// now the AI risk matrix diagram), its left photo re-cropped to a new
// landscape framing of the same office scene, a new full-bleed D1–D5
// delegation-levels diagram in the Situation section, all 6 Image-grid
// photos (previously 3 FarmIQ three-grid + 2 FarmIQ two-equal stand-ins),
// both Shift-band charts, and both quote-slider photos (the Kathy slide
// reuses the Top-images office photo's source, cropped separately for its
// own 834×440 box). The Situation two-equal band (research illustration +
// payroll ecosystem diagram) and the Solution photo's source image are
// unchanged from the 09-16 build — confirmed by hash, not by assumption.
export const designingDatapay: CaseStudy = {
  slug: "designing-datapay",
  title: "Customers Delegating to AI, One Job at a Time",
  authorName: "Sarah Roberts",
  backHref: "/",
  cover: {
    background: {
      src: "/images/designing-datapay/01-hero-cover.jpg",
      alt: "Auckland skyline at dusk, viewed across the harbour",
      aspect: "16/9",
    },
    deviceImage: {
      src: "/images/designing-datapay/01-cover-top.png",
      alt: "Datapay Pay Run Details screen showing anomaly detection flagging a gross pay variance",
      aspect: "1000/563",
    },
    // No separate mobile crop supplied yet — falls back to deviceImage.
  },
  sections: [
    {
      type: "intro",
      logo: {
        src: "/images/about/logos/datapay-icon.svg",
        alt: "Datapay logo",
        aspect: "80/80",
      },
      logoLarge: true,
      company: "Datapay, Design & Research Lead",
      role: "Design & Research Lead",
      dateRange: "May 2025 – Current",
      stats: [
        {
          label: "CAB satisfaction",
          value: "93/100",
          // Figma's Top-block instance drops "session" (Outcome's instance
          // below keeps it) — transcribed each verbatim from its own node
          // rather than silently syncing them; flagged to Sarah.
          context: "Satisfaction from our Customer Advisory Board (CAB), our highest-rated yet.",
        },
        {
          label: "NZ payroll experts",
          value: "12",
          context: "validated the D1–D5 AI delegation framework directly.",
        },
      ],
      paragraphs: [
        "Datapay set out to define what AI could look like for our payroll platform, not just where to add it as a feature like a chatbot. How it could enhance our customers experience by helping get their jobs done more efficiently. Also from a product and build point of view, how AI works work behind the scenes to map data quickly and increase build capacity.",
        "I created a AI delegation framework, validate by our NZ Enterprise Payroll Leaders, we understand how much they wanted to hand over and where to start. We then used this to design and validate our first AI-assisted workflow for our internal Payroll Consultants who are the biggest beuro in New Zealand. The AI is customer facing but also importantly the machanics behind the scene that enable us to build faster than ever and confidently map the data. Helping both customer and internal Consultant get their job done quicker and more accurately.",
        "The result is a shared framework for delegating work to AI including a risk matric for the jobs, grounded in what consultants and customers said they were comfortable with, not just what was technically possible. I've since shared the research insights across multiple customer workshops, and represented Datapay at the NZ Payroll Association's industry session on Secure AI in payroll.",
      ],
      quotes: [
        {
          quote:
            "Everyone has varying confidence in AI, but we are all on the same track on what we would like to use it for in payroll... The whole day was worthwhile, and I think the best to date.",
          attribution: "CAB participant",
        },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      layout: "two-uneven",
      images: [
        {
          // Re-cropped 2026-09-17 — same office/harbour scene, new landscape
          // framing Sarah set up in Figma (was a tighter portrait crop).
          src: "/images/designing-datapay/02-office-harbour.png",
          alt: "A payroll professional at her desk, hand in her hair, with an Auckland harbour view behind her",
          caption:
            "Payroll Professionals work under intense, deadline‑driven pressure. Our JTBD work highlighted consistent stress points during pay periods and clarified where our product should actively guide users and reduce cognitive load.",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
        {
          // New 2026-09-17 — replaces the old team-video-call placeholder.
          src: "/images/designing-datapay/07-top-ai-risk-matrix.png",
          alt: "AI risk matrix: set the delegation ceiling, place the job on D1–D5, guardrails wrap every level",
          caption: "AI risk matrix for AI delegation",
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
        "**As Design & Research Lead,** I own how Datapay approaches AI delegation, from framework through to customer validation. Key partnerships along the way: internal managed services payroll consultants, AI engineers on feasibility, other product leads to help run customer facing workshops, account managers on the customer relationship, and our GM of Customer Success on reach.",
      ],
    },
    {
      type: "text",
      navLabel: "The Situation",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        "Conversations about AI tended to default to \"more automation is better,\" without checking that against what payroll consultants or customers actually wanted. There was no shared language for what AI should and shouldn't take on across the product.",
        "There was a strong foundation to build from, previously validated Jobs-to-be-Done research I'd led was shaping product decisions, so this wasn't starting from nothing. What was missing was a way to talk about delegation that didn't default to \"AI does everything\", we needed a better framework and customer understanding than the simplistic “human on the loop”.",
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
          src: "/images/designing-datapay/04-research-illustration.png",
          alt: "Illustration of a payroll professional at a desk surrounded by research quote bubbles",
          caption:
            "Insights synthesised from 21 past research projects (including five I led at Datapay), highlighting consistent themes around accuracy, trust, and the consequences of getting payroll wrong.",
          aspect: "600/400",
        },
        {
          src: "/images/designing-datapay/05-payroll-ecosystem-diagram.png",
          alt: "Diagram of payroll as an interconnected system of roles and controlled access",
          caption:
            "A visual representation of payroll as an interconnected system, showing how employees, approvers, payroll professionals, auditors, and secondary roles rely on controlled data flows and safeguards.",
          aspect: "600/400",
        },
      ],
    },
    {
      // New 2026-09-17 — the D1–D5 delegation-ceiling diagram, full-bleed
      // below the two-equal pair (Figma Frame 28, same band). Figma's own
      // caption layer on this image ("AI Delgation") renders fully
      // transparent — effectively no caption — so omitted here too.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "dots",
      layout: "single",
      images: [
        {
          src: "/images/designing-datapay/08-situation-delegation-levels.png",
          alt: "The five delegation levels from Human does to Routine in rules, with a Human-to-100%-AI-delegation scale",
          aspect: "2200/614",
          fit: "contain",
        },
      ],
    },
    {
      // Still a FarmIQ stand-in — Sarah's own note on this slot in Figma
      // (unchanged 2026-09-17, only the box's aspect grew, 1010/266 →
      // 1010/569): "TBD — wide image/video after Calls I Made (may not
      // apply to this case study — no equivalent asset in the handover MD)".
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "dots",
      layout: "single",
      images: [
        {
          src: "/images/farmiq-thrive/06-retiring-app.jpg",
          srcMobile: "/images/farmiq-thrive/06-retiring-app-mobile.png",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "1010/569",
          aspectMobile: "900/1316",
          earlyDesktop: true,
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
          heading: "Built the AI delegation framework before anything else",
          body: "Given an open brief, it would have been easy to jump straight to a feature. Instead, I adapted Stanford's HAS/SALT scale into D1–D5, a delegation framework for our payroll environment, and presented it to leadership before conducting research to have the evidence of what to build first. That gave us a shared vocabulary for what \"delegate to AI\" actually means, rather than a single vague ambition.",
        },
        {
          heading: "Let the consultants choose the job, not leadership",
          body: "Using D1–D5 language, I asked managed services team leads and consultants what they'd want to delegate first. The answer was unanimous: getting customer data into Datapay correctly. Data comes in inconsistent, sometimes non-compliant, with missing fields and the wrong terminology, and it creates a constant back-and-forth communication between consultant and customer. I designed for this winning problem, instead of one leadership assumed was a priority.",
        },
        {
          heading: "Designed for variable oversight, not one fixed level of automation",
          body: "The solution wasn't AI replacing the consultant's judgement at a single, uniform level. Consultants told us delegation comfort depended on the task and the person's trust, so the design let autonomy sit anywhere from D2 to D5 rather than forcing one setting across the board. That decision came directly from what consultants said, they needed to keep control and trust in the technology and be confident that it was correct, as payroll is an auditable space.",
        },
        {
          heading: "Started gathering customer evidence before anyone asked",
          body: "Whilst the prototype was in validation, I independently began surveying customers on how they felt about AI in payroll. Nobody assigned this. I wanted to understand sentiment before we committed further, because I suspected the \"customers will want full automation\" assumption hadn't been tested, and we would see variety of sentiments across the board (especially given the demographic of our customers).",
        },
      ],
    },
    {
      type: "textImage",
      navLabel: "The Solution",
      background: "solid",
      heading: "The Solution",
      paragraphs: [
        "The real problem wasn't just our internal consultants receiving bad data. It was three separate failure points: data arriving incomplete, unclear, or non-compliant from the customer. That data needed to be mapped into the right place, and someone needing to confirm it was correct before it went further. Treating that as one step would have missed where the actual friction was.",
        "I designed a two-sided flow. On the customer side, I built a payroll admin view where the customer uploads and checks their own information before it reaches the consultant, shifting a small amount of effort back to where the data originates and cutting the back-and-forth between admin and consultant. Here AI does the deterministic mapping and flags to the customer when something need their attention or has a nother suggestion. Over tiem the AI will learn the customer terminology and be able to talk in their alguage (noting this customers usually have not payroll experts and don't use Datapay speak). Once the customer is happy they send through the information, and the consultant picks it up. For changes they're confident in, AI makes the update and the consultant reviews it. For anything else, they handle it manually.",
        "This is where D1–D5 did real work. Consultants weren't comfortable at a single autonomy level across the board. Most sat around D3, but it varied by task, some were happy to let AI run at D5, others wanted to stay at D2, and it also varied by person, since individual attitudes to AI differ and aren't fixed. That variability was one of the strongest insights to come out of validation: delegation isn't a single dial, it has to be set per payroll task.",
        "I built this as an HTML prototype and validated it with payroll consultants across three rounds, refining the flow each time based on what they flagged. I worked with lead AI engineers to confirm it was technically feasible before taking it further. The business case was straightforward: faster processing time for consultants, and space for them to focus on higher-value work customers would pay for.",
        "The prototype was paused before build due to a resourcing and leadership shift. It's ready to pick back up when prioritised.",
      ],
      imageMaxWidth: 300,
      image: {
        // Same source photo as the 09-16 build, now cropped to Figma's real
        // off-centre framing (left -33.62%, top -5.06%) via Pillow, instead
        // of the raw source relying on CSS object-cover's plain centre-crop.
        src: "/images/designing-datapay/06-solution-validation-call.png",
        alt: "Sarah Roberts on a video call during a validation session",
        caption:
          "Enjoying the deep validation work with SMEs, spending hours asking “why” to refine roles, job boundaries, and dependencies. Uncovering critical insights that shaped the market canvas.",
        aspect: "1/1",
      },
    },
    {
      // Figma "Image grid" (384:387948), row 1 — real content 2026-09-17,
      // replacing the old FarmIQ three-grid/two-equal stand-ins entirely.
      type: "imageBand",
      spacingBefore: "tight",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/designing-datapay/10-grid-workshop-mindmap.png",
          alt: "A sticky-note mind map from a JTBD AI delegation workshop",
          caption: "1 of 5  high opportunity JTBD AI delegation workshops",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/designing-datapay/11-grid-survey-insights.png",
          alt: "Survey infographic: Payroll Consultants' progressive autonomy across D1–D5, by statement",
          caption: "High level survey insights and workshop delegation differences",
          captionTone: "light",
          fit: "contain",
          aspect: "600/400",
        },
      ],
    },
    {
      // Row 2 — a 66/34 split (Figma: 880px left, 457px square right),
      // the mirror of the site's existing "two-uneven".
      //
      // NOTE: the left caption ("Recording health treatments offline") does
      // not describe this image (a payroll customer-journey-map diagram) —
      // reads like a leftover placeholder from a different context.
      // Transcribed verbatim from Figma rather than invented; flagged to
      // Sarah to replace in Figma. Its scrim is also set to 0% opacity in
      // Figma (no darkening), which would leave white caption text
      // illegible over this light diagram — used `captionTone: "dark"`
      // instead so it's at least readable in the meantime.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-uneven-reverse",
      images: [
        {
          src: "/images/designing-datapay/12-grid-customer-journey-map.png",
          alt: "Customer Journey Map — Pay Run Submission & Review, showing the Payroll Admin and Payroll Consultant tracks",
          caption: "Recording health treatments offline",
          captionTone: "dark",
          aspect: "880/473",
        },
        {
          src: "/images/designing-datapay/13-grid-workshop-video-call.png",
          alt: "A grid of colleagues on a video call workshop",
          caption: "Workshop sessions with customers on AI and reporting needs",
          captionTone: "light",
          aspect: "1/1",
        },
      ],
    },
    {
      // Row 3 — the prototype UI itself: Payroll Admin's and Payroll
      // Consultant's agentic experiences.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/designing-datapay/14-grid-payroll-admin-ui.png",
          alt: "Payroll Admin's first agentic experience — prepares and submits screens",
          caption: "Payroll Admin first agentic experience",
          captionTone: "light",
          fit: "contain",
          aspect: "600/400",
        },
        {
          src: "/images/designing-datapay/15-grid-payroll-consultant-ui.png",
          alt: "Payroll Consultant's agentic checklist and apply-to-Datapay screens",
          caption: "Payroll Consultant agentic checklist and apply to Datapay",
          captionTone: "light",
          fit: "contain",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "text",
      navLabel: "The Shift",
      heading: "The Shift",
      paragraphs: [
        "**Before:** No shared language for what AI should and shouldn't take on. An assumption from leadership that all of our customers wanted full automation where possible. There was AI conversations happening without the customer or consultant input.",
        "**After:** The AI D1–D5 scale is embedded in our discovery language and used to define how we measure success on AI work. It's been validated with customers three times since. The customer survey I ran independently, combined with a CAB session, surfaced that customers do not want a fully agentic future, and that evidence changed the internal conversation about direction.",
        "Customer facing staff now bring customer conversations to me directly so we can continue to build up our customer understanding and keep a pulse on how this will shift overtime.",
      ],
    },
    {
      // New 2026-09-17 — real Datapay analytics screenshots, replacing the
      // FarmIQ stand-ins. No captions on either (Figma's caption layers are
      // present but empty).
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        {
          src: "/images/designing-datapay/16-shift-mau-stickiness.png",
          alt: "MAU trend chart across New, Web, and Classic products, with a 32.4% stickiness year-average callout",
          aspect: "600/400",
        },
        {
          src: "/images/designing-datapay/17-shift-event-comparison.png",
          alt: "Event value comparison chart with month-over-month deltas",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "outcome",
      heading: "The Outcome",
      stats: [
        {
          value: "93/100",
          label: "CAB satisfaction",
          context: "Satisfaction from our Customer Advisory Board (CAB), our highest-rated session yet.",
        },
        {
          value: "12",
          label: "NZ payroll experts",
          context: "validated the D1–D5 AI delegation framework directly.",
        },
      ],
      signalsIntro: "Beyond the framework itself, the confirmed signals so far:",
      signals: [
        { direction: "up", text: "D1–D5 adopted as shared language across product, embedded in discovery and success measures." },
        { direction: "up", text: "Consultants unanimously identified the delegation priority themselves, rather than it being assigned top-down" },
        { direction: "up", text: "Cross-team pull: account managers, their manager, and the GM of Customer Success now route customer conversations through me" },
        { direction: "up", text: "Presenting this research externally at the NZ Payroll Association this week, the first time this work has gone beyond Datapay" },
      ],
    },
    {
      type: "quoteSlider",
      slides: [
        {
          // New 2026-09-17 — a separate crop of the Top-images office photo's
          // source, framed for this slider's 834×440 box (not the same crop
          // as the Top-images band's own use of that photo).
          image: {
            src: "/images/designing-datapay/18-quote-kathy-office.png",
            alt: "Two colleagues at their desks in an office with a harbour view",
            aspect: "834/440",
          },
          quote:
            "She genuinely cares about understanding the customer experience, listening deeply and empathising with their pains, and bringing those insights back to the team. The dedication she's shown hasn't only strengthened our understanding of customer needs, it's brought others along on the journey, helping us become more customer-focused as a team.",
          attribution: "Kathy, Senior Product Designer",
          side: "left",
          accentColor: "#0ab8d7", // Datapay brand blue (confirmed, home.ts)
        },
        {
          // Repeats the intro quote as the slider's last slide — same
          // pattern as farmiq-thrive.ts and keeping-kiwis-safe.ts.
          image: {
            src: "/images/designing-datapay/19-quote-cab-participant.png",
            alt: "Two colleagues talking outdoors near a grassed courtyard",
            aspect: "834/440",
          },
          quote:
            "Everyone has varying confidence in AI, but we are all on the same track on what we would like to use it for in payroll... The whole day was worthwhile, and I think the best to date.",
          attribution: "CAB participant",
          side: "right",
          accentColor: "#343b74", // Datapay navy (confirmed, about.ts CAB tile)
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
          heading: "Framework before feature",
          body: "Given an open brief, the temptation is to show up with a solution. Building the language first meant leadership, consultants and customers were talking about the same thing, when we got to the harder conversations.",
        },
        {
          heading: "Customer evidence outranks internal assumption, even when the assumption comes from leadership",
          body: "The \"customers want full automation\" belief was sincere, but it was untested, and I only had standing to challenge it because I'd already gone and asked.",
        },
      ],
    },
    { type: "backToTop" },
  ],
};
