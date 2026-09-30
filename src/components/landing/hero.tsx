import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreviewWindow } from "./preview-window";
import { SignInButton } from "./sign-in-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-125 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-16 sm:gap-14 sm:pt-20 sm:pb-24 lg:grid-cols-[1fr_1.05fr] lg:pt-28">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs text-foreground/60 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-success" aria-hidden="true" />
            Publiczna wersja demonstracyjna
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Panel licencji.
            <br />
            <span className="text-primary">Bez zaplecza.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/60">
            Statyczna prezentacja interfejsu do obsługi licencji i wersji
            pluginów. Bez logowania, API, bazy danych i prawdziwych plików.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SignInButton size="xl" label="Otwórz demo panelu" />
            <Button asChild variant="ghost" size="xl" className="rounded-full text-foreground/60 hover:text-foreground">
              <a href="#funkcje">
                Poznaj interfejs
                <ArrowDown className="size-4 text-primary" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-5 text-sm">
            <div><b>0</b><p className="mt-1 text-xs text-foreground/40">endpointów</p></div>
            <div><b>0</b><p className="mt-1 text-xs text-foreground/40">sekretów</p></div>
            <div><b>100%</b><p className="mt-1 text-xs text-foreground/40">fikcyjne dane</p></div>
          </div>
        </div>
        <PreviewWindow />
      </div>
    </section>
  );
}
