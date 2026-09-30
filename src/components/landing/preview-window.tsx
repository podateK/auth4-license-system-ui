import { BadgeCheck, Blocks, Download, KeyRound, Server } from "lucide-react";

const licenses = [
  { name: "SkyBlock Essentials", meta: "Aktywna · v2.4.1" },
  { name: "MobManager Pro", meta: "Aktywna · v1.8.0" },
];

export function PreviewWindow() {
  return (
    <div className="relative" aria-label="Podgląd panelu licencji">
      <div
        className="absolute -inset-16 -z-10 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex h-10 items-center gap-2 border-b border-border px-4">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="size-2.5 rounded-full bg-foreground/15" />
            <i className="size-2.5 rounded-full bg-foreground/15" />
            <i className="size-2.5 rounded-full bg-foreground/15" />
          </span>
          <span className="ml-2 font-mono text-[11px] text-foreground/50">
            licence/system — panel
          </span>
        </div>
        <div className="flex">
          <div className="flex w-11 flex-col items-center gap-5 border-r border-border py-4 text-foreground/40">
            <KeyRound className="size-4 text-primary" />
            <Blocks className="size-4" />
            <Server className="size-4" />
            <Download className="size-4" />
          </div>
          <div className="flex-1 p-5">
            <p className="font-mono text-[10px] tracking-[0.18em] text-foreground/40 uppercase">
              Witaj ponownie
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight">
              Twój panel licencji
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Licencje", "Pluginy", "Pobrania"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-white/[0.03] p-2.5"
                >
                  <p className="font-mono text-[9px] tracking-widest text-foreground/40 uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{[2, 2, 14][i]}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-2">
              {licenses.map((license, i) => (
                <div
                  key={license.name}
                  className={`flex items-center justify-between rounded-lg border border-border bg-white/[0.03] p-3 ${i > 0 ? "opacity-60" : ""}`}
                >
                  <div>
                    <p className="text-xs font-semibold">{license.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-foreground/50">
                      {license.meta}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-semibold text-primary">
                    Pobierz
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-3 -bottom-4 flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-xl shadow-black/40">
        <span className="grid size-6 place-items-center rounded-full bg-success/15 text-success">
          <BadgeCheck className="size-4" />
        </span>
        <span>
          <b className="block text-[11px] font-semibold">Licencja aktywna</b>
          <small className="block font-mono text-[9px] text-foreground/50">
            SkyBlock Essentials
          </small>
        </span>
      </div>
    </div>
  );
}
