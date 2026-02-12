interface HenroLogoProps {
  variant?: "dark" | "light" | "muted";
  size?: "default" | "large" | "xl";
}

export default function HenroLogo({ variant = "dark", size = "default" }: HenroLogoProps) {
  const textColor =
    variant === "muted"
      ? "hsl(var(--text-secondary))"
      : "hsl(var(--text-primary))";

  const sizeClass = size === "xl" ? "w-72" : size === "large" ? "w-48" : "w-32";

  return (
    <svg viewBox="0 0 320 40" className={sizeClass} style={{ overflow: "visible" }}>
      <text
        x="0"
        y="26"
        style={{
          fontFamily: "'Kalam', cursive",
          fontSize: "32px",
          fontWeight: 400,
          letterSpacing: "0.04em",
          fill: textColor,
        }}
      >
        henro
      </text>
      <path
        d="M2 34 C25 32 50 35 75 33 C100 31 120 33.5 155 32"
        stroke="hsl(var(--accent))"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity={0.85}
      />
    </svg>
  );
}
