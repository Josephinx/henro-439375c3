export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    scores: Record<string, number>;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When you hear about a new technology, what draws you in first?",
    options: [
      { label: "How it works under the hood", scores: { dev: 3, design: 0, community: 0, policy: 0, education: 1, human_rights: 0 } },
      { label: "How it looks and feels to use", scores: { dev: 0, design: 3, community: 0, policy: 0, education: 1, human_rights: 0 } },
      { label: "Who it helps and why it matters", scores: { dev: 0, design: 0, community: 1, policy: 1, education: 0, human_rights: 3 } },
      { label: "Whether it can be explained simply", scores: { dev: 0, design: 0, community: 1, policy: 0, education: 3, human_rights: 1 } },
    ],
  },
  {
    id: 2,
    text: "A friend asks you to help with their project. What role do you naturally take?",
    options: [
      { label: "Building the thing itself", scores: { dev: 3, design: 1, community: 0, policy: 0, education: 0, human_rights: 0 } },
      { label: "Making it clear and beautiful", scores: { dev: 0, design: 3, community: 0, policy: 0, education: 1, human_rights: 0 } },
      { label: "Connecting them with the right people", scores: { dev: 0, design: 0, community: 3, policy: 1, education: 0, human_rights: 1 } },
      { label: "Helping them think through the consequences", scores: { dev: 0, design: 0, community: 0, policy: 3, education: 1, human_rights: 2 } },
    ],
  },
  {
    id: 3,
    text: "What kind of writing resonates with you most?",
    options: [
      { label: "Technical documentation and specifications", scores: { dev: 3, design: 0, community: 0, policy: 1, education: 1, human_rights: 0 } },
      { label: "Visual storytelling and case studies", scores: { dev: 0, design: 3, community: 1, policy: 0, education: 1, human_rights: 0 } },
      { label: "Community guides and onboarding materials", scores: { dev: 0, design: 0, community: 2, policy: 0, education: 3, human_rights: 1 } },
      { label: "Policy papers and human rights reports", scores: { dev: 0, design: 0, community: 0, policy: 3, education: 0, human_rights: 3 } },
    ],
  },
  {
    id: 4,
    text: "What frustrates you most about the current internet?",
    options: [
      { label: "Centralised infrastructure and walled gardens", scores: { dev: 3, design: 0, community: 1, policy: 1, education: 0, human_rights: 1 } },
      { label: "Poor design that confuses people", scores: { dev: 0, design: 3, community: 1, policy: 0, education: 1, human_rights: 0 } },
      { label: "Lack of meaningful community spaces", scores: { dev: 0, design: 0, community: 3, policy: 0, education: 1, human_rights: 1 } },
      { label: "Surveillance and erosion of privacy", scores: { dev: 1, design: 0, community: 0, policy: 2, education: 0, human_rights: 3 } },
    ],
  },
  {
    id: 5,
    text: "If you could mass-produce one thing, what would it be?",
    options: [
      { label: "Open-source tools anyone can run", scores: { dev: 3, design: 0, community: 1, policy: 0, education: 1, human_rights: 1 } },
      { label: "Clear interfaces for complex systems", scores: { dev: 1, design: 3, community: 0, policy: 0, education: 1, human_rights: 0 } },
      { label: "Local meetups and support networks", scores: { dev: 0, design: 0, community: 3, policy: 0, education: 1, human_rights: 1 } },
      { label: "Awareness of digital rights", scores: { dev: 0, design: 0, community: 1, policy: 2, education: 2, human_rights: 3 } },
    ],
  },
  {
    id: 6,
    text: "How do you prefer to learn something new?",
    options: [
      { label: "Reading source code and experimenting", scores: { dev: 3, design: 0, community: 0, policy: 0, education: 1, human_rights: 0 } },
      { label: "Watching well-crafted tutorials", scores: { dev: 0, design: 2, community: 0, policy: 0, education: 3, human_rights: 0 } },
      { label: "Talking to people who have done it", scores: { dev: 0, design: 0, community: 3, policy: 1, education: 1, human_rights: 1 } },
      { label: "Reading long-form analysis and context", scores: { dev: 0, design: 0, community: 0, policy: 3, education: 1, human_rights: 2 } },
    ],
  },
  {
    id: 7,
    text: "What does freedom mean to you in a digital context?",
    options: [
      { label: "The ability to run and modify your own software", scores: { dev: 3, design: 0, community: 0, policy: 1, education: 0, human_rights: 1 } },
      { label: "Technology that anyone can understand and use", scores: { dev: 0, design: 3, community: 1, policy: 0, education: 2, human_rights: 0 } },
      { label: "People coming together to build alternatives", scores: { dev: 0, design: 0, community: 3, policy: 0, education: 0, human_rights: 2 } },
      { label: "Protection from censorship and surveillance", scores: { dev: 0, design: 0, community: 0, policy: 2, education: 0, human_rights: 3 } },
    ],
  },
  {
    id: 8,
    text: "What would you spend a sabbatical doing?",
    options: [
      { label: "Contributing to an open-source project", scores: { dev: 3, design: 1, community: 1, policy: 0, education: 0, human_rights: 0 } },
      { label: "Redesigning a broken public service", scores: { dev: 0, design: 3, community: 0, policy: 1, education: 0, human_rights: 2 } },
      { label: "Teaching workshops in underserved areas", scores: { dev: 0, design: 0, community: 2, policy: 0, education: 3, human_rights: 2 } },
      { label: "Writing a book about digital sovereignty", scores: { dev: 0, design: 0, community: 0, policy: 3, education: 2, human_rights: 2 } },
    ],
  },
  {
    id: 9,
    text: "Which of these problems keeps you up at night?",
    options: [
      { label: "Critical infrastructure running on proprietary software", scores: { dev: 3, design: 0, community: 0, policy: 2, education: 0, human_rights: 1 } },
      { label: "People unable to use the tools meant to help them", scores: { dev: 0, design: 3, community: 1, policy: 0, education: 2, human_rights: 1 } },
      { label: "Communities fragmented across hostile platforms", scores: { dev: 0, design: 0, community: 3, policy: 0, education: 1, human_rights: 1 } },
      { label: "Activists silenced by authoritarian technology", scores: { dev: 1, design: 0, community: 0, policy: 1, education: 0, human_rights: 3 } },
    ],
  },
  {
    id: 10,
    text: "You discover a powerful new freedom tech tool. What do you do first?",
    options: [
      { label: "Fork it and start exploring the code", scores: { dev: 3, design: 0, community: 0, policy: 0, education: 0, human_rights: 0 } },
      { label: "Think about how to make it more accessible", scores: { dev: 0, design: 3, community: 1, policy: 0, education: 1, human_rights: 0 } },
      { label: "Share it with your network", scores: { dev: 0, design: 0, community: 3, policy: 0, education: 1, human_rights: 1 } },
      { label: "Consider its implications for vulnerable populations", scores: { dev: 0, design: 0, community: 0, policy: 2, education: 0, human_rights: 3 } },
    ],
  },
];
