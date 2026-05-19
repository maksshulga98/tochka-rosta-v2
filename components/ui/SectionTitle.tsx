import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  invert?: boolean;
  id?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  invert = false,
  id,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm uppercase tracking-wider font-medium mb-4",
            invert ? "text-brand-coral" : "text-brand-purple",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          invert ? "text-white" : "text-brand-text",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            invert ? "text-white/70" : "text-brand-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
