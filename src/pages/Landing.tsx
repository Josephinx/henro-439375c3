import { Link } from "react-router-dom";
import HenroLogo from "../components/HenroLogo";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../components/ThemeToggle";
import heroPath from "../assets/hero-path.png";

export default function Landing() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen h-screen flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5">
        <HenroLogo />
        <ThemeToggle theme={theme} toggle={toggle} />
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
          {/* Text */}
          <div className="flex-1 max-w-[480px]">
            <div className="mb-6">
              <HenroLogo size="large" />
            </div>
            <h1 className="font-heading text-[28px] sm:text-[36px] font-bold text-foreground leading-tight mb-6">
              Find your path
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

          {/* Hero image */}
          <div className="flex-1 flex justify-center max-w-[400px]">
            <img
              src={heroPath}
              alt="A winding pilgrimage path through a torii gate and mountainous landscape"
              className="w-full h-auto max-h-[60vh] object-contain opacity-90"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
