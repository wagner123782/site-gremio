import type { JSX } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SpraySplat } from "@/components/ui/spray";

const SUGGESTION_BOX_URL = "https://caixinha.infinityfree.me";

const channels: {
  label: string;
  value: string;
  href?: string;
  icon: JSX.Element;
}[] = [
  {
    label: "E-mail",
    value: "gremioinovacao0@gmail.com",
    href: "mailto:gremioinovacao0@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 8l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@gremio_inovacao.pbmg",
    href: "https://instagram.com/gremio_inovacao.pbmg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Sala do grêmio",
    value: "Aberta no intervalo — passe lá pra conversar",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24">
      <Container>
        <Reveal>
          <SectionTitle
            title="Fale com a gente"
            subtitle="Ideia, dúvida ou recado? A caixa de sugestões já está no ar — e você também pode chamar nos canais abaixo."
            marker
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-primary p-8 sm:p-10">
              <SpraySplat className="animate-hero-float pointer-events-none absolute -top-6 right-8 w-28 rotate-12 text-tertiary/25" />
              <div className="relative flex flex-col gap-4">
                <span className="flex w-fit items-center gap-2 rounded-full border border-tertiary/50 bg-tertiary/10 px-3 py-1 text-xs font-black tracking-widest text-tertiary uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
                  </span>
                  Já está no ar
                </span>
                <h3 className="text-2xl font-black text-neutral sm:text-3xl">
                  Caixa de sugestões online
                </h3>
                <p className="text-neutral/70">
                  Manda sua ideia, reclamação ou elogio de forma{" "}
                  <span className="font-bold text-neutral">100% anônima</span>.
                  Toda sugestão é lida nas nossas reuniões quinzenais e recebe
                  resposta no mural do grêmio.
                </p>
              </div>
              <div className="relative flex flex-col items-start gap-3">
                <Button
                  href={SUGGESTION_BOX_URL}
                  target={SUGGESTION_BOX_URL.startsWith("http") ? "_blank" : undefined}
                >
                  Abrir caixa de sugestões
                </Button>
                <span className="text-xs text-neutral/50">
                  Sem login, sem identificação — só o que você quiser dizer.
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {channels.map((channel, index) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tertiary/40 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {channel.icon}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-black tracking-widest text-primary/50 uppercase">
                      {channel.label}
                    </span>
                    <span className="font-bold break-words text-primary">
                      {channel.value}
                    </span>
                  </div>
                </>
              );
              return (
                <Reveal key={channel.label} delay={index * 100}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-neutral p-5 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary hover:shadow-lg hover:shadow-primary/5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-neutral p-5 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary hover:shadow-lg hover:shadow-primary/5">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
