import { Question } from "../data/questions";

const PERSONA_KEYS = ["dev", "design", "human_rights", "policy", "education", "community"] as const;

const SLUG_MAP: Record<string, string> = {
  dev: "developer",
  design: "designer",
  human_rights: "human-rights-worker",
  policy: "policy-advocate",
  education: "educator",
  community: "community-organiser",
};

// Tie-breaker priority: dev > design > human_rights > policy > education > community
const PRIORITY = PERSONA_KEYS;

export function calculatePersona(
  questions: Question[],
  answers: number[]
): string {
  const scores: Record<string, number> = {};
  for (const key of PERSONA_KEYS) scores[key] = 0;

  answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex]?.options[optionIndex];
    if (!option) return;
    for (const [key, value] of Object.entries(option.scores)) {
      scores[key] = (scores[key] || 0) + value;
    }
  });

  const maxScore = Math.max(...Object.values(scores));

  if (maxScore < 5) return "beginner";

  // Find all keys with max score, pick by priority
  for (const key of PRIORITY) {
    if (scores[key] === maxScore) return SLUG_MAP[key];
  }

  return "beginner";
}
