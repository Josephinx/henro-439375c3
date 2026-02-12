import { Link } from "react-router-dom";
import HenroLogo from "../components/HenroLogo";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../components/ThemeToggle";
import heroPath from "../assets/hero-path.png";

export default function Landing() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen h-screen flex flex-row bg-[#f4ebe9] dark:bg-background overflow-hidden">
      {/* Left half – text content */}
      <div className="w-1/2 flex flex-col h-full">
        <header className="flex items-center justify-end px-6 py-5">
          <ThemeToggle theme={theme} toggle={toggle} />
        </header>
        <div className="flex-1 flex items-center justify-center px-12">
          <div className="max-w-[480px]">
            <div className="mb-8">
              <HenroLogo size="xl" />
            </div>
            <h1 className="font-heading text-[28px] sm:text-[36px] font-bold text-foreground leading-tight mb-6">
              Find your path...
            </h1>
            <p className="font-body text-text-secondary text-base leading-[1.7] mb-10">
              The freedom tech movement needs more than code. It needs designers,
              educators, community builders, policy advocates, and human rights
              workers. This short survey will help you discover where your skills
              and instincts fit — and give you the resources to start contributing.
            </p>
            <Link
              to="/survey"
              className="inline-block px-8 py-3 rounded-lg border border-border text-text-secondary font-body text-sm tracking-wide uppercase transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Begin
            </Link>
          </div>
        </div>
      </div>

      {/* Right half – hero image edge-to-edge */}
      <div className="w-1/2 h-full">
        <img
          src={heroPath}
          alt="A lone figure on a winding path toward a mountain with a red sun"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
