import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCircleProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { wrap: "w-10 h-10", icon: "w-5 h-5" },
  md: { wrap: "w-12 h-12", icon: "w-6 h-6" },
  lg: { wrap: "w-16 h-16", icon: "w-8 h-8" },
};

export function IconCircle({ icon: Icon, size = "md", className }: IconCircleProps) {
  const s = sizeMap[size];
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-[0_8px_20px_rgba(108,71,255,0.25)]",
        s.wrap,
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={s.icon} />
    </div>
  );
}
