import type { CaseStudy } from "../../lib/case-study";

// "The App Keeping Kiwis Safe Outdoors" — Plan My Walk / Mountain Safety
// Council. Scaffolded 2026-09-06 from Figma frame 245:233155
// ("Case Study - keeping-kiwis-safe", file aX33B4dvgRAkY1eo6olJj6). Copy is
// transcribed verbatim from that frame's text nodes (Figma is the source of
// truth for this one — no handover MD). **Assets are not done yet**: every
// image below is a placeholder (no `src`, so CaseStudyImage/Cover render a
// labelled grey box). Wire real files under /images/keeping-kiwis-safe/
// once exported, and revisit the image-band layouts + quote-slider
// accentColors then. Structure mirrors farmiq-thrive.ts / design-leadership.ts.
//
// Figma TBD slots left unfilled on purpose (don't invent filler):
//   - The Calls I Made: a 5th slot ("MD only supplies 4 real items")
//   - The Outcome: two extra "down" signal slots (no down-signal data)
export const keepingKiwisSafe: CaseStudy = {
  slug: "keeping-kiwis-safe",
  title: "The App Keeping Kiwis Safe \nOutdoors",
  authorName: "Sarah Roberts",
  backHref: "/",
  cover: {
    // Dark mountain photo — light title + nav for contrast.
    invertText: true,
    background: {
      src: "/images/keeping-kiwis-safe/cover-bg.jpg",
      alt: "Tramper on a boardwalk track heading toward snow-covered mountains",
      aspect: "16/9",
    },
    deviceImage: {
      src: "/images/keeping-kiwis-safe/cover-float.png",
      alt: "Plan My Walk app — the Tongariro Alpine Crossing track screen",
      aspect: "1800/1014",
    },
  },
  sections: [
    {
      type: "intro",
      logo: {
        src: "/images/home/logos/msc-company-logo.svg",
        alt: "Mountain Safety Council",
        aspect: "100/72",
      },
      logoLarge: true,
      company: "Mountain Safety Council",
      role: "Solo Senior UX/UI Designer (Somar Digital)",
      dateRange: "May 2021",
      stats: [
        {
          label: "Users at launch",
          value: "200,000+",
          context: "50% above target, with 4m 45s average engagement.",
        },
        {
          label: "Design recognition",
          value: "Finalist",
          context: "Best Design Awards 2022, Value of Design category.",
        },
      ],
      paragraphs: [
        "Creating an app for the Mountain Safety Council (MSC) that enables people to enjoy the outdoors and promotes safety messaging. Plan My Walk helps people plan and prepare for their NZ outdoor adventure.",
        "MSC had an existing safety tool on their website, but it was outdated and cumbersome. Through user research, focus groups, and a heuristic evaluation, we identified exactly where it was failing people, then rebuilt it as a purpose-built app. As solo Designer at Somar Digital, I facilitated a 5-day Design Sprint with MSC’s key stakeholders and led the full UX/UI design, working closely with MSC’s in-house designer to meet WCAG government accessibility standards throughout.",
      ],
      quote: {
        quote:
          "I’m a relatively risk-averse tramper, I always let someone know where I’m going, and often overpack ‘just in case.’ Plan My Walk simplified all of that. On the app, I could write down all my plans and the app emailed this to my chosen emergency contact person. My husband had all the info he needed in case I didn’t contact him at our designated time. Such a good feature!",
        attribution: "Alice · Alice Adventuring",
      },
    },
    {
      // Figma "Top images" (245:233189) — full-bleed band after the intro
      // (same as the other case studies' first band). Left is a square
      // (helicopter), right is a shorter landscape shot that vertically
      // centres against it (see `sm:items-center` on two-equal in ImageBand).
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/top-rescue.jpg",
          alt: "A rescue helicopter winching a person off a bush-clad ridge",
          caption: "Check the weather for the time of the trip you’re planning.",
          captionTone: "light",
          aspect: "1/1",
        },
        {
          src: "/images/keeping-kiwis-safe/top-laptop.jpg",
          alt: "A woman and a boy looking at the Plan My Walk website on a laptop",
          caption: "An easy way to find tracks you’re comfortable with.",
          captionTone: "light",
          aspect: "736/490",
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
        "As Senior UX/UI Designer at Somar Digital, I was the sole designer from Somar Digital on this project, owning research through to final design. Facilitated the Design Sprint with MSC’s key stakeholders and worked closely with MSC’s in-house designer throughout, particularly on accessibility compliance.",
      ],
    },
    {
      type: "text",
      navLabel: "The Situation",
      background: "dots",
      heading: "The Situation I Walked Into",
      paragraphs: [
        "MSC had an existing safety tool on their website, but it felt outdated and misaligned with how people actually plan a trip outdoors. The messaging mattered, staying safe in the New Zealand backcountry is serious, but the tool wasn’t doing its job.",
      ],
    },
    {
      // Figma "Frame 28" (306:353485) — the Situation supporting images are
      // still FarmIQ placeholders in Figma with "TBD" captions, so this band
      // stays a placeholder here too (per Sarah: don't drop FarmIQ art in).
      // Two stacked full-width assets in the design; modelled as one wide
      // two-up for now.
      type: "imageBand",
      spacingBefore: "tight",
      wide: true,
      background: "dots",
      layout: "two-equal",
      images: [
        {
          alt: "The old MSC website safety tool",
          aspect: "600/400",
        },
        {
          alt: "Plan My Walk app replacing the web tool",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "numberedList",
      navLabel: "The Calls I Made",
      heading: "The Calls I Made",
      columns: 2,
      // Figma has a 5th (TBD) slot — left out until there's real content.
      items: [
        {
          heading: "Combined multiple research methods before sprinting",
          body: "Rather than relying on one source, I gathered feedback from existing users, ran focus group discussions with the target audience, and conducted a heuristic evaluation of the existing tool. This gave the sprint a solid evidence base to work from.",
        },
        {
          heading: "Ran a 5-day Design Sprint with MSC’s key stakeholders",
          body: "Using Google’s five-phase Design Sprint methodology, map the research, sketch, decide and storyboard, prototype, and test, we moved from research findings to a tested prototype in one week, reducing the risk of building the wrong thing.",
        },
        {
          heading: "Structured the app around 5 clear destinations",
          body: "Track, Alerts, Weather, Gear, and Plan, accessed through bottom navigation. A standard pattern for apps, and the clearest way to organise a genuinely complex safety tool into something simple to use before heading outdoors.",
        },
        {
          heading: "Designed the decisions, MSC’s in-house designer signed off",
          body: "I made the design calls across the MSC brand, from structure through to detail, with MSC’s in-house designer reviewing and signing off throughout. That balance meant the work moved at pace while staying accountable to how MSC’s brand needed to show up.",
        },
      ],
    },
    {
      // Figma "Case-Study Assets" (245:233187), same slot Thrive uses for
      // its walkthrough video (there's a Video.png in the Plan My Walk
      // asset folder) — swap to a YouTube embed (`youtubeId`) if that's
      // the intent, otherwise a single wide still.
      type: "imageBand",
      layout: "single",
      images: [
        {
          src: "/images/keeping-kiwis-safe/video-still.png",
          alt: "Plan My Walk “Want to be inspired?” promo — trampers walking a valley track toward snowy mountains",
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
        "Plan My Walk gives users a comprehensive database of walking and tramping tracks across New Zealand, so they can plan their adventure with confidence, not guesswork. It’s organised around five clear destinations, accessed through bottom navigation: Track, Alerts, Weather, Gear, and Plan.",
        "**Track** — Search New Zealand’s tramping database by location, difficulty, duration, and distance to find the right walk. Each track carries a difficulty rating from the community itself, whether it felt as expected, harder, or easier than described, so people know what they’re walking into before they commit.",
        "**Alerts** — Track-specific alerts flag closures, hazards, and avalanche warnings, the kind of information that changes a plan, surfaced before people set out, not after.",
        "**Weather** — Track-specific forecasts and warnings, provided in partnership with MetService, New Zealand’s official public weather forecaster, so people can check conditions for the exact place they’re headed, not just the general region.",
        "**Gear** — An interactive gear list tailored to each trip, so packing matches the actual conditions and duration.",
        "**Plan** — A trip planner that ties it together: add the people joining, set an emergency contact, upload trip notes. If someone hasn’t returned by their planned date, their emergency contact is prompted to call Search & Rescue, turning a simple trip plan into a real safety mechanism, not just a checklist.",
        "Once the plan is complete, share it and go, peace of mind that if something goes wrong, help is already on the way. Free to use, and made by trampers, for trampers.",
      ],
      image: {
        // TODO(Sarah): the square "Where are you going Tess?" track-search
        // screen composited over the uphill-tramper photo (Figma 306:353592)
        // — point me at that file.
        alt: "Plan My Walk app — track search screen over a tramper heading uphill",
        aspect: "1/1",
      },
    },
    {
      // Figma "Image grid" (245:233199) row 1 — three portrait shots.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "three-grid",
      images: [
        {
          // TODO(Sarah): row-1 left — the create-account / track-list screens
          // over the "people looking at mountains" photo. Which file?
          alt: "Track search and community difficulty ratings in the app",
          caption: "Search for a track that works for your comfort zone.",
          captionTone: "light",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-alerts.png",
          alt: "Plan My Walk Alerts and Weather screens for the Tongariro Alpine Crossing",
          caption: "DOC track & MetService weather alerts in one place.",
          captionTone: "dark",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-weather-map.png",
          alt: "A tramper checking a track weather forecast on their phone over a topo map",
          caption: "Check the weather for the time of the trip you’re planning.",
          captionTone: "light",
          aspect: "400/600",
          aspectMobile: "1/1",
        },
      ],
    },
    {
      // Figma "Image grid" (245:233199) row 2 — one full-width band.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/grid-gear.png",
          alt: "A tramper ticking off a suggested gear list on their phone, gear laid out below",
          caption: "Tick off the gear as you prepare for your trip.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-plan.png",
          alt: "Plan My Walk trip-plan and emergency-contact screens",
          caption: "Share your plan with your emergency contact.",
          captionTone: "dark",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "text",
      navLabel: "The Shift",
      heading: "The Shift",
      paragraphs: [
        "Before, MSC’s safety messaging lived in a cumbersome web tool people weren’t using. After, it’s a dedicated app that exceeded its own launch target by 50%, and has since grown into New Zealand’s go-to tramping planning tool, with over 1 million users.",
      ],
    },
    {
      // Figma "The Shift" band (245:233164) is still FarmIQ placeholder art
      // — left as a placeholder here (per Sarah: no FarmIQ images).
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      images: [
        {
          alt: "The retired MSC web safety tool",
          aspect: "600/400",
        },
        {
          alt: "Plan My Walk usage climbing after launch",
          aspect: "600/400",
        },
      ],
    },
    {
      type: "outcome",
      heading: "The Outcome",
      stats: [
        {
          value: "200,000+",
          label: "users at launch",
          context: "50% above target, with an average engagement time of 4 minutes 45 seconds.",
        },
        {
          value: "Finalist",
          label: "Best Design Awards 2022",
          context: "Value of Design category.",
        },
      ],
      signalsIntro: "Since then, the numbers have kept climbing, well beyond my own time on the project:",
      // Figma has two extra "down" signal slots marked TBD (no down-signal
      // data for this case study) — omitted rather than invented.
      signals: [
        { direction: "up", text: "1 million+ users — New Zealand’s go-to tramping planning tool" },
        { direction: "up", text: "83,000+ downloads on Google Play alone" },
        { direction: "up", text: "5-star App Store rating" },
      ],
    },
    {
      type: "quoteSlider",
      // accentColors are placeholders — hand-pick each from its final photo
      // (see design-decision-workflow) once the quote images are exported.
      slides: [
        {
          image: {
            src: "/images/keeping-kiwis-safe/quote-laptop.png",
            alt: "A woman and a boy looking at a track page on the Plan My Walk website",
            aspect: "834/440",
          },
          quote:
            "Great place to start when planning a tramp or walk. It’s easy to create a trip plan and then share it with a safety contact so you don’t need to email them all the info. Gear list is another useful function, as is the custom track feature.",
          attribution: "Plan My Walk user · App Store review",
          side: "right",
          accentColor: "#3B5B3A",
        },
        {
          image: {
            alt: "Hiker on a New Zealand track",
            aspect: "834/440",
          },
          quote:
            "I love this app! It has made finding new tracks, gear lists and planning a trip safely so easy. Highly recommend to anyone considering a hike short or long in NZ.",
          attribution: "Plan My Walk user · App Store review",
          side: "left",
          accentColor: "#2E5A6B",
        },
        {
          image: {
            alt: "Alice Adventuring on a backcountry trip",
            aspect: "834/440",
          },
          quote:
            "I’m a relatively risk-averse tramper, I always let someone know where I’m going, and often overpack ‘just in case.’ On Plan My Walk, I write down all my plans and the app emailed this to my chosen emergency contact person. My husband had all the info he needed in case I didn’t contact him at our designated time.",
          attribution: "Alice Adventuring · Content Creator",
          side: "right",
          accentColor: "#6B4A2F",
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
          heading: "A tight sprint forces real decisions, not endless options",
          body: "Having MSC’s SMEs and Somar’s delivery team aligned in one room for 5 days meant every decision had the full picture behind it. No waiting on someone else’s calendar, no decisions made on partial information.",
        },
        {
          heading: "The best safety feature is invisible until you need it",
          body: "The emergency contact alert isn’t flashy, most users will never trigger it, but it’s the single feature that turns a planning app into a real safety net. Some of the most important design decisions aren’t the ones people notice.",
        },
        {
          heading: "Designing a product for people like myself made the stakes real, not abstract",
          body: "As a tramper, a missed detail wasn’t a hypothetical UX flaw, it was a genuine risk to someone heading into the backcountry. That changed how carefully I treated every decision.",
        },
      ],
    },
    { type: "backToTop" },
  ],
};
