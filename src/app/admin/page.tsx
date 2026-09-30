import type { Metadata } from "next";
import Link from "next/link";
import { Blocks, Home, KeyRound, Server, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin — statyczne demo",
  description: "Demonstracyjny frontend panelu administracyjnego.",
};

const servers = [
  { name: "Demo Network", members: 1842, licenses: 126, state: "Aktywny" },
  { name: "Example Realm", members: 730, licenses: 84, state: "Aktywny" },
  { name: "Sample Hub", members: 315, licenses: 29, state: "Konfiguracja" },
] as const;

export default function AdminDemoPage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#f4f7fb]">
      <header className="border-b border-white/10 bg-[#0a1625]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-3 font-bold"><span className="grid size-9 place-items-center rounded-lg bg-blue-500">L</span> licence/system <span className="rounded-full bg-violet-400/15 px-2.5 py-1 text-xs font-semibold text-violet-300">ADMIN DEMO</span></div>
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Home className="size-4" /> Strona główna</Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm text-violet-300">Widok administracyjny</p><h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Zarządzanie systemem</h1><p className="mt-2 text-sm text-slate-400">Statyczna makieta na fikcyjnych danych — bez uprawnień i akcji serwerowych.</p></div>
          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-xs text-emerald-300"><ShieldCheck className="size-4" /> Bezpieczny tryb UI only</div>
        </div>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Statystyki administracyjne">
          {[[Server, "Serwery", "3"], [Users, "Członkowie", "2 887"], [KeyRound, "Licencje", "239"], [Blocks, "Pluginy", "8"]].map(([Icon, label, value]) => (
            <article key={String(label)} className="rounded-xl border border-white/10 bg-[#0e1b2b] p-5"><div className="flex items-center justify-between text-sm text-slate-400"><span>{String(label)}</span><Icon className="size-4 text-violet-300" /></div><strong className="mt-4 block text-3xl">{String(value)}</strong></article>
          ))}
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1b2b]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6"><div><h2 className="font-semibold">Serwery</h2><p className="mt-1 text-xs text-slate-400">Przykładowa lista organizacji</p></div><button disabled className="cursor-not-allowed rounded-lg bg-violet-400/10 px-3 py-2 text-xs text-violet-300 opacity-70">Dodaj serwer — demo</button></div>
          <div className="divide-y divide-white/10">
            {servers.map((server) => (
              <article key={server.name} className="grid gap-4 px-5 py-5 sm:grid-cols-[1fr_repeat(3,auto)] sm:items-center sm:gap-10 sm:px-6">
                <div><h3 className="font-semibold">{server.name}</h3><p className="mt-1 text-xs text-slate-500">Identyfikator demonstracyjny</p></div>
                <div><span className="text-xs text-slate-500">Członkowie</span><strong className="mt-1 block text-sm">{server.members.toLocaleString("pl-PL")}</strong></div>
                <div><span className="text-xs text-slate-500">Licencje</span><strong className="mt-1 block text-sm">{server.licenses}</strong></div>
                <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">{server.state}</span>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-3 text-sm"><Link href="/demo" className="rounded-lg border border-white/10 px-4 py-2.5 text-slate-300 hover:border-white/25">Panel użytkownika</Link><span className="rounded-lg border border-white/10 px-4 py-2.5 text-slate-500">Wszystkie operacje są wyłączone</span></div>
      </main>
    </div>
  );
}
