import { SignInButton } from "./sign-in-button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 bottom-0 h-100 bg-[radial-gradient(60%_100%_at_50%_100%,color-mix(in_oklab,var(--color-primary)_15%,transparent),transparent)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Zobacz interfejs bez podłączania konta
        </h2>
        <p className="mt-4 max-w-md text-foreground/60">
          Panel korzysta wyłącznie z fikcyjnych danych zapisanych we frontendzie.
          Żadna akcja nie wysyła informacji na serwer.
        </p>
        <div className="mt-8">
          <SignInButton size="xl" label="Otwórz demo panelu" />
        </div>
      </div>
    </section>
  );
}
