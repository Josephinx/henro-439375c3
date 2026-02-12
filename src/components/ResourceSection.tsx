import { PersonaSection as SectionType } from "../data/personas";
import ResourceCard from "./ResourceCard";

interface ResourceSectionProps {
  section: SectionType;
}

export default function ResourceSection({ section }: ResourceSectionProps) {
  const isGrid = section.type === "grid";

  return (
    <section>
      <h2 className="label-tracked text-accent mt-10 mb-4">{section.label}</h2>
      {isGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {section.items.map((item) => (
            <ResourceCard key={item.title} resource={item} />
          ))}
        </div>
      ) : (
        <div className="max-w-[400px]">
          {section.items.map((item) => (
            <ResourceCard key={item.title} resource={item} />
          ))}
        </div>
      )}
    </section>
  );
}
