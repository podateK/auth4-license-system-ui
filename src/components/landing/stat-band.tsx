const items = [
  ["100% statyczne", "Bez połączeń z API"],
  ["Dane przykładowe", "Bez danych użytkowników"],
  ["UI only", "Bez logowania i backendu"],
] as const;

export function StatBand() {
  return (
    <section className="border-y border-border" aria-label="Zakres wersji demo">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map(([value, label]) => (
          <div key={label} className="px-5 py-8 text-center">
            <p className="text-2xl font-bold tracking-tight text-primary">{value}</p>
            <p className="mt-2 text-xs tracking-wide text-foreground/45">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
