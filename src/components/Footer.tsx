import { useState } from "react";

interface FooterProps {
  onRetake: () => void;
}

export default function Footer({ onRetake }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText("https://henro.lovable.app");
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <footer className="border-t border-border mt-10 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={handleCopy}
            className="ghost-button-label border border-border px-4 py-2 rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
          >
            {copied ? "Copied" : "Copy Link"}
          </button>
          <button
            onClick={handleShare}
            className="ghost-button-label border border-border px-4 py-2 rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
          >
            {shared ? "Copied" : "Share Henro"}
          </button>
        </div>
        <button
          onClick={onRetake}
          className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
        >
          Retake Survey
        </button>
      </div>
    </footer>
  );
}
