import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Blocks,
  CheckCircle2,
  Download,
  Home,
  KeyRound,
  LayoutDashboard,
  Server,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Panel demonstracyjny",
  description: "Statyczny podgląd interfejsu na fikcyjnych danych.",
};

const licenses = [
  { name: "SkyBlock Essentials", version: "2.4.1", server: "Demo Network", status: "Aktywna" },
  { name: "MobManager Pro", version: "1.8.0", server: "Example Realm", status: "Aktywna" },
  { name: "ChatTools", version: "3.2.2", server: "Sample Hub", status: "Wygasa za 14 dni" },
] as const;

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#f4f7fb]">
      <div className="mx-auto grid min-h-screen max-w-400 lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-white/10 bg-[#0a1625] p-5 lg:flex lg:flex-col">
          <Link href="/" className="flex items-center gap-3 text-sm font-bold">
            <span className="grid size-9 place-items-center rounded-lg bg-blue-500 text-white">L</span>
            licence/system
          </Link>
          <nav className="mt-12 grid gap-2 text-sm" aria-label="Menu demonstracyjne">
            <span className="flex items-center gap-3 rounded-lg bg-blue-500/15 px-3 py-2.5 text-blue-300"><LayoutDashboard className="size-4" /> Przegląd</span>
            <span className="flex items-center gap-3 px-3 py-2.5 text-slate-400"><KeyRound className="size-4" /> Licencje <b className="ml-auto rounded-full bg-white/10 px-2 text-xs">3</b></span>
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white"><Blocks className="size-4" /> Admin demo</Link>
            <span className="flex items-center gap-3 px-3 py-2.5 text-slate-400"><Activity className="size-4" /> Aktywność</span>
          </nav>
          <div className="mt-auto rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300"><ShieldCheck className="size-4" /> Tryb bezpiecznego demo</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Wszystkie rekordy są fikcyjne. Przyciski nie wykonują operacji.</p>
          </div>
        </aside>

        <main className="min-w-0">
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="size-5 text-blue-400 lg:hidden" />
              <span className="text-sm text-slate-400">Panel demonstracyjny</span>
            </div>
            <Link href="/" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
              <Home className="size-3.5" /> Strona główna
            </Link>
          </header>

          <div className="mx-auto max-w-300 px-5 py-8 sm:px-8 sm:py-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm text-blue-300">Witaj w wersji pokazowej</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Twoje licencje</h1>
                <p className="mt-2 text-sm text-slate-400">Stan interfejsu na przykładowych, lokalnych danych.</p>
              </div>
              <span className="w-fit rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">UI only</span>
            </div>

            <section className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Statystyki demonstracyjne">
              {[
                [KeyRound, "Aktywne licencje", "3"],
                [Server, "Serwery", "3"],
                [Download, "Pobrania demo", "12"],
              ].map(([Icon, label, value]) => (
                <article key={String(label)} className="rounded-xl border border-white/10 bg-[#0e1b2b] p-5">
                  <div className="flex items-center justify-between text-sm text-slate-400"><span>{String(label)}</span><Icon className="size-4 text-blue-400" /></div>
                  <strong className="mt-4 block text-3xl">{String(value)}</strong>
                </article>
              ))}
            </section>

            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div><h2 className="text-lg font-semibold">Przypisane pluginy</h2><p className="mt-1 text-sm text-slate-400">Fikcyjne rekordy do prezentacji układu.</p></div>
                <span className="hidden text-xs text-slate-500 sm:block">3 pozycje</span>
              </div>
              <div className="mt-4 grid gap-3">
                {licenses.map((license) => (
                  <article key={license.name} className="grid gap-4 rounded-xl border border-white/10 bg-[#0e1b2b] p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-500/15 text-blue-300"><Blocks className="size-5" /></span>
                      <div className="min-w-0"><h3 className="truncate font-semibold">{license.name}</h3><p className="mt-1 text-xs text-slate-400">{license.server} · wersja {license.version}</p><p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-300"><CheckCircle2 className="size-3.5" /> {license.status}</p></div>
                    </div>
                    <button type="button" disabled title="Operacja wyłączona w statycznym demo" className="cursor-not-allowed rounded-lg border border-white/10 px-4 py-2 text-xs text-slate-500">Pobierz — demo</button>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
