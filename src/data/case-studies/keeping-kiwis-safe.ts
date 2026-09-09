import type { CaseStudy } from "../../lib/case-study";

// "The App Keeping Kiwis Safe Outdoors" — Plan My Walk / Mountain Safety
// Council. Scaffolded 2026-09-06 from Figma frame 245:233155
// ("Case Study - keeping-kiwis-safe", file aX33B4dvgRAkY1eo6olJj6). Copy is
// transcribed verbatim from that frame's text nodes (Figma is the source of
// truth for this one — no handover MD). Structure mirrors farmiq-thrive.ts /
// design-leadership.ts.
//
// Assets (2026-09-09): all image slots wired. Eight are Sarah's own hi-res
// composite exports from ~/Documents/New Website/Plan My Walk/; four had no
// finished local export (Situation "sprint map", the two hand-holding-phone
// grid shots, and the Shift snowy-mountains shot) and were taken from the
// Figma frame exports — swap to hi-res if Sarah supplies them.
//
// Figma TBD slots left unfilled on purpose (don't invent filler):
//   - The Calls I Made: a 5th slot ("MD only supplies 4 real items")
//   - The Outcome: two extra "down" signal slots (no down-signal data)
//   - Image grid rows 1 & 2 share placeholder captions in Figma — verbatim
//     for now, Sarah to finalise the copy.
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
      // Hero-PMW.png — three phones: the Tongariro Northern Circuit topo map,
      // the Alpine Crossing track screen, and a Cass-Lagoon weather forecast.
      src: "/images/keeping-kiwis-safe/cover-float.png",
      alt: "Plan My Walk app — a track map, a track detail screen, and a weather forecast",
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
          // "Best." roundel beside the Finalist value (Sarah's pre-cropped
          // "Best Awards copy.png" — circle only, text cropped out).
          badge: {
            src: "/images/keeping-kiwis-safe/best-awards-badge.png",
            alt: "Best Design Awards Finalist",
            aspect: "1/1",
          },
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
          caption:
            "6,000 incidents. 540 search and rescues. Every year, and rising. Plan My Walk was built to bring that number down.",
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
      // Figma "Frame 28" (306:353485), top row — old MSC "Plan My Trip" web
      // tool vs. the Design Sprint map, full-bleed two-up.
      type: "imageBand",
      spacingBefore: "tight",
      wide: true,
      background: "dots",
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/situation-old-tool.jpg",
          alt: "MSC's old Plan My Trip web tool — a form of activity tiles over a mountain photo",
          caption:
            "Plan My Trip: fill out a form, download a PDF. Not how people actually plan an adventure.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/situation-sprint-map.jpg",
          alt: "A topo map with track markers and a Cass Saddle Hut detail card",
          caption:
            "In the Design Sprint with the experts in the room we co-designed the solution.",
          captionTone: "light",
          aspect: "600/400",
        },
      ],
    },
    {
      // Figma "Frame 28" (306:353485), lower row — the 5-phase Design Sprint
      // diagram (Understand / Sketch / Decide / Prototype / Test) on a topo
      // map ground. Kept at the export's native ~3.04 ratio so no phase card
      // clips. Caption sits on the light map, so dark text, no scrim.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "dots",
      layout: "single",
      images: [
        {
          src: "/images/keeping-kiwis-safe/situation-design-sprint.jpg",
          alt: "Design Sprint phases: Understand, Sketch, Decide, Prototype, Test",
          caption: "Design Sprint",
          captionTone: "dark",
          aspect: "2400/790",
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
      // its walkthrough video. Renders the YouTube thumbnail with a play
      // button; click opens the watch page in a new window (same as
      // farmiq-thrive.ts — this video also has embedding disabled).
      type: "imageBand",
      layout: "single",
      images: [
        {
          youtubeId: "k4YzJ4wNcVM",
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
      // Figma 306:353591 — 339px square asset, 71px gap to the copy column.
      imageMaxWidth: 339,
      copyImageGap: 71,
      image: {
        // Sarah's own photo (trampingbush.jpg). The Figma fill shows the full
        // 3:2 frame height with a horizontal window (~18%–85% of width); that
        // crop is baked into the 678² export, so object-cover has nothing left
        // to trim.
        src: "/images/keeping-kiwis-safe/solution-tramping-bush.jpg",
        alt: "Two trampers with packs walking a bush track in New Zealand",
        aspect: "1/1",
      },
    },
    {
      // Figma image grid (322:354690) — full-bleed two-up, 6:4 each.
      // NOTE: rows 1 & 2 carry the same two captions in Figma ("Search for
      // a track…" / "On all tracks…") — placeholder copy Sarah still has to
      // work through; transcribed verbatim for now, revisit before launch.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/grid-track-search.jpg",
          alt: "Three phone screens: track search, the Tongariro Alpine Crossing, and a date picker",
          caption: "Search for a track that works for your comfort zone.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-web-reviews.jpg",
          alt: "The Plan My Walk web track page for the Tongariro Northern Circuit, with community reviews",
          caption: "On all tracks you can see other’s reviews.",
          captionTone: "light",
          aspect: "600/400",
        },
      ],
    },
    {
      // Figma image grid (330:357558) — row 2.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/grid-alerts-weather.jpg",
          alt: "Three phone screens: the Alpine Crossing, MSC alerts, and a track weather forecast",
          caption: "Search for a track that works for your comfort zone.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-hand-phone-map.jpg",
          alt: "A tramper checking a track weather forecast on their phone over a paper map",
          caption: "On all tracks you can see other’s reviews.",
          captionTone: "light",
          aspect: "600/400",
        },
      ],
    },
    {
      // Figma image grid (322:354741) — row 3.
      type: "imageBand",
      spacingBefore: "tighter",
      wide: true,
      background: "solid",
      layout: "two-equal",
      images: [
        {
          src: "/images/keeping-kiwis-safe/grid-hand-phone-gear.jpg",
          alt: "A tramper checking a suggested gear list on their phone, gear laid out on the ground",
          caption: "Tick off the gear as you prepare for your trip.",
          captionTone: "light",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/grid-trip-plan.jpg",
          alt: "Three phone screens: the gear list, trip-plan builder, and shared-plan confirmation",
          caption: "Share your plan with your emergency contact.",
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
        "Before, MSC’s safety messaging lived in a cumbersome web tool people weren’t using. After, it’s a dedicated app that exceeded its own launch target by 50%, and has since grown into New Zealand’s go-to tramping planning tool, with over 1 million users.",
      ],
    },
    {
      // Figma "The Shift" band (328:356326) — content-column two-up (not
      // full-bleed), no overlay captions; the italic line below is Figma's
      // standalone note (316:354311).
      type: "imageBand",
      spacingBefore: "tight",
      layout: "two-equal",
      note: "Every shoulder season, MSC promotes Plan My Walk with local tracks, still keeping Kiwis safe outdoors.",
      images: [
        {
          src: "/images/keeping-kiwis-safe/shift-advert.jpg",
          alt: "The Plan My Walk home screen on a phone over a tussock ridge, a tramper with arms raised behind it",
          aspect: "600/400",
        },
        {
          src: "/images/keeping-kiwis-safe/shift-mountains.jpg",
          alt: "A hooded tramper on a boardwalk track heading toward mist-covered snowy mountains",
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
      // Figma "Quotes" (307:353620). accentColors hand-picked from a named
      // feature in each photo (see design-decision-workflow): 1 = sunlit
      // bush green, 2 = the deep alpine lake, 3 = the tramper's red pack.
      slides: [
        {
          image: {
            src: "/images/keeping-kiwis-safe/quote-laptop.jpg",
            alt: "A woman and a boy at a kitchen bench looking at a track page on the Plan My Walk website",
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
            src: "/images/keeping-kiwis-safe/quote-vista.jpg",
            alt: "Three trampers looking out over a broad river valley and alpine lake from a mountain saddle",
            aspect: "834/440",
          },
          quote:
            "I love this app! It has made finding new tracks, gear lists and planning a trip safely so easy. Highly recommend to anyone considering a hike short or long in NZ.",
          attribution: "Plan My Walk user · App Store review",
          side: "left",
          accentColor: "#123F44",
        },
        {
          image: {
            src: "/images/keeping-kiwis-safe/quote-forest.jpg",
            alt: "A tramper with a red-covered pack pausing on a moss-lined beech forest track",
            aspect: "834/440",
          },
          quote:
            "I’m a relatively risk-averse tramper, I always let someone know where I’m going, and often overpack ‘just in case.’ On Plan My Walk, I write down all my plans and the app emailed this to my chosen emergency contact person. My husband had all the info he needed in case I didn’t contact him at our designated time.",
          attribution: "Alice Adventuring · Content Creator",
          side: "right",
          accentColor: "#B23A26",
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
