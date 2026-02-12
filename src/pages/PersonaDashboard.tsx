import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getPersonaBySlug } from "../data/personas";
import { useTheme } from "../hooks/useTheme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResourceSection from "../components/ResourceSection";

export default function PersonaDashboard() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const persona = slug ? getPersonaBySlug(slug) : undefined;

  useEffect(() => {
    if (!persona) navigate("/", { replace: true });
  }, [persona, navigate]);

  if (!persona) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header theme={theme} toggleTheme={toggle} />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <p className="label-tracked text-accent mb-4">Your Persona</p>
          <h1 className="font-heading text-[28px] sm:text-[40px] font-bold text-foreground mb-6">
            {persona.name}
          </h1>
          <p className="font-body text-base text-text-secondary max-w-[640px] leading-[1.7]">
            {persona.description}
          </p>
        </div>

        {/* Resource sections */}
        {persona.sections.map((section) => (
          <ResourceSection key={section.label} section={section} />
        ))}
      </main>

      <div className="max-w-5xl mx-auto px-6">
        <Footer onRetake={() => navigate("/")} />
      </div>
    </div>
  );
}
