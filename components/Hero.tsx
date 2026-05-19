import {
  FileText,
  PenLine,
  MessageCircle,
  Star,
  Package,
  Send,
  Inbox,
  BarChart3,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  "Digital-маркетинг",
  "Тексты и редактура",
  "Социальные сети",
  "Маркетплейсы",
  "Репутация",
  "Клиентские коммуникации",
  "Удалённая команда",
];

interface FloatingCardProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  rotate?: number;
  accent?: "purple" | "blue" | "coral";
}

const accentMap = {
  purple: "from-brand-purple to-brand-blue",
  blue: "from-brand-blue to-brand-purple",
  coral: "from-brand-coral to-brand-purple",
};

function FloatingCard({
  icon: Icon,
  label,
  className,
  rotate = 0,
  accent = "purple",
}: FloatingCardProps) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "absolute flex items-center gap-2.5 rounded-2xl bg-white border border-black/5 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(17,24,39,0.08)] whitespace-nowrap",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br text-white shrink-0",
          accentMap[accent],
        )}
        aria-hidden="true"
      >
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm font-semibold text-brand-text">{label}</span>
    </div>
  );
}

function ChartCard() {
  return (
    <div
      style={{ transform: "rotate(-3deg)" }}
      className="absolute top-0 right-4 w-[200px] rounded-2xl bg-white border border-black/5 p-4 shadow-[0_20px_40px_rgba(17,24,39,0.08)]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
          <BarChart3 className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
          Рост
        </span>
      </div>
      <p className="text-sm font-semibold text-brand-text mb-3">Отчётность</p>
      <svg
        viewBox="0 0 160 60"
        className="w-full h-14"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6C47FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6C47FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 50 L25 42 L50 38 L75 28 L100 22 L125 14 L160 6 L160 60 L0 60 Z"
          fill="url(#chartGradient)"
        />
        <path
          d="M0 50 L25 42 L50 38 L75 28 L100 22 L125 14 L160 6"
          fill="none"
          stroke="#6C47FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="160" cy="6" r="4" fill="#6C47FF" />
        <circle cx="160" cy="6" r="2" fill="white" />
      </svg>
    </div>
  );
}

function ChecklistCard() {
  const items = [
    "Тексты опубликованы",
    "Карточки обновлены",
    "Отзывы обработаны",
  ];
  return (
    <div
      style={{ transform: "rotate(2deg)" }}
      className="absolute bottom-0 left-0 w-[220px] rounded-2xl bg-white border border-black/5 p-4 shadow-[0_20px_40px_rgba(17,24,39,0.08)]"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-brand-coral to-brand-purple text-white">
          <Inbox className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-brand-text">Задачи</span>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-xs text-brand-muted"
          >
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-brand-purple/10 text-brand-purple">
              <Check className="w-3 h-3" aria-hidden="true" />
            </span>
            <span className="line-through opacity-70">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroComposition() {
  return (
    <div
      className="relative w-full max-w-[520px] aspect-square mx-auto"
      aria-hidden="true"
    >
      <div className="absolute -inset-10 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-purple/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-coral/25 blur-3xl rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-brand-blue/20 blur-3xl rounded-full" />
      </div>

      <ChartCard />
      <ChecklistCard />

      <FloatingCard
        icon={FileText}
        label="Контент"
        className="top-[35%] left-[2%]"
        rotate={-4}
        accent="purple"
      />
      <FloatingCard
        icon={PenLine}
        label="Тексты"
        className="top-[18%] left-[28%]"
        rotate={3}
        accent="blue"
      />
      <FloatingCard
        icon={MessageCircle}
        label="Соцсети"
        className="top-[44%] right-[6%]"
        rotate={4}
        accent="coral"
      />
      <FloatingCard
        icon={Star}
        label="Отзывы"
        className="top-[58%] left-[34%]"
        rotate={-3}
        accent="purple"
      />
      <FloatingCard
        icon={Package}
        label="Карточки товаров"
        className="bottom-[18%] right-[2%]"
        rotate={2}
        accent="blue"
      />
      <FloatingCard
        icon={Send}
        label="Сообщения"
        className="bottom-[2%] right-[28%]"
        rotate={-2}
        accent="purple"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-lilac-bg/50 via-brand-bg to-brand-bg"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider font-medium text-brand-purple mb-4">
              Маркетинговое агентство
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.05]"
            >
              «Точка роста» —{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                рост бизнеса
              </span>{" "}
              в digital-среде
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-brand-muted leading-relaxed max-w-2xl">
              Помогаем бизнесу расти в digital-среде: работаем с текстами,
              соцсетями, карточками товаров, репутацией, сообщениями и
              регулярными маркетинговыми задачами.
            </p>
            <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl">
              Мы берём на себя рутинные онлайн-процессы, чтобы предприниматели
              и команды могли сосредоточиться на развитии бизнеса, продажах и
              клиентах.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li key={b}>
                  <span className="inline-flex items-center rounded-full bg-white border border-black/5 px-3.5 py-1.5 text-xs md:text-sm font-medium text-brand-text shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white px-6 py-3.5 text-sm md:text-base font-semibold shadow-[0_12px_30px_rgba(108,71,255,0.3)] hover:shadow-[0_16px_40px_rgba(108,71,255,0.4)] hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                Чем мы занимаемся
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full bg-white border border-black/10 text-brand-text px-6 py-3.5 text-sm md:text-base font-semibold hover:border-brand-purple/30 hover:text-brand-purple transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                Как мы работаем
              </a>
              <a
                href="#career"
                className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold text-brand-purple hover:gap-2.5 transition-all rounded-full px-2 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                Карьера в агентстве
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative w-full">
            <HeroComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
