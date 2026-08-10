import type { CaseStudy } from "../../lib/case-study";

// Content + structure verified against the Figma case study template
// (aX33B4dvgRAkY1eo6olJj6, node 40:51315 desktop / 78:38864 mobile) and
// cross-checked against farmiq-thrive-case-study-FINAL.md. Where Figma's
// typeset copy differs slightly from the handover MD (a few sentences are
// redistributed between the Intro and Situation blocks, "My Role" is a
// fuller sentence in Figma, the Outcome restates the two Intro stats as a
// value/label/context triplet), this file follows what's actually typeset
// in Figma, since that's the confirmed-final layout copy — see the build
// note back to Sarah for the specific lines worth a quick check.
export const farmiqThrive: CaseStudy = {
  // Renamed from "farmiq-thrive" to match the URL scheme used for the
  // other 3 go-live case studies (Sarah's call, 2026-08-10) — see the old
  // route's redirect stub at src/pages/case-studies/farmiq-thrive.astro.
  slug: "helping-farmers-thrive",
  title: "Helping Farmers Thrive: \nCreating Their Essential App",
  authorName: "Sarah Roberts",
  backHref: "/",
  cover: {
    background: {
      src: "/images/farmiq-thrive/01-hero-cover.jpg",
      alt: "Farmer and dog at a paddock gate, FarmIQ app screens overlaid",
      aspect: "16/9",
    },
    deviceImage: {
      src: "/images/farmiq-thrive/01-cover-top.png",
      alt: "FarmIQ mobile app screens: map view, treatment form, and field details",
      aspect: "1000/563",
    },
    deviceImageMobile: {
      src: "/images/farmiq-thrive/01-cover-top-mobile.png",
      alt: "FarmIQ mobile app screens: map view, treatment form, and field details",
      aspect: "1000/1000",
    },
  },
  sections: [
    {
      type: "intro",
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
          label: "App stickiness",
          value: "32%",
          context: "far surpassing the 20% SaaS benchmark for exceptional engagement.",
        },
        {
          label: "App stickiness",
          value: "17.5%",
          context: "year-on-year increase.",
        },
      ],
      paragraphs: [
        "FarmIQ's mobile app wasn't working for farmers in the field. It was slow, hard to use, and built around a desktop mental model that didn't survive a paddock. Farmers were going back to paper notes in the paddock and re-entering data late at night, often with gaps and inconsistencies.",
        "FarmIQ is a map-based farm management SaaS used by farmers to plan, record, and make decisions across their operations. Farming is high-pressure and hands-on: regulatory obligations, seasonal deadlines, dirty hands, patchy internet, and decisions made mid-paddock. The app needed to match that reality, and it didn't.",
        "I led the redesign of FarmIQ's mobile app and its sister web application, setting direction, building principles, and guiding a team of 3 through a sequence of releases that gave farmers their farm at their fingertips.",
        "App stickiness reached 32.4%, a 17.5% year-on-year increase, far surpassing the 20% SaaS benchmark for exceptional engagement. Mobile closed to within 4% of web. The app went from something farmers struggled with to something they relied on every day.",
      ],
      quote: {
        quote: "I’m using FarmIQ as I shift the stock through the gate and don’t have to worry about it when getting home.",
        attribution: "Chris Hursthouse · Haddington, Hawkes Bay · 220ha lambs and bull-beef",
      },
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      layout: "two-equal",
      images: [
        {
          src: "/images/farmiq-thrive/02-fast-decisions-field.jpg",
          alt: "Farmers making fast decisions in the field",
          caption: "Farmers making fast decisions in the field",
          captionTone: "light",
          aspect: "600/400",
          aspectMobile: "1/1",
        },
        {
          src: "/images/farmiq-thrive/03-recording-data-moment.jpg",
          alt: "Recording data in the moment, no catching up at night",
          caption: "Recording data in the moment, no catching up at night",
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
        "**Lead Product Designer, FarmIQ.** Led 2 Product Designers and a Graphic Designer. Partnered with PMs, Engineering Leads, Customer Success, and on-farm subject matter experts, from early roadmap planning through to staged releases.",
      ],
    },
    {
      type: "text",
      navLabel: "The Situation",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        "When I joined, the IQ app had one feature: a basic mob move record. The legacy Classic app, the one farmers relied on, was being retired. Everything farmers needed had to move to IQ.",
        "The challenge was two-sided. For farmers: the app needed to be simple and fast enough to use in the moment, recording in the paddock rather than catching up at night. For the business: it needed to drive adoption and retention whilst reducing the support burden that came with a fragmented, inconsistent experience.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      background: "dots",
      layout: "two-equal",
      images: [
        {
          src: "/images/farmiq-thrive/04-iq-app-before.jpg",
          alt: "IQ app when I joined: one feature",
          caption: "IQ app when I joined: one feature",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/farmiq-thrive/05-iq-app-after.jpg",
          alt: "IQ app when I left: 12 recordings, tasks, diary & notifications",
          caption: "IQ app when I left: 12 recordings, tasks, diary & notifications",
          captionTone: "light",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tighter",
      background: "dots",
      layout: "single",
      images: [
        {
          src: "/images/farmiq-thrive/06-retiring-app.jpg",
          srcMobile: "/images/farmiq-thrive/06-retiring-app-mobile.png",
          alt: "Retiring the classic app (far right)",
          caption: "Retiring the classic app (far right)",
          captionTone: "dark",
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
          heading: "Framed the problem at the ecosystem level",
          body: "We mapped on-farm tasks, off-farm obligations, and the data sources behind both. This surfaced the high-pressure moments (e.g. time-sensitive records, compliance checks) and clarified where one screen could replace three separate steps.",
        },
        {
          heading: "Established decision principles for farm-first products",
          body: 'We defined principles like "Time-to-confidence over clicks," "Local first, sync later," and "Show status and consequence together." These guided every design trade-off and anchored cross-functional decisions.',
        },
        {
          heading: "Prioritised a small set of essential workflows",
          body: "Instead of trying to do everything, we selected 3–5 workflows that farmers use constantly under pressure (e.g. quick record capture, in-field map updates, compliance summaries). We sequenced design and delivery by impact x feasibility.",
        },
        {
          heading: "Evolved patterns that reduce cognitive load",
          body: "We introduced a pattern set: context cards that surface the next best action, offline-first inputs with safe-sync and clear conflict resolution, map-centric summaries with immediate drill-down, and record once, reuse everywhere.",
        },
        {
          heading: "Embedded continuous validation",
          body: "I acted as the voice of our customers, making continuous validation a standard part of every project. We ran small, focused research touchpoints with farmers to confirm we were solving the right problems and used their feedback to guide iterations. This kept our work grounded in real on-farm behaviour.",
        },
      ],
    },
    {
      type: "imageBand",
      layout: "single",
      images: [
        {
          youtubeId: "5uiJEoB7vc8",
          alt: "Video of FarmIQ",
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
        "The essential app centres on a live, map-anchored home built around how farmers actually work: outdoors, on the move, often with no coverage. Two things are effortless: recording what just happened, and seeing what needs attention now.",
        "Farmers can tap directly on the map or stock list to access fast-path workflows with pre-filled context, location, mob, last state. They record offline and sync safely when coverage returns. The common path is obvious; edge cases are supported without cluttering the main flow.",
        "Over the project lifecycle, the app grew from one recording type to 11, plus full Tasks and Diary features and app notifications. Every release was grounded in field research.",
      ],
      image: {
        src: "/images/farmiq-thrive/07-checking-stock.jpg",
        alt: "Checking stock in the paddock",
        caption: "Checking stock in the paddock",
        captionTone: "light",
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
        {
          src: "/images/farmiq-thrive/08-recording-ht-offline.jpg",
          alt: "Recording health treatments offline",
          caption: "Recording health treatments offline",
          captionTone: "light",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/farmiq-thrive/09-on-farm-research.jpg",
          alt: "On farm exploratory research",
          caption: "On farm exploratory research",
          captionTone: "light",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/farmiq-thrive/10-in-paddock-research.jpg",
          alt: "In the paddock observing customers",
          caption: "In the paddock observing customers",
          captionTone: "light",
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
          alt: "Diary: farm-wide view for in-field decisions",
          caption: "Diary: farm-wide view for in-field decisions",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/farmiq-thrive/12-tasks-highest-adopted-feature.jpg",
          alt: "Tasks: highest adoption feature",
          caption: "Tasks: highest adoption feature",
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
        "The Classic app went from carrying the majority of mobile usage to 19%. IQ went to 39%, closing to within 4% of web.",
      ],
    },
    {
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        {
          src: "/images/farmiq-thrive/13-data-stickiness.jpg",
          alt: "Classic app usage screenshot",
          aspect: "600/400",
        },
        {
          src: "/images/farmiq-thrive/14-user-preference.jpg",
          alt: "IQ app usage screenshot",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "outcome",
      heading: "The Outcome",
      stats: [
        {
          value: "32%",
          label: "increase in App stickiness",
          context: "a 17.5% year-on-year increase, far surpassing the 20% SaaS benchmark for exceptional engagement.",
        },
        {
          value: "38%",
          label: "of customers now use IQ regularly",
          context: "just 4% below web, showing mobile has become a core tool for on-farm decision-making.",
        },
      ],
      signalsIntro: "With conservative measurement, we also saw strong behavioural signals:",
      signals: [
        { direction: "up", text: "Time-to-confidence for key workflows" },
        { direction: "down", text: 'Rework entries after introducing "record once, reuse everywhere"' },
        { direction: "down", text: "Support tickets on released features" },
        { direction: "up", text: "Task completion in low/no coverage areas" },
        { direction: "up", text: "Customer satisfaction on routine tasks" },
      ],
    },
    {
      type: "quoteSlider",
      slides: [
        {
          image: {
            src: "/images/farmiq-thrive/15-quote-corey-caseley.jpg",
            alt: "Corey Caseley on farm at Glendonald Station",
            aspect: "834/440",
          },
          quote: "The biggest thing it’s helped me with is just streamlining my day, so that I can use my cellphone doing animal health treatments on the job, as I’m doing it - nothing to do when I get home.",
          attribution: "Corey Caseley · Glendonald Station, Wairarapa · 1,000ha sheep",
          side: "left", // Corey (on the quad bike) sits on the right of the photo
          accentColor: "#2E6E45", // forest green, from the treeline behind him
        },
        {
          image: {
            src: "/images/farmiq-thrive/17-quote-alistair-bird.jpg",
            alt: "Alistair Bird on farm at The Grange",
            aspect: "834/440",
          },
          quote: "Trying to hit a target carcass weight, to have that data right there at your fingertips it’ll help us track those variations in farm practices that then have an effect on the bottom line.",
          attribution: "Alistair Bird · The Grange, North Canterbury · 565ha sheep and cattle",
          side: "right", // the sheep cluster leans centre-left; open mountainside on the right
          accentColor: "#96622F", // sunburnt brown, from the golden grass in the foreground
        },
        {
          image: {
            src: "/images/farmiq-thrive/16-quote-chris-hursthouse.jpg",
            alt: "Chris Hursthouse on farm at Haddington",
            aspect: "834/440",
          },
          quote: "I’m using FarmIQ as I shift the stock through the gate and don’t have to worry about it when getting home.",
          attribution: "Chris Hursthouse · Haddington, Hawkes Bay · 220ha lambs and bull-beef",
          side: "right", // Chris and the tractor are on the left of the photo
          accentColor: "#2E8155", // tractor green, brightened slightly to stay distinct from Corey's
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
          heading: "Clarity beats features",
          body: "Farmers need fewer decisions at the moment of action, not more options.",
        },
        {
          heading: "Offline-first must be trusted",
          body: "Clear sync states and predictable conflict resolution were what got farmers to actually record in the paddock rather than wait until they got home.",
        },
        {
          heading: "Principles prevent wasted time",
          body: "When trade-offs are explicit, teams deliver faster with fewer reworks.",
        },
      ],
    },
    { type: "backToTop" },
  ],
};
