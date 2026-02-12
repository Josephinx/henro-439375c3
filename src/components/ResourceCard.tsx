import { PersonaResource } from "../data/personas";

interface ResourceCardProps {
  resource: PersonaResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200"
    >
      <h3 className="font-heading text-base font-medium text-foreground mb-2">
        {resource.title}
      </h3>
      <p className="font-body text-sm text-text-secondary leading-relaxed">
        {resource.description}
      </p>
    </a>
  );
}
