const steps = [
  ["01", "Otwórz panel", "Przejdź do statycznego widoku demonstracyjnego bez logowania i rejestracji."],
  ["02", "Sprawdź układ", "Zobacz fikcyjne licencje, statusy, statystyki i zachowanie responsywne."],
  ["03", "Rozwijaj frontend", "Podłącz własne, bezpieczne źródło danych dopiero w prywatnym wdrożeniu."],
] as const;

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="text-sm text-primary">Jak korzystać z wersji publicznej</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Trzy kroki, bez dostępu do systemu</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <li key={number} className="relative border-l border-primary/40 pl-5">
              <span className="text-xs font-semibold text-primary">{number}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
