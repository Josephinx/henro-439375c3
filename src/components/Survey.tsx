import { useState, useCallback, useEffect } from "react";
import { questions } from "../data/questions";
import { calculatePersona } from "../utils/scoring";
import { useNavigate } from "react-router-dom";
import AnalysingScreen from "./AnalysingScreen";
import HenroLogo from "./HenroLogo";

export default function Survey() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [animationState, setAnimationState] = useState<"visible" | "exiting" | "entering">("visible");
  const [showAnalysing, setShowAnalysing] = useState(false);
  const navigate = useNavigate();

  const total = questions.length;
  const progress = ((currentIndex) / total) * 100;
  const question = questions[currentIndex];

  const advance = useCallback(
    (optionIndex: number) => {
      if (selectedOption !== null) return;
      setSelectedOption(optionIndex);

      setTimeout(() => {
        const newAnswers = [...answers, optionIndex];

        if (currentIndex >= total - 1) {
          setShowAnalysing(true);
          const slug = calculatePersona(questions, newAnswers);
          setTimeout(() => {
            navigate(`/persona/${slug}`);
          }, 800);
          return;
        }

        setAnimationState("exiting");
        setTimeout(() => {
          setAnswers(newAnswers);
          setCurrentIndex((i) => i + 1);
          setSelectedOption(null);
          setAnimationState("entering");
          setTimeout(() => setAnimationState("visible"), 50);
        }, 200);
      }, 400);
    },
    [selectedOption, answers, currentIndex, total, navigate]
  );

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const keyMap: Record<string, number> = {
        "1": 0, "2": 1, "3": 2, "4": 3,
        a: 0, b: 1, c: 2, d: 3,
        A: 0, B: 1, C: 2, D: 3,
      };
      const index = keyMap[e.key];
      if (index !== undefined && index < (question?.options.length ?? 0)) {
        advance(index);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [advance, question]);

  if (showAnalysing) return <AnalysingScreen />;

  const getAnimStyle = (): React.CSSProperties => {
    if (animationState === "exiting") {
      return { opacity: 0, transform: "translateY(-20px)", transition: "all 200ms ease-out" };
    }
    if (animationState === "entering") {
      return { opacity: 0, transform: "translateY(20px)", transition: "none" };
    }
    return { opacity: 1, transform: "translateY(0)", transition: "all 300ms ease-out 100ms" };
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Logo */}
      <div className="px-6 pt-6">
        <HenroLogo />
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-[640px] w-full" style={getAnimStyle()}>
          {/* Counter */}
          <p className="label-tracked text-text-secondary mb-8">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          {/* Question */}
          <h1 className="font-heading text-[22px] sm:text-[28px] font-semibold text-foreground mb-10 leading-snug">
            {question.text}
          </h1>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => {
              const isSelected = selectedOption === i;
              return (
                <button
                  key={i}
                  onClick={() => advance(i)}
                  className={`w-full text-left px-5 py-4 rounded-lg border transition-colors duration-200 font-body text-sm
                    ${
                      isSelected
                        ? "border-accent bg-accent-tint text-accent"
                        : "border-border text-text-secondary hover:border-accent hover:text-accent bg-transparent"
                    }
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
