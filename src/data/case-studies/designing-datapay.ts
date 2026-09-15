import type { CaseStudy } from "../../lib/case-study";

// Content sourced from ~/Downloads/datapay-ai-delegation-case-study.md
// (2026-09-15, Sarah's call to replace the earlier "Greenfields Future"
// scaffold with this one — a different Datapay story, the D1–D5 AI
// delegation framework). Body copy below is close to verbatim from that MD
// for every section it covers (Intro, My Role, Situation, Calls I Made,
// Solution, Shift, Outcome's confirmed bullets, What I Learned) — the
// numberedList `heading` labels are the only editorial addition, since the
// MD writes those as full lead sentences rather than short headings.
//
// Updated past the MD's original ⚠️ gaps with real content Sarah supplied
// directly in-session (2026-09-16), superseding the doc's placeholders:
// - Both intro/outcome stats are now real: "93/100 CAB satisfaction" and
//   "12 NZ payroll experts" validated the framework directly (Sarah's call,
//   2026-09-16 — she deliberately left out the raw survey participant
//   count as "not very impressive," and swapped an earlier "4 customer
//   workshops" stat for CAB satisfaction as the stronger, outcome-oriented
//   number). "AI delegation framework" is spelled out in full in the stat
//   contexts rather than just "delegation framework," per Sarah's note
//   that the bare term doesn't explain itself. Note: the CAB satisfaction
//   and the earlier-considered "57% backed Anomaly Detection" stat both
//   come from the same source MD as the "Greenfields Future" reporting
//   story that used to be on this page — Sarah confirmed both link to the
//   AI delegation work too, but the Anomaly Detection one was left out
//   here since nothing else on this page explains what that concept is.
// - Intro quote: the two CAB participant quotes Sarah gave, combined into
//   one attributed to "CAB participant." Bottom quote block: Kathy's
//   testimonial, then the intro quote repeated as the last slide (matching
//   the farmiq-thrive/keeping-kiwis-safe convention).
//
// Still genuinely open:
// - The (still-FarmIQ-stand-in) wide band after Calls I Made, the two Shift
//   charts, both quote-slider photos, and the closing 5-image grid are all
//   still placeholders — Sarah's own Figma captions on these mark them
//   "TBD" too, so nothing was pulled into code for them yet.
// - dateRange below reuses the general "Design & Research Lead, Datapay"
//   dates from about.ts's career timeline (May 2025–Current) since this MD
//   doesn't give this specific initiative its own start/end — worth
//   confirming with Sarah whether that's the right range for this story
//   specifically, rather than the whole role.
//
// Real assets pulled from Figma (2026-09-16, node 248:310737) into
// public/images/designing-datapay/, replacing the FarmIQ stand-ins for the
// 5 slots Sarah had actually finished there: the cover background + device
// screenshot, the two-uneven band right after the intro, the two-equal band
// in the Situation section, and the Solution section's image (a real photo
// of Sarah on a validation call, not the "flow diagram" this slot used to
// describe — replaced the placeholder's alt text and aspect to match).
// Captions are copied verbatim from Figma's own caption layers. Every other
// image slot in this file (see "Still genuinely open" above) is untouched —
// still a FarmIQ stand-in from the 2026-09-15 "fill every image slot" pass,
// since Sarah hadn't replaced those in Figma yet either.
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
        // 80×80 in the source SVG — genuinely square, same shape as MSC's
        // icon (aspect "100/72" there), not the default 160/32 wordmark
        // ratio. IntroSection.astro's logoLarge path renders by intrinsic
        // aspect anyway (h-14 w-auto, object-contain), so this didn't
        // affect the render, but it should still describe the real asset.
        aspect: "80/80",
      },
      // Without this, a square icon gets squashed into the default 160×32
      // wordmark slot and reads as a sliver. Same fix as MSC's icon on the
      // Keeping Kiwis Safe page (see keeping-kiwis-safe.ts).
      logoLarge: true,
      company: "Datapay, Design & Research Lead",
      role: "Design & Research Lead",
      dateRange: "May 2025 – Current",
      stats: [
        {
          label: "CAB satisfaction",
          value: "93/100",
          context: "Satisfaction from our Customer Advisory Board (CAB), our highest-rated session yet.",
        },
        {
          label: "NZ payroll experts",
          value: "12",
          context: "validated the D1–D5 AI delegation framework directly.",
        },
      ],
      paragraphs: [
        "Datapay set out to define what AI could look like for a payroll platform: not just where to add it as a feature like a chatbot, but how it could enhance the experience for our customers, and how it could work behind the scenes to map data quickly and increase build capacity.",
        "I created a delegation framework, used it to design and validate an AI-assisted workflow with the payroll consultants who'd use it, then tested it with customers to understand how much they actually wanted to hand over.",
        "The result is a shared framework for delegating work to AI, grounded in what consultants and customers said they were comfortable with, not just what was technically possible. I've since presented the research behind it across multiple customer workshops, and represented Datapay at the NZ Payroll Association's industry session on AI in payroll.",
      ],
      quotes: [
        {
          quote: "Everyone has varying confidence in AI, but we are all on the same track on what we would like to use it for in payroll... The whole day was worthwhile, and I think the best to date.",
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
          src: "/images/designing-datapay/02-office-harbour.png",
          alt: "Two colleagues at their desks in an office with a harbour view",
          caption:
            "Payroll Professionals work under intense, deadline‑driven pressure. Our JTBD work highlighted consistent stress points during pay periods and clarified where our product should actively guide users and reduce cognitive load.",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
        {
          src: "/images/designing-datapay/03-team-video-call.png",
          alt: "A grid of colleagues on a video call",
          caption:
            "Conversations with internal teams informed our understanding of what Datapay already does well — and where payroll professionals still struggle to feel confident and in control.",
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
        "**As Design & Research Lead,** I own how Datapay approaches AI delegation, from framework through to customer validation. Key partnerships along the way: managed services payroll consultants, an AI engineer on feasibility, account managers on the customer relationship, and our GM of Customer Success on reach.",
      ],
    },
    {
      type: "text",
      navLabel: "The Situation",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        "There was no shared language for what AI should and shouldn't take on across the product. Conversations about AI tended to default to \"more automation is better,\" without checking that against what payroll consultants or customers actually wanted.",
        "There was a strong foundation to build from. Validated Jobs-to-be-Done research I'd led previously was still shaping product decisions, so this wasn't starting from nothing. What was missing was a way to talk about delegation that didn't default to \"AI does everything.\"",
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
      // Still a FarmIQ stand-in — Sarah's own note on this slot in Figma:
      // "TBD — wide image/video after Calls I Made (may not apply to this
      // case study — no equivalent asset in the handover MD)".
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
          aspect: "1010/266",
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
          heading: "Built the framework before anything else",
          body: "Given an open brief, it would have been easy to jump straight to a feature. Instead, I adapted Stanford's HAS/SALT scale into D1–D5, a delegation framework for our payroll environment, and presented it to leadership before proposing what to build. That gave us a shared vocabulary for what \"delegate to AI\" actually means, rather than a single vague ambition.",
        },
        {
          heading: "Let the consultants choose the job, not leadership",
          body: "Using D1–D5 language, I asked managed services team leads and consultants what they'd want to delegate first. The answer was unanimous: getting customer data into Datapay correctly. Data comes in inconsistent, sometimes non-compliant, with missing fields and the wrong terminology, and it creates a constant back-and-forth between consultant and customer. I designed for that problem instead of the one leadership assumed was the priority.",
        },
        {
          heading: "Designed for variable oversight, not one fixed level of automation",
          body: "The solution wasn't AI replacing the consultant's judgement at a single, uniform level. Consultants told us delegation comfort depended on the task and the person, so the design let autonomy sit anywhere from D2 to D5 rather than forcing one setting across the board. That decision came directly from what consultants said they needed to keep control of, not from what was technically possible.",
        },
        {
          heading: "Started gathering customer evidence before anyone asked",
          body: "Whilst the prototype was in validation, I independently began surveying customers on how they felt about AI in payroll. Nobody assigned this. I wanted to understand sentiment before we committed further, because I suspected the \"customers want full automation\" assumption hadn't been tested.",
        },
      ],
    },
    {
      type: "textImage",
      navLabel: "The Solution",
      background: "solid",
      heading: "The Solution",
      paragraphs: [
        "The real problem wasn't just consultants receiving bad data. It was three separate failure points: data arriving incomplete, incorrect, or non-compliant from the customer, that data then needing to be mapped into the right place, and someone needing to confirm it was correct before it went further. Treating that as one step would have missed where the actual friction was.",
        "I designed a two-sided flow. On the customer side, I built a payroll admin view where the customer uploads and checks their own information before it reaches the consultant, shifting a small amount of effort back to where the data originates and cutting the back-and-forth between admin and consultant. Once the customer is happy and releases it, the consultant picks it up. For changes they're confident in, AI makes the update and the consultant reviews it. For anything else, they handle it manually.",
        "This is where D1–D5 did real work. Consultants weren't comfortable at a single autonomy level across the board. Most sat around D3, but it varied by task, some were happy to let AI run at D5, others wanted to stay at D2, and it also varied by person, since individual attitudes to AI differ and aren't fixed. That variability was one of the strongest insights to come out of validation: delegation isn't a single dial, it has to be set per task.",
        "I built this as an HTML prototype and validated it with payroll consultants across three rounds, refining the flow each time based on what they flagged. I worked with a lead AI engineer to confirm it was technically feasible before taking it further. The business case was straightforward: faster processing time for consultants, and space for them to focus on higher-value work customers would actually pay for.",
        "[Placeholder] Visuals: prototype is not yet shipped and contains confidential product detail. Plan is an abstracted, de-branded version of the flow (interaction pattern only, no real UI or data) rather than real screens, pending a check with Sarah's manager before publishing anything external.",
        "The prototype was paused before build due to a resourcing and leadership shift, not because the concept failed. It's ready to pick back up when prioritised.",
      ],
      // Real asset from Figma (2026-09-16) — a validation-call screenshot of
      // Sarah, not the "flow diagram" placeholder this slot used to describe.
      // 300×300 square in Figma, so imageMaxWidth/aspect match that exactly
      // rather than the farmiq-thrive portrait slot this schema field defaults to.
      imageMaxWidth: 300,
      image: {
        src: "/images/designing-datapay/06-solution-validation-call.png",
        alt: "Sarah Roberts on a video call during a validation session",
        caption:
          "Enjoying the deep validation work with SMEs, spending hours asking “why” to refine roles, job boundaries, and dependencies — uncovering critical insights that shaped the market canvas.",
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
          src: "/images/farmiq-thrive/08-recording-ht-offline.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/farmiq-thrive/09-on-farm-research.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/farmiq-thrive/10-in-paddock-research.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
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
          src: "/images/farmiq-thrive/11-field-decisions.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "600/400",
        },
        {
          src: "/images/farmiq-thrive/12-tasks-highest-adopted-feature.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "text",
      navLabel: "The Shift",
      heading: "The Shift",
      paragraphs: [
        "**Before:** No shared language for what AI should and shouldn't take on. An unvalidated assumption from leadership that customers wanted full automation. AI conversations happening without customer or consultant input.",
        "**After:** D1–D5 is embedded in our PRDs and used to define how we measure success on AI work. It's been validated with customers three times since. The customer survey I ran independently, combined with a CAB session, surfaced that customers do not want a fully agentic future, and that evidence changed the internal conversation about direction. Account managers, their manager, and the GM of Customer Success now bring customer conversations to me directly.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        {
          src: "/images/farmiq-thrive/13-data-stickiness.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
          aspect: "600/400",
        },
        {
          src: "/images/farmiq-thrive/14-user-preference.jpg",
          alt: "TEMP (FarmIQ stand-in) — image band",
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
        { direction: "up", text: "D1–D5 adopted as shared language across product, embedded in PRDs and success measurement, not just a design artefact" },
        { direction: "up", text: "Consultants unanimously identified the delegation priority themselves, rather than it being assigned top-down" },
        { direction: "up", text: "Cross-team pull: account managers, their manager, and the GM of Customer Success now route customer conversations through me" },
        { direction: "up", text: "Presenting this research externally at the NZ Payroll Association this week, the first time this work has gone beyond Datapay" },
      ],
    },
    {
      type: "quoteSlider",
      slides: [
        {
          image: {
            src: "/images/farmiq-thrive/15-quote-corey-caseley.jpg",
            alt: "TEMP (FarmIQ stand-in) — quote photo",
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
            src: "/images/farmiq-thrive/16-quote-chris-hursthouse.jpg",
            alt: "TEMP (FarmIQ stand-in) — quote photo",
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
          body: "Given an open brief, the temptation is to show up with a solution. Building the language first meant leadership and consultants were arguing about the same thing when we got to the harder conversations.",
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
