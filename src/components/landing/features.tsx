import { Blocks, Eye, LayoutDashboard, LockKeyhole, PanelsTopLeft, Smartphone } from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Czytelny przegląd", description: "Najważniejsze stany licencji i pluginów są widoczne bez przeklikiwania się przez formularze." },
  { icon: Blocks, title: "Katalog pluginów", description: "Spójny układ pozycji, wersji i statusów przygotowany dla większej liczby produktów." },
  { icon: Smartphone, title: "Widok responsywny", description: "Landing oraz panel zachowują hierarchię informacji na telefonie i dużym ekranie." },
  { icon: LockKeyhole, title: "Bez operacji serwerowych", description: "Publiczna wersja nie ma logowania, endpointów, kluczy ani połączeń z bazą danych." },
  { icon: Eye, title: "Jawny tryb demo", description: "Interfejs wyraźnie oznacza fikcyjne dane i wyłączone działania, aby nie udawać produkcji." },
];

export function Features() {
  return (
    <section id="funkcje" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="flex items-center gap-3 text-sm text-primary"><PanelsTopLeft className="size-5" /> Zakres publicznej wersji</div>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Interfejs, który można bezpiecznie obejrzeć i rozwijać</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 p-8 md:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-end">
          <div className="absolute -right-12 -top-12 size-52 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <span className="grid size-12 place-items-center rounded-xl bg-primary/20 text-primary"><LayoutDashboard className="size-6" /></span>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">Pełny wygląd panelu, zerowe zaplecze</h3>
          <p className="mt-3 max-w-lg leading-relaxed text-foreground/60">Repo pokazuje kompozycję, stany, typografię i responsywność. Warstwa odpowiedzialna za konta, licencje i pliki nie jest częścią publicznej wersji.</p>
        </article>
        {features.slice(1).map((item) => (
          <article key={item.title} className="rounded-2xl border border-border bg-white/[0.03] p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-primary"><item.icon className="size-5" /></span>
            <h3 className="mt-4 font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
