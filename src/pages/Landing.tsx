import { Link } from "react-router-dom";
import HenroLogo from "../components/HenroLogo";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../components/ThemeToggle";
import heroPath from "../assets/hero-path.png";

export default function Landing() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen h-screen flex flex-row bg-[#fdf9f7] dark:bg-background overflow-hidden">
      {/* Left half – text content */}
      <div className="w-1/2 flex flex-col h-full">
        <header className="flex items-center justify-start px-6 py-5">
          <ThemeToggle theme={theme} toggle={toggle} />
        </header>
        <div className="flex-1 flex items-center justify-center px-12">
          <div className="max-w-[480px]">
            <div className="mb-8">
              <HenroLogo size="xl" />
            </div>
            <h1 className="font-heading text-[32px] sm:text-[42px] font-semibold text-foreground leading-tight mb-6">
              Find your path in bitcoin...
            </h1>
            <p className="font-body text-text-secondary text-base leading-[1.7] mb-2">
              Freedom tech needs more than code.
            </p>
            <p className="font-body text-text-secondary text-base leading-[1.7] mb-2">
              It needs designers, educators, community builders, policy advocates, and human rights workers.
            </p>
            <p className="font-body text-text-secondary text-base leading-[1.7] mb-10">
              Discover where your skills fit and get the resources to start your journey as a contributor.
            </p>
            <div>
              <Link
                to="/survey"
                className="inline-block px-10 py-3 rounded-full border border-accent/40 text-foreground font-body text-sm tracking-wide uppercase transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                Begin
              </Link>
              <p className="font-body text-text-secondary text-xs mt-3 ml-1 opacity-70">Takes 2 minutes.</p>
            </div>
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
