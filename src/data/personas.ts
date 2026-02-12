export interface PersonaResource {
  title: string;
  description: string;
  url: string;
}

export interface PersonaSection {
  label: string;
  type: "grid" | "single";
  items: PersonaResource[];
}

export interface Persona {
  slug: string;
  name: string;
  description: string;
  sections: PersonaSection[];
}

export const personas: Persona[] = [
  {
    slug: "developer",
    name: "The Developer",
    description: "You see the world through systems and structures. When others talk about problems, you reach for a terminal. Your instinct is to build — not for applause, but because open infrastructure is the foundation of freedom. The tools you create become the ground others walk on.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Bitcoin Script Specialists", description: "Deep dive into Bitcoin's scripting language and smart contract capabilities.", url: "https://libreriadesatoshi.com/" },
          { title: "Chaincode Labs Seminars", description: "Structured curriculum for aspiring Bitcoin and Lightning protocol developers.", url: "https://chaincode.com/seminars/" },
          { title: "B4OS Developer Training", description: "Hands-on developer training for Bitcoin protocol development.", url: "https://www.base58.school/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Chaincode Labs – Technical Blog", description: "In-depth technical blog posts on Bitcoin protocol development.", url: "https://chaincode.com/" },
          { title: "Lightning Labs – Engineering Docs", description: "Comprehensive engineering documentation for Lightning Network development.", url: "https://docs.lightning.engineering/" },
          { title: "Bitcoin Optech – Newsletter", description: "Weekly technical newsletter covering Bitcoin software developments.", url: "https://bitcoinops.org/" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Rene Pickhardt – Lightning Network", description: "Technical deep dives into Lightning Network architecture and research.", url: "https://www.youtube.com/user/renepickhardt" },
          { title: "Chaincode Labs – Seminar Recordings", description: "Recorded seminars on Bitcoin and Lightning protocol development.", url: "https://chaincode.com/seminars/" },
          { title: "Andreas Antonopoulos – Mastering Bitcoin", description: "Technical talks on Bitcoin's inner workings and protocol design.", url: "https://www.youtube.com/@aantonop" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Mastering Bitcoin", description: "Andreas Antonopoulos's comprehensive technical guide to Bitcoin.", url: "https://github.com/bitcoinbook/bitcoinbook" },
          { title: "Mastering the Lightning Network", description: "Antonopoulos, Osuntokun & Pickhardt on Lightning protocol internals.", url: "https://github.com/lnbook/lnbook" },
          { title: "Programming Bitcoin", description: "Jimmy Song's hands-on guide to learning Bitcoin by coding it.", url: "https://programmingbitcoin.com/" },
        ],
      },
    ],
  },
  {
    slug: "designer",
    name: "The Designer",
    description: "You believe freedom tech fails when people cannot use it. You see interfaces as invitations and clarity as a form of respect. Your work bridges the gap between powerful tools and the people who need them most. Making the complex feel simple is your quiet act of resistance.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Bitcoin Design Community Guide", description: "Comprehensive guide to designing Bitcoin products and experiences.", url: "https://bitcoin.design/guide/" },
          { title: "Bitcoin Design – UX Case Studies", description: "Real-world UX case studies from the Bitcoin Design Community.", url: "https://www.youtube.com/@BitcoinDesign" },
          { title: "Cash App – Product Design Patterns", description: "Study product design patterns from a leading Bitcoin-enabled app.", url: "https://cash.app/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Bitcoin Design – Wallet UX Patterns", description: "Design patterns and best practices for Bitcoin wallet interfaces.", url: "https://bitcoin.design/guide/designing-products/wallets/" },
          { title: "Dan Held – Product Framing Essays", description: "Essays on how to frame and position Bitcoin products.", url: "https://www.danheld.com/blog" },
          { title: "Bitcoin Design – Daily Spending Wallet", description: "Design guide for building everyday Bitcoin spending wallets.", url: "https://bitcoin.design/guide/daily-spending-wallet/" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Jack Mallers – Strike Product", description: "Product vision and design thinking behind the Strike app.", url: "https://www.youtube.com/@Strike" },
          { title: "Bitcoin Design Community", description: "Talks and workshops on designing for Bitcoin and freedom tech.", url: "https://www.youtube.com/@BitcoinDesign" },
          { title: "Christoph Ono – Bitcoin UX Talks", description: "Insights on improving user experience in Bitcoin applications.", url: "https://bitcoin.design/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Designing Interfaces", description: "Jenifer Tidwell's practical patterns for effective interface design.", url: "https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051954/" },
          { title: "Don't Make Me Think", description: "Steve Krug's seminal work on web usability and intuitive design.", url: "https://sensible.com/dont-make-me-think/" },
          { title: "The Design of Everyday Things", description: "Don Norman's exploration of human-centred design principles.", url: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things" },
        ],
      },
    ],
  },
  {
    slug: "community-organiser",
    name: "The Community Organiser",
    description: "You know that technology alone changes nothing. People change things. Your gift is bringing the right people together, creating spaces where knowledge flows and trust builds. You are the connective tissue that turns tools into movements.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Bitcoin and Lightning Payments for Business", description: "Learn how to integrate Bitcoin and Lightning payments into your community.", url: "https://libreriadesatoshi.com/" },
          { title: "Nostr: What, How, Why?", description: "Understanding the decentralised social protocol for community building.", url: "https://libreriadesatoshi.com/" },
          { title: "PlanB Network – Onboarding Materials", description: "Ready-made materials for onboarding newcomers to Bitcoin.", url: "https://planb.network/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Bitcoin Beach – Community Adoption Story", description: "How a small community in El Salvador pioneered Bitcoin adoption.", url: "https://bitcoinbeach.com/" },
          { title: "PlanB Network – Meetup Guides", description: "Practical guides for organising Bitcoin meetups and events.", url: "https://planb.network/" },
          { title: "Bitcoin Magazine – Local Meetup Case Studies", description: "Stories and lessons from Bitcoin meetup organisers worldwide.", url: "https://bitcoinmagazine.com/" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Bitcoin Beach – Dare to Dream", description: "Documentary on grassroots Bitcoin adoption in El Salvador.", url: "https://daretodream-film.com/" },
          { title: "Jack Dorsey – Open Source and Bitcoin", description: "On the intersection of open-source development and Bitcoin.", url: "https://bitcoinmagazine.com/culture/the-jack-dorsey-bitcoin-interview" },
          { title: "Oslo Freedom Forum – Community Panels", description: "Panel discussions on building freedom tech communities.", url: "https://oslofreedomforum.com/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Art of Community", description: "Jono Bacon's guide to nurturing open-source communities.", url: "https://www.jonobacon.com/" },
          { title: "Broken Money", description: "Lyn Alden on the history and future of monetary systems.", url: "https://www.lynalden.com/broken-money/" },
          { title: "The Internet of Money", description: "Andreas Antonopoulos on why Bitcoin matters beyond technology.", url: "https://theinternetofmoney.info/" },
        ],
      },
    ],
  },
  {
    slug: "policy-advocate",
    name: "The Policy Advocate",
    description: "You operate in the space between technology and governance. You understand that code has consequences and that laws shape who gets to run it. Your work ensures that the rights encoded in software are reflected in the systems that govern our lives.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Bitcoin Core Principles", description: "Foundational course on Bitcoin's technical and philosophical principles.", url: "https://libreriadesatoshi.com/" },
          { title: "Coin Center – Policy Resources", description: "Educational resources on cryptocurrency policy and regulation.", url: "https://www.coincenter.org/education/" },
          { title: "Bitcoin Policy Institute", description: "Research and education on Bitcoin's role in public policy.", url: "https://www.btcpolicy.org/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Coin Center – Policy Analysis", description: "In-depth analysis of cryptocurrency regulation and digital rights.", url: "https://www.coincenter.org/" },
          { title: "Human Rights Foundation – Policy Briefs", description: "Policy briefs on financial freedom and human rights.", url: "https://hrf.org/programs/financial-freedom/" },
          { title: "Bitcoin Policy Institute – Research", description: "Academic research on Bitcoin regulation and policy frameworks.", url: "https://www.btcpolicy.org/research" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Oslo Freedom Forum – Financial Freedom", description: "Talks on financial freedom, policy, and human rights.", url: "https://oslofreedomforum.com/" },
          { title: "Nic Carter – Regulatory Analysis", description: "Analysis of Bitcoin's regulatory landscape and policy implications.", url: "https://niccarter.info/" },
          { title: "Human Rights Foundation – Bitcoin Panels", description: "Panel discussions on Bitcoin, policy, and human rights.", url: "https://www.youtube.com/@HumanRightsFoundation" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Code of Capital", description: "Katharina Pistor on how law creates wealth and inequality.", url: "https://www.goodreads.com/book/show/44030131-the-code-of-capital" },
          { title: "Broken Money", description: "Lyn Alden on the history and future of monetary systems.", url: "https://www.lynalden.com/broken-money/" },
          { title: "Digital Cash", description: "Finn Brunton on the history of electronic money and cryptography.", url: "https://www.goodreads.com/book/show/40715636-digital-cash" },
        ],
      },
    ],
  },
  {
    slug: "educator",
    name: "The Educator",
    description: "You turn complexity into clarity. Where others see jargon, you see an opportunity to build understanding. You know that knowledge is the first step on any path, and you have the patience to walk alongside someone as they take it.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Bitcoin Core Principles", description: "Foundational course on Bitcoin's technical and philosophical principles.", url: "https://libreriadesatoshi.com/" },
          { title: "Saylor Academy – Bitcoin Course", description: "Free, comprehensive Bitcoin course suitable for all levels.", url: "https://learn.saylor.org/course/view.php?id=468" },
          { title: "Crack the Orange", description: "Interactive Bitcoin education programme for curious minds.", url: "https://www.cracktheorange.com/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Lyn Alden – Bitcoin Macro Essays", description: "Macroeconomic analysis of Bitcoin's role in the global financial system.", url: "https://www.lynalden.com/bitcoin/" },
          { title: "Mi Primer Bitcoin – Curriculum", description: "Open-source Bitcoin education curriculum used worldwide.", url: "https://miprimerbitcoin.io/" },
          { title: "River – Bitcoin Education Library", description: "Comprehensive library of Bitcoin educational resources.", url: "https://river.com/learn/" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Andreas Antonopoulos – Bitcoin Q&A", description: "Accessible answers to common Bitcoin questions for all audiences.", url: "https://www.youtube.com/@aantonop" },
          { title: "Saifedean Ammous – Bitcoin Economics", description: "Lectures and discussions on the economics of Bitcoin.", url: "https://saifedean.com/podcast" },
          { title: "Bitcoin Beach – Dare to Dream", description: "Documentary on grassroots Bitcoin adoption in El Salvador.", url: "https://daretodream-film.com/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Internet of Money", description: "Andreas Antonopoulos on why Bitcoin matters beyond technology.", url: "https://theinternetofmoney.info/" },
          { title: "The Bitcoin Standard", description: "Saifedean Ammous's economic history and argument for Bitcoin.", url: "https://saifedean.com/thebitcoinstandard/" },
          { title: "Broken Money", description: "Lyn Alden on the history and future of monetary systems.", url: "https://www.lynalden.com/broken-money/" },
        ],
      },
    ],
  },
  {
    slug: "human-rights-worker",
    name: "The Human Rights Worker",
    description: "You see technology as a shield, not a sword. For you, encryption is not abstract — it protects journalists, activists, and dissidents. You work at the intersection of technology and human dignity, where the stakes are not theoretical but lived.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Self Custody: Reclaim Your Bitcoin Sovereignty", description: "Learn to take full control of your Bitcoin with self-custody.", url: "https://libreriadesatoshi.com/" },
          { title: "Cashu para Principiantes", description: "Introduction to Cashu ecash for private, accessible payments.", url: "https://libreriadesatoshi.com/" },
          { title: "HRF – Bitcoin Development Fund", description: "Supporting open-source Bitcoin development for human rights.", url: "https://hrf.org/devfund/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "HRF – Financial Freedom Case Studies", description: "Real-world case studies of Bitcoin enabling financial freedom.", url: "https://hrf.org/programs/financial-freedom/" },
          { title: "Bitcoin Beach – Impact Stories", description: "Stories of Bitcoin's impact on communities in El Salvador.", url: "https://bitcoinbeach.com/" },
          { title: "HRF – Bitcoin Dev Fund 5-Year Report", description: "Five years of funding open-source Bitcoin development for freedom.", url: "https://hrf.org/latest/bitcoin-development-fund-5-year-report/" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Bitcoin Beach – Dare to Dream", description: "Documentary on grassroots Bitcoin adoption in El Salvador.", url: "https://daretodream-film.com/" },
          { title: "Farida Nabourema – Bitcoin and Activism", description: "How Bitcoin empowers activists fighting authoritarian regimes.", url: "https://nabourema.info/" },
          { title: "Oslo Freedom Forum – Financial Freedom", description: "Talks on financial freedom, policy, and human rights.", url: "https://oslofreedomforum.com/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Digital Cash", description: "Finn Brunton on the history of electronic money and cryptography.", url: "https://www.goodreads.com/book/show/40715636-digital-cash" },
          { title: "Broken Money", description: "Lyn Alden on the history and future of monetary systems.", url: "https://www.lynalden.com/broken-money/" },
          { title: "The Internet of Money", description: "Andreas Antonopoulos on why Bitcoin matters beyond technology.", url: "https://theinternetofmoney.info/" },
        ],
      },
    ],
  },
  {
    slug: "beginner",
    name: "The Beginner",
    description: "Every path starts with a first step. You are curious about freedom tech but not yet sure where you fit. That uncertainty is not weakness — it is honesty. The best pilgrims are the ones who begin without knowing the destination.",
    sections: [
      {
        label: "Courses",
        type: "grid",
        items: [
          { title: "Get and Use Bitcoin", description: "Hands-on workshop to get started with Bitcoin in minutes.", url: "https://libreriadesatoshi.com/" },
          { title: "Bitcoin Technical Foundations", description: "Build a solid technical understanding of how Bitcoin works.", url: "https://libreriadesatoshi.com/" },
          { title: "Mi Primer Bitcoin – Bitcoin Diploma", description: "Comprehensive Bitcoin education programme for all levels.", url: "https://miprimerbitcoin.io/" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "River – Beginner Guides", description: "Clear, accessible guides to understanding Bitcoin basics.", url: "https://river.com/learn/" },
          { title: "Lyn Alden – Macro Explainer", description: "Bitcoin explained through the lens of macroeconomics.", url: "https://www.lynalden.com/bitcoin/" },
          { title: "Mastering Bitcoin Ch. 1–2", description: "The first two chapters of the definitive Bitcoin technical guide.", url: "https://github.com/bitcoinbook/bitcoinbook" },
        ],
      },
      {
        label: "Videos",
        type: "grid",
        items: [
          { title: "Andreas Antonopoulos – Intro to Bitcoin", description: "One of the best introductions to Bitcoin and why it matters.", url: "https://www.youtube.com/watch?v=l1si5ZWLgy0" },
          { title: "Bitcoin Beach – Dare to Dream", description: "Documentary on grassroots Bitcoin adoption in El Salvador.", url: "https://daretodream-film.com/" },
          { title: "Lyn Alden – Broken Money Talk", description: "Talk on the history of money and why Bitcoin is different.", url: "https://onrampbitcoin.com/research/broken-money-with-lyn-alden-the-technological-arc-of-money-and-power" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Inventing Bitcoin", description: "Yan Pritzker's step-by-step explanation of how Bitcoin works.", url: "https://www.inventingbitcoin.com/" },
          { title: "Broken Money", description: "Lyn Alden on the history and future of monetary systems.", url: "https://www.lynalden.com/broken-money/" },
          { title: "The Internet of Money", description: "Andreas Antonopoulos on why Bitcoin matters beyond technology.", url: "https://theinternetofmoney.info/" },
        ],
      },
    ],
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}
