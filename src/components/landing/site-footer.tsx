import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
        <span>Licence System — publiczna prezentacja interfejsu</span>
        <Link
          href="/demo"
          className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Zobacz panel demonstracyjny
        </Link>
      </div>
    </footer>
  );
}
