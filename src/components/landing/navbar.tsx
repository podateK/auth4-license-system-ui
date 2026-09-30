import Link from "next/link";
import { SignInButton } from "./sign-in-button";

const links = [
  { href: "#funkcje", label: "Funkcje" },
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            L
          </span>
          <span>
            licence<span className="text-foreground/40">/</span>system
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <SignInButton label="Demo panelu" />
        </div>
      </nav>
    </header>
  );
}
