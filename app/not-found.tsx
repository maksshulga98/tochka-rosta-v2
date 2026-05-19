import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-bg px-6">
      <div className="relative max-w-md text-center">
        <div
          aria-hidden="true"
          className="absolute -inset-20 bg-brand-purple/20 blur-3xl rounded-full pointer-events-none"
        />
        <div className="relative">
          <p className="text-sm uppercase tracking-wider font-medium text-brand-purple mb-4">
            Ошибка 404
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-5">
            Страница не найдена
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-brand-muted mb-8">
            Возможно, ссылка устарела или вы перешли по неверному адресу.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-purple to-brand-blue px-6 py-3 text-white font-medium shadow-[0_8px_20px_rgba(108,71,255,0.25)] hover:opacity-90 transition-opacity"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
}
