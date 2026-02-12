import HenroLogo from "./HenroLogo";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="block">
          <HenroLogo variant="muted" />
        </a>
        <ThemeToggle theme={theme} toggle={toggleTheme} />
      </div>
    </header>
  );
}
