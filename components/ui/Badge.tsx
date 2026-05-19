import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ children, icon: Icon, className, size = "md" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white border border-black/5 font-medium text-brand-text shadow-[0_4px_16px_rgba(0,0,0,0.03)]",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
        className,
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "text-brand-purple shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
