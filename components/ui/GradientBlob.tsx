import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  color?: "purple" | "blue" | "coral" | "lilac";
}

const colorMap: Record<NonNullable<GradientBlobProps["color"]>, string> = {
  purple: "bg-brand-purple",
  blue: "bg-brand-blue",
  coral: "bg-brand-coral",
  lilac: "bg-brand-lilac-bg",
};

export function GradientBlob({ className, color = "purple" }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl opacity-30 pointer-events-none",
        colorMap[color],
        className,
      )}
    />
  );
}
