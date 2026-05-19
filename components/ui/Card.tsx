import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white border border-black/5 p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(108,71,255,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
