// Central translation dictionary for Khma. Plain module (no "use server"/"use client")
// so it can be imported by client components, server components and the Server Action.

export type Lang = "en" | "ka";

const en = {
  nav: {
    features: "Features",
    how: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    signIn: "Sign in",
    requestAccess: "Request access",
  },
  hero: {
    eyebrow: "Now onboarding the first venues in Tbilisi & Batumi",
    h1: "Hear every guest. See every pattern.",
    lead: "Khma reads your reviews from Google, Booking.com, TripAdvisor and 2GIS — in Georgian, English and Russian — and turns 1,000+ comments a month into the three things worth fixing this week.",
    ctaPrimary: "Request early access",
    ctaSecondary: "See a sample dashboard",
    note: "Free during the pilot · No integration work · Set up in an afternoon",
    dashAria:
      "Sample Khma dashboard for a hotel in Tbilisi showing sentiment trends, top feedback themes and a live review stream.",
  },
  dash: {
    prop: "Old Tiflis Rooms · Tbilisi",
    pill1: "Last 90 days",
    pill2: "All sources",
    sample: "Sample data",
    kpis: [
      { label: "Reviews read", value: "1,284", delta: "▲ 18% vs prev.", dir: "up" },
      { label: "Avg. sentiment", value: "4.3/5", delta: "▲ 0.2", dir: "up" },
      { label: "Response rate", value: "71%", delta: "▲ 9%", dir: "up" },
      { label: "NPS", value: "52", delta: "▲ 6", dir: "up" },
    ],
    sentimentTitle: "Sentiment over time",
    sentimentSub: "weekly",
    weeksAgo: "12 wks ago",
    thisWeek: "This week",
    themesTitle: "Top themes",
    themesSub: "auto-detected",
    themes: [
      { name: "Staff friendliness", pct: 91, trend: "↑ 6", neg: false },
      { name: "Breakfast quality", pct: 86, trend: "↑ 9", neg: false },
      { name: "Room cleanliness", pct: 82, trend: "↑ 3", neg: false },
      { name: "Noise at night", pct: 52, trend: "↓ 4", neg: true },
      { name: "Wi-Fi reliability", pct: 44, trend: "↓ 7", neg: true },
      { name: "Check-in speed", pct: 38, trend: "↓ 12", neg: true },
    ],
    feedbackTitle: "Live feedback",
    feedbackSub: "4 new today",
    reviews: [
      {
        src: "Google",
        srcClass: "google",
        stars: "★★★★★",
        starsAria: "5 out of 5",
        time: "2h ago",
        text: "“The room was spotless and the staff were so warm.”",
        orig: "— ოთახი იყო სუფთა და პერსონალი ძალიან თბილი.",
        tags: [
          { label: "Cleanliness +", kind: "pos" },
          { label: "Staff +", kind: "pos" },
        ],
      },
      {
        src: "Booking.com",
        srcClass: "booking",
        stars: "★★★☆☆",
        starsAria: "3 out of 5",
        time: "5h ago",
        text: "“Check-in took 40 minutes — the evening queue was long.”",
        orig: "",
        tags: [{ label: "Check-in speed −", kind: "neg" }],
      },
      {
        src: "2GIS",
        srcClass: "twogis",
        stars: "★★★★☆",
        starsAria: "4 out of 5",
        time: "Yesterday",
        text: "“The khinkali was delicious, but the wine list is a little pricey.”",
        orig: "— ხინკალი გემრიელი იყო, ღვინო ცოტა ძვირია.",
        tags: [
          { label: "Food +", kind: "pos" },
          { label: "Price −", kind: "neg" },
        ],
      },
    ],
  },
  context: {
    text: "Khma reads the places your guests already leave reviews:",
    qr: "In-stay QR",
  },
  features: {
    kicker: "What Khma does",
    heading: "Everything your guests tell you, in one place.",
    connected: "connected",
    c1Title: "One inbox for every source",
    c1Body:
      "Connect your public links once. Khma pulls the full history and every new review after — no copy-pasting, no spreadsheets, no logins to juggle.",
    c2Title: "Built for three languages",
    c2Body:
      "Most tools choke on Georgian. Khma reads ქართული, English and русский natively — even when one review mixes all three.",
    c3Title: "Themes, not star averages",
    c3Body:
      "A 4.3 average hides the story. Khma clusters thousands of comments into named themes — “check-in speed”, “breakfast”, “noise” — and tracks each one week over week.",
    c4Title: "A weekly to-do, ranked",
    c4Body:
      "Open the dashboard Monday and see the top three fixes, ordered by how many guests they’d affect.",
    c5Title: "Spot it before the 1-star",
    c5Body:
      "When negative mentions of a theme spike, Khma pings you by email or Slack — usually days before the rating drops.",
    c6Title: "All your venues, side by side",
    c6Body:
      "Compare Batumi against Tbilisi, summer against winter, this branch against that one — on one screen.",
    c7Title: "Reply in the guest’s own words",
    c7Body:
      "Khma drafts a reply in the same language the review was written in. You read it, tweak it, and hit send — nothing is posted without you.",
    c8Title: "Reports your GM will read",
    c8Body:
      "A clean weekly summary lands in your inbox — what moved, what slipped, what to do — short enough to read before the morning shift.",
  },
  how: {
    kicker: "How it works",
    heading: "Three steps from reviews to decisions.",
    steps: [
      {
        num: "Step 1",
        h3: "Add your venue",
        p: "Paste your Google, Booking.com, TripAdvisor and 2GIS links. That’s the whole setup — no developers, no plugins, no point-of-sale integration.",
      },
      {
        num: "Step 2",
        h3: "Khma reads everything",
        p: "It pulls the full review history, groups comments into themes, and scores sentiment in Georgian, English and Russian — usually within a day.",
      },
      {
        num: "Step 3",
        h3: "Act on the weekly list",
        p: "Each Monday you get the three highest-impact fixes. Assign them, ship them, and watch the trend line move the next week.",
      },
    ],
  },
  deep: {
    kicker: "Inside the dashboard",
    heading: "From 1,284 comments to three decisions.",
    features: [
      {
        h4: "Automatic theme detection",
        p: "“Check-in”, “breakfast”, “noise”, “value” surface on their own — nobody tags reviews by hand.",
      },
      {
        h4: "Trends that prove the fix worked",
        p: "See whether last month’s change actually moved sentiment, instead of guessing.",
      },
      {
        h4: "Branch & season filters",
        p: "Slice by venue, room type, or time of year — Batumi in August reads very differently from Tbilisi in February.",
      },
      {
        h4: "Alerts when a theme spikes",
        p: "A ping the moment negative mentions climb — not a surprise at the end of the month.",
      },
    ],
    alertsLabel: "This week at your venues",
    alerts: [
      {
        kind: "warn",
        badge: "!",
        strong: "Check-in speed is slipping",
        p: "14 new mentions at Old Tiflis Rooms · Tbilisi this week, clustered between 18:00 and 21:00.",
      },
      {
        kind: "good",
        badge: "↑",
        strong: "Breakfast sentiment up 12%",
        p: "Your new menu is landing well in Batumi — guests mention the khachapuri by name.",
      },
      {
        kind: "warn",
        badge: "!",
        strong: "Wi-Fi complaints returning",
        p: "7 mentions in 4 days, mostly on the upper floors. Same pattern as last March.",
      },
    ],
  },
  industries: {
    kicker: "Who it’s for",
    heading: "Made for Georgian hospitality.",
    items: [
      {
        ico: "🏨",
        h3: "Hotels & guesthouses",
        p: "Learn which floor, shift or season your reviews are really about — and fix the right one.",
      },
      {
        ico: "🍽",
        h3: "Restaurants",
        p: "Separate the food from the service from the wait — by dish and by hour of the day.",
      },
      {
        ico: "🍷",
        h3: "Wine bars & cafés",
        p: "Catch the quiet complaints from your regulars before they simply stop coming back.",
      },
      {
        ico: "🧭",
        h3: "Tour operators",
        p: "Tie feedback back to specific guides, routes and pickups — not just an overall score.",
      },
    ],
  },
  pricing: {
    kicker: "Pricing",
    heading: "Simple plans, in lari.",
    monthly: "Monthly",
    annual: "Annual",
    save: "2 months free",
    per: "/mo",
    note: "Prices in GEL, excl. VAT. Free for every venue during the pilot — the first partners onboard at no cost.",
    tiers: [
      {
        name: "Starter",
        badge: "",
        price: "₾90",
        priceAnnual: "₾75",
        custom: false,
        desc: "One venue finding its feet with reviews.",
        features: [
          "1 venue",
          "Up to 500 reviews / month",
          "3 review sources",
          "Weekly email digest",
          "Georgian · English · Russian",
        ],
        cta: "Start free pilot",
        featured: false,
      },
      {
        name: "Growth",
        badge: "Most chosen",
        price: "₾240",
        priceAnnual: "₾200",
        custom: false,
        desc: "Multi-venue teams that act on feedback weekly.",
        features: [
          "Up to 5 venues",
          "Up to 3,000 reviews / month",
          "All review sources",
          "AI themes + spike alerts",
          "Reply drafts in 3 languages",
          "Slack & email alerts",
        ],
        cta: "Start free pilot",
        featured: true,
      },
      {
        name: "Group",
        badge: "",
        price: "Custom",
        priceAnnual: "Custom",
        custom: true,
        desc: "Hotel groups and chains across cities.",
        features: [
          "Unlimited venues",
          "Branch & region roles",
          "API & data export",
          "Dedicated onboarding",
          "Priority support",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "Questions, answered plainly.",
    items: [
      {
        q: "Which review sources can Khma read?",
        a: "Google, Booking.com, TripAdvisor and 2GIS today, with Facebook and in-stay QR feedback next. You add your venue’s public links and Khma pulls the full history.",
      },
      {
        q: "Does it actually understand Georgian?",
        a: "Yes. Khma reads Georgian, English and Russian natively — including reviews that mix languages or write Georgian in Latin letters.",
      },
      {
        q: "Do I need to install or integrate anything?",
        a: "No. There’s nothing to plug into your booking system or POS. You add your public links and the dashboard fills in, usually within a day.",
      },
      {
        q: "How is this different from just reading my Google reviews?",
        a: "Reading 30 reviews is easy. Reading 1,200 across four sites every month, in three languages, and noticing that “check-in” complaints jumped 40% this week — that’s the part Khma does for you.",
      },
      {
        q: "Where is my data stored?",
        a: "On EU-based infrastructure. Khma never posts or replies on your behalf — a draft only goes out when you click send.",
      },
      {
        q: "When can my venue start?",
        a: "We’re onboarding the first venues in Tbilisi and Batumi now. Join the list and we’ll reach out as your city opens.",
      },
    ],
  },
  waitlist: {
    h2: "Be one of the first venues on Khma.",
    p: "We’re onboarding hotels, restaurants and guesthouses in Tbilisi and Batumi first. Free during the pilot — you help shape the product, we help you read every guest.",
    perks: [
      "Free for the length of your pilot",
      "Onboarding help, in Georgian or English",
      "A direct line to the people building it",
    ],
  },
  form: {
    venueName: "Venue name",
    venueNamePh: "e.g. Old Town Guesthouse",
    email: "Work email",
    emailPh: "you@yourvenue.ge",
    city: "City",
    selectPh: "Select…",
    venueType: "Venue type",
    monthlyReviews: "Reviews per month (optional)",
    mrOptions: [
      { value: "", label: "Not sure" },
      { value: "0-100", label: "Under 100" },
      { value: "100-500", label: "100–500" },
      { value: "500-2000", label: "500–2,000" },
      { value: "2000+", label: "Over 2,000" },
    ],
    submit: "Request early access",
    pending: "Adding you…",
    fineprint: "Free during the pilot. No card required. We email only about your onboarding.",
    fineprintDemo: "Design preview — submissions aren’t saved.",
    successTitle: "You’re on the list",
    demoSuccess: "Thanks, {name}. This is a design preview, so {email} isn’t stored — run the app locally to save real signups.",
    msgNameRequired: "Tell us the venue’s name.",
    msgEmailInvalid: "That email address looks incomplete.",
    msgCityRequired: "Pick the city you operate in.",
    msgTypeRequired: "Pick the kind of venue you run.",
    msgGenericError: "A couple of fields need a second look.",
    msgDbError:
      "We couldn’t reach the database. Make sure Postgres is running (npm run db:up), then try again.",
    msgSuccess: "You’re on the list, {name}. We’ll email {email} when your city opens.",
  },
  footer: {
    brandP:
      "AI feedback analytics for hospitality. Hear every guest, in any language. Made in Tbilisi.",
    productH: "Product",
    companyH: "Company",
    legalH: "Legal",
    lFeatures: "Features",
    lDashboard: "Dashboard",
    lPricing: "Pricing",
    lHow: "How it works",
    lEarly: "Early access",
    lFaq: "FAQ",
    lContact: "Contact",
    lPrivacy: "Privacy",
    lTerms: "Terms",
    lSecurity: "Data & security",
    copyright: "© 2026 Khma · Tbilisi, Georgia",
    made: "Hear every guest. See every pattern.",
  },
};

export type Dict = typeof en;

const ka: Dict = {
  nav: {
    features: "ფუნქციები",
    how: "როგორ მუშაობს",
    pricing: "ფასები",
    faq: "კითხვები",
    signIn: "შესვლა",
    requestAccess: "წვდომის მოთხოვნა",
  },
  hero: {
    eyebrow: "ვიწყებთ პირველ ობიექტებს თბილისსა და ბათუმში",
    h1: "მოისმინე ყველა სტუმარი. დაინახე ყველა ტენდენცია.",
    lead: "Khma კითხულობს თქვენს შეფასებებს Google-ზე, Booking.com-ზე, TripAdvisor-სა და 2GIS-ზე — ქართულად, ინგლისურად და რუსულად — და თვეში 1,000+ კომენტარს აქცევს იმ სამ რამედ, რაც ამ კვირას ღირს გამოსასწორებლად.",
    ctaPrimary: "მოითხოვე ადრეული წვდომა",
    ctaSecondary: "ნახე სადემო პანელი",
    note: "უფასო საპილოტე პერიოდში · ინტეგრაცია არ სჭირდება · გაშვება ერთ დღეში",
    dashAria:
      "Khma-ს სადემო პანელი თბილისის სასტუმროსთვის — განწყობის ტენდენციები, მთავარი თემები და ცოცხალი შეფასებები.",
  },
  dash: {
    prop: "Old Tiflis Rooms · თბილისი",
    pill1: "ბოლო 90 დღე",
    pill2: "ყველა წყარო",
    sample: "სადემო მონაცემები",
    kpis: [
      { label: "წაკითხული შეფასებები", value: "1,284", delta: "▲ 18% წინა პერიოდთან", dir: "up" },
      { label: "საშ. განწყობა", value: "4.3/5", delta: "▲ 0.2", dir: "up" },
      { label: "პასუხის მაჩვენებელი", value: "71%", delta: "▲ 9%", dir: "up" },
      { label: "NPS", value: "52", delta: "▲ 6", dir: "up" },
    ],
    sentimentTitle: "განწყობა დროში",
    sentimentSub: "ყოველკვირეული",
    weeksAgo: "12 კვ. წინ",
    thisWeek: "ამ კვირას",
    themesTitle: "მთავარი თემები",
    themesSub: "ავტომატურად ამოცნობილი",
    themes: [
      { name: "პერსონალის მეგობრულობა", pct: 91, trend: "↑ 6", neg: false },
      { name: "საუზმის ხარისხი", pct: 86, trend: "↑ 9", neg: false },
      { name: "ოთახის სისუფთავე", pct: 82, trend: "↑ 3", neg: false },
      { name: "ხმაური ღამით", pct: 52, trend: "↓ 4", neg: true },
      { name: "Wi-Fi სტაბილურობა", pct: 44, trend: "↓ 7", neg: true },
      { name: "ჩექ-ინის სიჩქარე", pct: 38, trend: "↓ 12", neg: true },
    ],
    feedbackTitle: "ცოცხალი შეფასებები",
    feedbackSub: "4 ახალი დღეს",
    reviews: [
      {
        src: "Google",
        srcClass: "google",
        stars: "★★★★★",
        starsAria: "5 / 5",
        time: "2 სთ წინ",
        text: "„ოთახი იყო სუფთა და პერსონალი ძალიან თბილი.“",
        orig: "— The room was spotless and the staff were so warm.",
        tags: [
          { label: "სისუფთავე +", kind: "pos" },
          { label: "პერსონალი +", kind: "pos" },
        ],
      },
      {
        src: "Booking.com",
        srcClass: "booking",
        stars: "★★★☆☆",
        starsAria: "3 / 5",
        time: "5 სთ წინ",
        text: "„ჩექ-ინს 40 წუთი დასჭირდა — საღამოს რიგი გრძელი იყო.“",
        orig: "",
        tags: [{ label: "ჩექ-ინის სიჩქარე −", kind: "neg" }],
      },
      {
        src: "2GIS",
        srcClass: "twogis",
        stars: "★★★★☆",
        starsAria: "4 / 5",
        time: "გუშინ",
        text: "„ხინკალი გემრიელი იყო, ღვინო ცოტა ძვირია.“",
        orig: "— The khinkali was delicious, but the wine list is a little pricey.",
        tags: [
          { label: "კერძი +", kind: "pos" },
          { label: "ფასი −", kind: "neg" },
        ],
      },
    ],
  },
  context: {
    text: "Khma კითხულობს იქ, სადაც სტუმრები უკვე ტოვებენ შეფასებებს:",
    qr: "QR ადგილზე",
  },
  features: {
    kicker: "რას აკეთებს Khma",
    heading: "ყველაფერი, რასაც სტუმრები გეუბნებიან — ერთ ადგილას.",
    connected: "დაკავშირებული",
    c1Title: "ერთი სივრცე ყველა წყაროსთვის",
    c1Body:
      "დააკავშირე საჯარო ბმულები ერთხელ. Khma ჩამოტვირთავს სრულ ისტორიას და ყველა ახალ შეფასებას — კოპირების, ცხრილებისა და უამრავი პაროლის გარეშე.",
    c2Title: "შექმნილია სამი ენისთვის",
    c2Body:
      "ბევრი ხელსაწყო ვერ უმკლავდება ქართულს. Khma ბუნებრივად კითხულობს ქართულს, English-სა და русский-ს — მაშინაც კი, როცა ერთი შეფასება სამივეს ურევს.",
    c3Title: "თემები და არა ვარსკვლავების საშუალო",
    c3Body:
      "4.3 საშუალო მალავს მთავარს. Khma აჯგუფებს ათასობით კომენტარს დასახელებულ თემებად — „ჩექ-ინის სიჩქარე“, „საუზმე“, „ხმაური“ — და თვალს ადევნებს თითოეულს კვირიდან კვირამდე.",
    c4Title: "ყოველკვირეული გეგმა, პრიორიტეტებით",
    c4Body:
      "ორშაბათს გახსენი პანელი და ნახე სამი მთავარი გამოსასწორებელი, დალაგებული იმის მიხედვით, რამდენ სტუმარს შეეხება.",
    c5Title: "შენიშნე 1-ვარსკვლავამდე",
    c5Body:
      "როცა რომელიმე თემაზე უარყოფითი ხსენებები მკვეთრად იზრდება, Khma გაცნობებს ელფოსტით ან Slack-ით — როგორც წესი, რეიტინგის ვარდნამდე რამდენიმე დღით ადრე.",
    c6Title: "ყველა ობიექტი ერთად",
    c6Body:
      "შეადარე ბათუმი თბილისს, ზაფხული ზამთარს, ერთი ფილიალი მეორეს — ერთ ეკრანზე.",
    c7Title: "უპასუხე სტუმრის ენაზე",
    c7Body:
      "Khma ამზადებს პასუხის მონახაზს იმავე ენაზე, რომელზეც შეფასება დაიწერა. შენ კითხულობ, არედაქტირებ და აგზავნი — შენ გარეშე არაფერი ქვეყნდება.",
    c8Title: "ანგარიშები, რომელსაც მენეჯერი წაიკითხავს",
    c8Body:
      "სუფთა ყოველკვირეული შეჯამება მოვა შენს ელფოსტაზე — რა გაუმჯობესდა, რა გაუარესდა, რა გასაკეთებელია — საკმარისად მოკლე დილის ცვლამდე წასაკითხად.",
  },
  how: {
    kicker: "როგორ მუშაობს",
    heading: "სამი ნაბიჯი შეფასებიდან გადაწყვეტილებამდე.",
    steps: [
      {
        num: "ნაბიჯი 1",
        h3: "დაამატე შენი ობიექტი",
        p: "ჩასვი Google-ის, Booking.com-ის, TripAdvisor-ისა და 2GIS-ის ბმულები. ეს არის სრული გამართვა — დეველოპერების, დანამატებისა და სალარო სისტემის ინტეგრაციის გარეშე.",
      },
      {
        num: "ნაბიჯი 2",
        h3: "Khma ყველაფერს კითხულობს",
        p: "ის ჩამოტვირთავს შეფასებების სრულ ისტორიას, აჯგუფებს კომენტარებს თემებად და აფასებს განწყობას ქართულად, ინგლისურად და რუსულად — ჩვეულებრივ ერთ დღეში.",
      },
      {
        num: "ნაბიჯი 3",
        h3: "იმოქმედე ყოველკვირეული სიის მიხედვით",
        p: "ყოველ ორშაბათს მიიღებ სამ ყველაზე მნიშვნელოვან გამოსასწორებელს. დაავალე, შეასრულე და უყურე, როგორ იცვლება ტენდენცია მომდევნო კვირას.",
      },
    ],
  },
  deep: {
    kicker: "პანელის შიგნით",
    heading: "1,284 კომენტარიდან სამ გადაწყვეტილებამდე.",
    features: [
      {
        h4: "თემების ავტომატური ამოცნობა",
        p: "„ჩექ-ინი“, „საუზმე“, „ხმაური“, „ფასი“ თავისით ამოდის — შეფასებებს ხელით არავინ ნიშნავს.",
      },
      {
        h4: "ტენდენციები, რომლებიც ადასტურებს გამოსწორებას",
        p: "ნახე, ნამდვილად შეცვალა თუ არა გასული თვის ცვლილებამ განწყობა — ვარაუდის ნაცვლად.",
      },
      {
        h4: "ფილიალისა და სეზონის ფილტრები",
        p: "გაფილტრე ობიექტის, ოთახის ტიპის ან სეზონის მიხედვით — ბათუმი აგვისტოში სრულიად განსხვავდება თბილისისგან თებერვალში.",
      },
      {
        h4: "შეტყობინებები თემის მკვეთრი ზრდისას",
        p: "შეტყობინება მაშინვე, როცა უარყოფითი ხსენებები იზრდება — და არა მოულოდნელობა თვის ბოლოს.",
      },
    ],
    alertsLabel: "ამ კვირას შენს ობიექტებში",
    alerts: [
      {
        kind: "warn",
        badge: "!",
        strong: "ჩექ-ინის სიჩქარე ეცემა",
        p: "14 ახალი ხსენება Old Tiflis Rooms · თბილისში ამ კვირას, ძირითადად 18:00-სა და 21:00-ს შორის.",
      },
      {
        kind: "good",
        badge: "↑",
        strong: "საუზმის განწყობა +12%",
        p: "შენი ახალი მენიუ კარგად მიიღეს ბათუმში — სტუმრები ხაჭაპურს სახელით ახსენებენ.",
      },
      {
        kind: "warn",
        badge: "!",
        strong: "Wi-Fi-ის ჩივილები ბრუნდება",
        p: "7 ხსენება 4 დღეში, ძირითადად ზედა სართულებზე. იგივე ტენდენცია, რაც გასულ მარტს.",
      },
    ],
  },
  industries: {
    kicker: "ვისთვის არის",
    heading: "შექმნილია ქართული სტუმართმასპინძლობისთვის.",
    items: [
      {
        ico: "🏨",
        h3: "სასტუმროები და სასტუმრო სახლები",
        p: "გაიგე, რომელ სართულზე, ცვლასა თუ სეზონზეა ნამდვილად საუბარი შენს შეფასებებში — და გამოასწორე საჭირო.",
      },
      {
        ico: "🍽",
        h3: "რესტორნები",
        p: "გამიჯნე კერძი სერვისისგან და ლოდინისგან — კერძისა და დღის საათის მიხედვით.",
      },
      {
        ico: "🍷",
        h3: "ღვინის ბარები და კაფეები",
        p: "შენიშნე მუდმივი სტუმრების ჩუმი ჩივილები, სანამ უბრალოდ აღარ მოვლენ.",
      },
      {
        ico: "🧭",
        h3: "ტუროპერატორები",
        p: "დააკავშირე შეფასებები კონკრეტულ გიდებთან, მარშრუტებსა და გასვლებთან — და არა მხოლოდ საერთო ქულასთან.",
      },
    ],
  },
  pricing: {
    kicker: "ფასები",
    heading: "მარტივი გეგმები, ლარში.",
    monthly: "თვიური",
    annual: "წლიური",
    save: "2 თვე უფასოდ",
    per: "/თვე",
    note: "ფასები ლარში, დღგ-ს გარეშე. ყველა ობიექტისთვის უფასო პილოტის პერიოდში — პირველი პარტნიორები უფასოდ ერთვებიან.",
    tiers: [
      {
        name: "საწყისი",
        badge: "",
        price: "₾90",
        priceAnnual: "₾75",
        custom: false,
        desc: "ერთი ობიექტი, რომელიც იწყებს შეფასებებთან მუშაობას.",
        features: [
          "1 ობიექტი",
          "500-მდე შეფასება თვეში",
          "3 შეფასების წყარო",
          "ყოველკვირეული ელფოსტის შეჯამება",
          "ქართული · ინგლისური · რუსული",
        ],
        cta: "დაიწყე უფასო პილოტი",
        featured: false,
      },
      {
        name: "ზრდა",
        badge: "ყველაზე პოპულარული",
        price: "₾240",
        priceAnnual: "₾200",
        custom: false,
        desc: "მრავალობიექტიანი გუნდები, რომლებიც ყოველკვირეულად მოქმედებენ.",
        features: [
          "5-მდე ობიექტი",
          "3,000-მდე შეფასება თვეში",
          "ყველა შეფასების წყარო",
          "AI თემები + შეტყობინებები",
          "პასუხის მონახაზები 3 ენაზე",
          "Slack-ისა და ელფოსტის შეტყობინებები",
        ],
        cta: "დაიწყე უფასო პილოტი",
        featured: true,
      },
      {
        name: "ჯგუფი",
        badge: "",
        price: "ინდივიდუალური",
        priceAnnual: "ინდივიდუალური",
        custom: true,
        desc: "სასტუმროების ჯგუფები და ქსელები სხვადასხვა ქალაქში.",
        features: [
          "შეუზღუდავი ობიექტები",
          "ფილიალისა და რეგიონის როლები",
          "API და მონაცემთა ექსპორტი",
          "პერსონალური დანერგვა",
          "პრიორიტეტული მხარდაჭერა",
        ],
        cta: "დაგვიკავშირდი",
        featured: false,
      },
    ],
  },
  faq: {
    kicker: "ხშირი კითხვები",
    heading: "კითხვები, მარტივი პასუხებით.",
    items: [
      {
        q: "რომელ წყაროებს კითხულობს Khma?",
        a: "Google, Booking.com, TripAdvisor და 2GIS — ამჟამად, ხოლო Facebook და QR-შეფასებები მალე. შენ ამატებ ობიექტის საჯარო ბმულებს და Khma ჩამოტვირთავს სრულ ისტორიას.",
      },
      {
        q: "მართლა ესმის ქართული?",
        a: "დიახ. Khma ბუნებრივად კითხულობს ქართულს, ინგლისურსა და რუსულს — მათ შორის შეფასებებს, რომლებიც ენებს ურევენ ან ქართულს ლათინური ასოებით წერენ.",
      },
      {
        q: "სჭირდება დაყენება ან ინტეგრაცია?",
        a: "არა. არაფერია დასაკავშირებელი ჯავშნის სისტემასთან ან სალაროსთან. შენ ამატებ საჯარო ბმულებს და პანელი ივსება, ჩვეულებრივ ერთ დღეში.",
      },
      {
        q: "რით განსხვავდება ეს Google-ის შეფასებების უბრალოდ წაკითხვისგან?",
        a: "30 შეფასების წაკითხვა მარტივია. ყოველთვიურად 1,200 შეფასების წაკითხვა ოთხ საიტზე, სამ ენაზე, და იმის შემჩნევა, რომ „ჩექ-ინის“ ჩივილები ამ კვირას 40%-ით გაიზარდა — სწორედ ამას აკეთებს Khma შენთვის.",
      },
      {
        q: "სად ინახება ჩემი მონაცემები?",
        a: "ევროკავშირის ინფრასტრუქტურაზე. Khma არასოდეს აქვეყნებს ან პასუხობს შენ ნაცვლად — მონახაზი იგზავნება მხოლოდ მაშინ, როცა შენ დააჭერ გაგზავნას.",
      },
      {
        q: "როდის შეიძლება დავიწყო?",
        a: "ახლა ვიწყებთ პირველ ობიექტებს თბილისსა და ბათუმში. შემოგვიერთდი სიაში და დაგიკავშირდებით, როცა შენი ქალაქი გაიხსნება.",
      },
    ],
  },
  waitlist: {
    h2: "გახდი ერთ-ერთი პირველი ობიექტი Khma-ზე.",
    p: "ჯერ ვიწყებთ სასტუმროებს, რესტორნებსა და სასტუმრო სახლებს თბილისსა და ბათუმში. უფასო პილოტის პერიოდში — შენ გვეხმარები პროდუქტის ჩამოყალიბებაში, ჩვენ გეხმარებით ყველა სტუმრის მოსმენაში.",
    perks: [
      "უფასო შენი პილოტის მთელი პერიოდი",
      "დახმარება დანერგვისას — ქართულად ან ინგლისურად",
      "პირდაპირი კავშირი მის შემქმნელებთან",
    ],
  },
  form: {
    venueName: "ობიექტის სახელი",
    venueNamePh: "მაგ. Old Town Guesthouse",
    email: "სამსახურის ელფოსტა",
    emailPh: "you@yourvenue.ge",
    city: "ქალაქი",
    selectPh: "აირჩიე…",
    venueType: "ობიექტის ტიპი",
    monthlyReviews: "შეფასებები თვეში (არასავალდებულო)",
    mrOptions: [
      { value: "", label: "არ ვიცი" },
      { value: "0-100", label: "100-მდე" },
      { value: "100-500", label: "100–500" },
      { value: "500-2000", label: "500–2,000" },
      { value: "2000+", label: "2,000-ზე მეტი" },
    ],
    submit: "მოითხოვე ადრეული წვდომა",
    pending: "გემატებთ…",
    fineprint: "უფასო პილოტის პერიოდში. ბარათი არ სჭირდება. მოგწერთ მხოლოდ დანერგვის შესახებ.",
    fineprintDemo: "დიზაინის წინასწარი ნახვა — მონაცემები არ ინახება.",
    successTitle: "შენ სიაში ხარ",
    demoSuccess: "მადლობა, {name}. ეს დიზაინის წინასწარი ნახვაა, ამიტომ {email} არ ინახება — გაუშვი აპლიკაცია ლოკალურად რეალური რეგისტრაციებისთვის.",
    msgNameRequired: "მიუთითე ობიექტის სახელი.",
    msgEmailInvalid: "ელფოსტის მისამართი არასრული ჩანს.",
    msgCityRequired: "აირჩიე ქალაქი, სადაც მუშაობ.",
    msgTypeRequired: "აირჩიე ობიექტის ტიპი.",
    msgGenericError: "რამდენიმე ველი გადასამოწმებელია.",
    msgDbError:
      "ვერ დავუკავშირდით ბაზას. დარწმუნდი, რომ Postgres გაშვებულია (npm run db:up) და სცადე თავიდან.",
    msgSuccess: "შენ სიაში ხარ, {name}. მოგწერთ {email}-ზე, როცა შენი ქალაქი გაიხსნება.",
  },
  footer: {
    brandP:
      "AI ანალიტიკა სტუმართმასპინძლობის შეფასებებისთვის. მოისმინე ყველა სტუმარი, ნებისმიერ ენაზე. შექმნილია თბილისში.",
    productH: "პროდუქტი",
    companyH: "კომპანია",
    legalH: "სამართლებრივი",
    lFeatures: "ფუნქციები",
    lDashboard: "პანელი",
    lPricing: "ფასები",
    lHow: "როგორ მუშაობს",
    lEarly: "ადრეული წვდომა",
    lFaq: "კითხვები",
    lContact: "კონტაქტი",
    lPrivacy: "კონფიდენციალურობა",
    lTerms: "პირობები",
    lSecurity: "მონაცემები და უსაფრთხოება",
    copyright: "© 2026 Khma · თბილისი, საქართველო",
    made: "მოისმინე ყველა სტუმარი. დაინახე ყველა ტენდენცია.",
  },
};

export const dict: Record<Lang, Dict> = { en, ka };

// English values are canonical (stored in DB / validated server-side); labels localise display.
export const cityLabels: Record<string, Record<Lang, string>> = {
  Tbilisi: { en: "Tbilisi", ka: "თბილისი" },
  Batumi: { en: "Batumi", ka: "ბათუმი" },
  Kutaisi: { en: "Kutaisi", ka: "ქუთაისი" },
  Kazbegi: { en: "Kazbegi", ka: "ყაზბეგი" },
  Sighnaghi: { en: "Sighnaghi", ka: "სიღნაღი" },
  Telavi: { en: "Telavi", ka: "თელავი" },
  Bakuriani: { en: "Bakuriani", ka: "ბაკურიანი" },
  Other: { en: "Other", ka: "სხვა" },
};

export const businessTypeLabels: Record<string, Record<Lang, string>> = {
  Hotel: { en: "Hotel", ka: "სასტუმრო" },
  Guesthouse: { en: "Guesthouse", ka: "სასტუმრო სახლი" },
  Restaurant: { en: "Restaurant", ka: "რესტორანი" },
  Café: { en: "Café", ka: "კაფე" },
  "Wine bar": { en: "Wine bar", ka: "ღვინის ბარი" },
  "Tour operator": { en: "Tour operator", ka: "ტუროპერატორი" },
  Other: { en: "Other", ka: "სხვა" },
};

export function isLang(v: unknown): v is Lang {
  return v === "en" || v === "ka";
}
