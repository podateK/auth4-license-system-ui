import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/components/landing/faq-data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="text-center font-mono text-[11px] tracking-[0.18em] text-foreground/50 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Częste pytania
        </h2>
        <Accordion type="single" collapsible className="mt-10 grid gap-3">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="rounded-xl border border-border bg-white/5 px-5 last:border-b"
            >
              <AccordionTrigger className="text-left text-[15px] font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-foreground/60">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
