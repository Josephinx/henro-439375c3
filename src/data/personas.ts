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
        label: "Videos",
        type: "grid",
        items: [
          { title: "How Bitcoin Works Under the Hood", description: "A deep technical walkthrough of Bitcoin's protocol design and cryptographic foundations.", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
          { title: "The Architecture of Nostr", description: "Understanding the relay-based protocol that enables censorship-resistant social networking.", url: "https://www.youtube.com/results?search_query=nostr+architecture" },
          { title: "Building with the Lightning Network", description: "Practical introduction to developing payment channels and Lightning applications.", url: "https://www.youtube.com/results?search_query=lightning+network+development" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "The Cathedral and the Bazaar", description: "Eric Raymond's foundational essay on open-source software development methodology.", url: "http://www.catb.org/~esr/writings/cathedral-bazaar/" },
          { title: "Why Software Is Eating the World", description: "Marc Andreessen's argument for software as critical infrastructure.", url: "https://a16z.com/why-software-is-eating-the-world/" },
          { title: "Self-Sovereign Identity", description: "Technical overview of decentralised identity systems and their implementation.", url: "https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Mastering Bitcoin", description: "Andreas Antonopoulos's comprehensive technical guide to Bitcoin.", url: "https://github.com/bitcoinbook/bitcoinbook" },
          { title: "The Cypherpunks", description: "The history of cryptography and the movement that shaped digital privacy.", url: "https://www.goodreads.com/book/show/22741975-this-machine-kills-secrets" },
          { title: "Hacking: The Art of Exploitation", description: "Deep dive into security, networking, and systems-level programming.", url: "https://nostarch.com/hacking2.htm" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Bitcoin Core", description: "The reference implementation of the Bitcoin protocol.", url: "https://bitcoincore.org/" },
          { title: "LND (Lightning Network Daemon)", description: "A complete implementation of a Lightning Network node.", url: "https://github.com/lightningnetwork/lnd" },
          { title: "Nostr Development Kit", description: "Libraries and tools for building on the Nostr protocol.", url: "https://github.com/nostr-dev-kit/ndk" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Chaincode Labs Seminars", description: "Structured curriculum for aspiring Bitcoin and Lightning protocol developers.", url: "https://chaincode.com/" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Bitcoin Dev Mailing List", description: "Where protocol-level discussions and proposals happen in the open.", url: "https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "Design for the Real World", description: "How design thinking applies to humanitarian and social challenges.", url: "https://www.youtube.com/results?search_query=design+for+real+world+papanek" },
          { title: "Accessibility in Open Source", description: "Building inclusive interfaces for freedom tech tools.", url: "https://www.youtube.com/results?search_query=accessibility+open+source+design" },
          { title: "The UX of Bitcoin Wallets", description: "Analysis of common patterns and failures in cryptocurrency interfaces.", url: "https://www.youtube.com/results?search_query=bitcoin+wallet+ux+design" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Bitcoin Design Guide", description: "Community-driven design guidelines for Bitcoin products.", url: "https://bitcoin.design/guide/" },
          { title: "Designing for Trust", description: "Patterns for building confidence in decentralised applications.", url: "https://bitcoin.design/" },
          { title: "Inclusive Design Principles", description: "Framework for creating technology that works for everyone.", url: "https://inclusivedesignprinciples.org/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Don't Make Me Think", description: "Steve Krug's seminal work on web usability and intuitive design.", url: "https://sensible.com/dont-make-me-think/" },
          { title: "Design Justice", description: "Sasha Costanza-Chock on community-led design and structural equity.", url: "https://designjustice.org/" },
          { title: "The Design of Everyday Things", description: "Don Norman's exploration of human-centred design principles.", url: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Bitcoin Icons", description: "Open-source icon set designed specifically for Bitcoin applications.", url: "https://bitcoinicons.com/" },
          { title: "Bitcoin UI Kit", description: "Figma components for designing Bitcoin products.", url: "https://bitcoin.design/" },
          { title: "Penpot", description: "Open-source design and prototyping platform.", url: "https://penpot.app/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Bitcoin Design Community", description: "Contribute to open design projects and learn alongside practitioners.", url: "https://bitcoin.design/" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Open Source Design", description: "Global community improving design in free and open-source software.", url: "https://opensourcedesign.net/" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "Building Bitcoin Communities", description: "Lessons from grassroots Bitcoin adoption efforts worldwide.", url: "https://www.youtube.com/results?search_query=bitcoin+community+building" },
          { title: "The Power of Meetups", description: "How local gatherings drive global adoption of freedom tech.", url: "https://www.youtube.com/results?search_query=bitcoin+meetup+organising" },
          { title: "Community-Led Development", description: "Frameworks for technology projects driven by their users.", url: "https://www.youtube.com/results?search_query=community+led+development" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "How to Start a Bitcoin Meetup", description: "Practical guide to organising local freedom tech gatherings.", url: "https://bitcoin.design/" },
          { title: "The Mushroom Model of Community", description: "Understanding organic, decentralised community growth.", url: "https://blog.holacracy.org/" },
          { title: "Collective Action in Open Source", description: "How volunteers coordinate to build shared digital infrastructure.", url: "https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Art of Gathering", description: "Priya Parker on creating purposeful, transformative gatherings.", url: "https://www.priyaparker.com/" },
          { title: "Building Successful Communities", description: "Jono Bacon's guide to nurturing open-source communities.", url: "https://www.jonobacon.com/" },
          { title: "The Starfish and the Spider", description: "How decentralised organisations change the world.", url: "https://www.goodreads.com/book/show/21314.The_Starfish_and_the_Spider" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Meetup.com Alternatives", description: "Freedom-respecting tools for organising community events.", url: "https://gettogether.community/" },
          { title: "Signal", description: "Encrypted group messaging for community coordination.", url: "https://signal.org/" },
          { title: "Matrix/Element", description: "Decentralised chat platform for open communities.", url: "https://element.io/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Community Building Fundamentals", description: "Learn to create and sustain meaningful technology communities.", url: "https://www.communitybuilding.co/" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Bitcoin Meetup Network", description: "Connect with organisers running local Bitcoin and freedom tech events worldwide.", url: "https://bitcoin.org/en/events" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "Digital Rights and Policy", description: "How legislation shapes the future of privacy and encryption.", url: "https://www.youtube.com/results?search_query=digital+rights+policy" },
          { title: "The Right to Encrypt", description: "Why end-to-end encryption is a fundamental rights issue.", url: "https://www.youtube.com/results?search_query=right+to+encrypt" },
          { title: "Bitcoin and Regulation", description: "Understanding the global regulatory landscape for open money.", url: "https://www.youtube.com/results?search_query=bitcoin+regulation+policy" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "EFF: Digital Privacy", description: "Electronic Frontier Foundation's analysis of digital privacy legislation.", url: "https://www.eff.org/issues/privacy" },
          { title: "Coin Center Policy Papers", description: "Research on cryptocurrency regulation and digital rights.", url: "https://www.coincenter.org/research/" },
          { title: "A Cypherpunk's Manifesto", description: "Eric Hughes's foundational text on privacy as a right.", url: "https://www.activism.net/cypherpunk/manifesto.html" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "Permanent Record", description: "Edward Snowden's account of mass surveillance and its implications.", url: "https://www.goodreads.com/book/show/46223297-permanent-record" },
          { title: "The Age of Surveillance Capitalism", description: "Shoshana Zuboff on the commodification of personal data.", url: "https://www.goodreads.com/book/show/26195941-the-age-of-surveillance-capitalism" },
          { title: "Code: Version 2.0", description: "Lawrence Lessig on how code itself functions as regulation.", url: "https://lessig.org/product/code/" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Tor Browser", description: "Browse the internet without surveillance or censorship.", url: "https://www.torproject.org/" },
          { title: "EFF Action Center", description: "Take direct action on digital rights legislation.", url: "https://act.eff.org/" },
          { title: "GnuPG", description: "Free implementation of the OpenPGP standard for encrypted communication.", url: "https://gnupg.org/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Digital Rights Advocacy", description: "Learn to engage with policy processes affecting technology and privacy.", url: "https://www.eff.org/" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Access Now", description: "Global organisation defending digital rights of users at risk.", url: "https://www.accessnow.org/" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "But How Does Bitcoin Actually Work?", description: "3Blue1Brown's visual explanation of Bitcoin's mathematical foundations.", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
          { title: "Teaching Bitcoin", description: "Approaches to explaining decentralised technology to newcomers.", url: "https://www.youtube.com/results?search_query=teaching+bitcoin+beginners" },
          { title: "Digital Literacy for Everyone", description: "Frameworks for making technology education accessible.", url: "https://www.youtube.com/results?search_query=digital+literacy+education" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Explain Bitcoin Like I'm Five", description: "The art of simplifying complex technical concepts.", url: "https://medium.com/free-code-camp/explain-bitcoin-like-im-five-73b4257ac833" },
          { title: "The Feynman Technique", description: "A learning method that forces clarity through teaching.", url: "https://fs.blog/feynman-technique/" },
          { title: "Open Educational Resources", description: "The movement to make learning materials freely available.", url: "https://www.unesco.org/en/open-educational-resources" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Bitcoin Standard", description: "Saifedean Ammous's economic history and argument for Bitcoin.", url: "https://saifedean.com/thebitcoinstandard/" },
          { title: "Pedagogy of the Oppressed", description: "Paulo Freire's transformative vision of education as liberation.", url: "https://www.goodreads.com/book/show/72657.Pedagogy_of_the_Oppressed" },
          { title: "Inventing Bitcoin", description: "Yan Pritzker's accessible introduction to how Bitcoin works.", url: "https://www.inventingbitcoin.com/" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Mi Primer Bitcoin", description: "Open-source Bitcoin education curriculum used worldwide.", url: "https://miprimerbitcoin.io/" },
          { title: "Miro", description: "Visual collaboration tool for creating educational workshops.", url: "https://miro.com/" },
          { title: "OBS Studio", description: "Open-source software for recording educational content.", url: "https://obsproject.com/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Saylor Academy: Bitcoin for Everybody", description: "Free, comprehensive Bitcoin course suitable for all levels.", url: "https://learn.saylor.org/course/PRDV151" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Bitcoin Education Network", description: "Educators sharing resources and approaches for teaching freedom tech.", url: "https://miprimerbitcoin.io/" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "Bitcoin as a Tool for Human Rights", description: "Alex Gladstein on how Bitcoin enables financial freedom under authoritarianism.", url: "https://www.youtube.com/results?search_query=alex+gladstein+bitcoin+human+rights" },
          { title: "Digital Security for Activists", description: "Practical operational security for people working in hostile environments.", url: "https://www.youtube.com/results?search_query=digital+security+activists" },
          { title: "Surveillance and Resistance", description: "How communities resist digital authoritarianism.", url: "https://www.youtube.com/results?search_query=surveillance+resistance+technology" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Check Your Financial Privilege", description: "Alex Gladstein on Bitcoin as a humanitarian tool.", url: "https://bitcoinmagazine.com/culture/check-your-financial-privilege" },
          { title: "Digital Defenders Partnership", description: "Emergency support for human rights defenders under digital threat.", url: "https://www.digitaldefenders.org/" },
          { title: "Surveillance Self-Defense", description: "EFF's guide to protecting yourself from digital surveillance.", url: "https://ssd.eff.org/" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Quiet Before", description: "Gal Beckerman on how activists have always used technology to organise.", url: "https://www.goodreads.com/book/show/58438583-the-quiet-before" },
          { title: "Twitter and Tear Gas", description: "Zeynep Tufekci on the power and fragility of networked protest.", url: "https://www.twitterandteargas.org/" },
          { title: "Cypherpunks: Freedom and the Future of the Internet", description: "Julian Assange on cryptography as a tool for liberation.", url: "https://www.goodreads.com/book/show/16153182-cypherpunks" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Tails OS", description: "Portable operating system that protects against surveillance.", url: "https://tails.net/" },
          { title: "Briar", description: "Peer-to-peer encrypted messaging that works without internet.", url: "https://briarproject.org/" },
          { title: "OnionShare", description: "Securely share files, host websites, and chat anonymously.", url: "https://onionshare.org/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Frontline Defenders Protection", description: "Security training for human rights defenders working in hostile environments.", url: "https://www.frontlinedefenders.org/" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Human Rights Foundation", description: "Organisation at the intersection of technology, freedom, and human rights.", url: "https://hrf.org/" },
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
        label: "Videos",
        type: "grid",
        items: [
          { title: "What Is Bitcoin?", description: "A calm, clear introduction to Bitcoin without the hype.", url: "https://www.youtube.com/results?search_query=what+is+bitcoin+explained+simply" },
          { title: "Why Privacy Matters", description: "Understanding why digital privacy is a fundamental right.", url: "https://www.youtube.com/results?search_query=why+privacy+matters+ted" },
          { title: "What Is Open Source?", description: "How collaborative software development changes the world.", url: "https://www.youtube.com/results?search_query=what+is+open+source+explained" },
        ],
      },
      {
        label: "Articles",
        type: "grid",
        items: [
          { title: "Bitcoin in One Lesson", description: "The simplest possible explanation of why Bitcoin exists.", url: "https://bitcoin.org/en/how-it-works" },
          { title: "The Case for Digital Privacy", description: "Why everyone should care about their digital footprint.", url: "https://ssd.eff.org/module/why-metadata-matters" },
          { title: "Freedom Tech Starter Guide", description: "An overview of tools that respect your autonomy.", url: "https://www.eff.org/pages/tools" },
        ],
      },
      {
        label: "Books",
        type: "grid",
        items: [
          { title: "The Little Bitcoin Book", description: "A short, accessible introduction to Bitcoin for anyone.", url: "https://littlebitcoinbook.com/" },
          { title: "Digital Minimalism", description: "Cal Newport on reclaiming your attention from technology.", url: "https://www.goodreads.com/book/show/40672036-digital-minimalism" },
          { title: "Inventing Bitcoin", description: "Yan Pritzker's step-by-step explanation of how Bitcoin works.", url: "https://www.inventingbitcoin.com/" },
        ],
      },
      {
        label: "Tools",
        type: "grid",
        items: [
          { title: "Signal Messenger", description: "Start with encrypted messaging. It takes two minutes.", url: "https://signal.org/" },
          { title: "Firefox", description: "A privacy-respecting web browser you can use today.", url: "https://www.mozilla.org/firefox/" },
          { title: "Proton Mail", description: "Encrypted email that is as easy to use as Gmail.", url: "https://proton.me/" },
        ],
      },
      {
        label: "Course",
        type: "single",
        items: [
          { title: "Bitcoin for Everybody", description: "Free, self-paced course that assumes no prior knowledge.", url: "https://learn.saylor.org/course/PRDV151" },
        ],
      },
      {
        label: "Community",
        type: "single",
        items: [
          { title: "Find a Local Bitcoin Meetup", description: "The best way to learn is from people. Find a group near you.", url: "https://bitcoin.org/en/events" },
        ],
      },
    ],
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}
