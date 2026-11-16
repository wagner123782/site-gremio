import type { JSX } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { SpraySplat } from "@/components/ui/spray";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
  tags?: string[];
  wide?: boolean;
  dark?: boolean;
};

const features: Feature[] = [
  {
    title: "Eventos e campanhas",
    description:
      "Gincanas, torneios, campanhas solidárias e datas especiais: organizamos a agenda da escola pra sempre ter algo acontecendo.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M13 5L6 9H3v6h3l7 4V5z" />
        <path d="M17 9a4.5 4.5 0 010 6" />
        <path d="M19.5 6.5a8 8 0 010 11" />
      </svg>
    ),
    tags: ["Gincanas", "Campanhas solidárias", "Datas especiais"],
    wide: true,
  },
  {
    title: "Representação estudantil",
    description:
      "Levamos as demandas das turmas pra direção e trazemos as respostas de volta — sem enrolação.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.5 0-2.9-.4-4.1-1L3 21l2-4.4A8.5 8.5 0 1121 11.5z" />
        <circle cx="8.5" cy="11.5" r="0.6" fill="currentColor" />
        <circle cx="12.5" cy="11.5" r="0.6" fill="currentColor" />
        <circle cx="16.5" cy="11.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Apoio ao estudante",
    description:
      "Escuta, tutoria entre colegas e apoio pra quem mais precisa, em qualquer momento do ano letivo.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 20s-7.5-4.6-9.3-9A5 5 0 0112 6.5 5 5 0 0121.3 11c-1.8 4.4-9.3 9-9.3 9z" />
      </svg>
    ),
  },
  {
    title: "Cultura e esporte",
    description:
      "Música, artes, dança e esporte com espaço garantido na escola: incentivo de verdade pra quem quer mostrar talento dentro e fora da sala de aula.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M9 18V5l10-2v13" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="16.5" cy="16" r="2.5" />
      </svg>
    ),
    tags: ["Música", "Artes", "Dança", "Esporte"],
    wide: true,
    dark: true,
  },
];

export function Features() {
  return (
    <section id="atuacoes" className="relative overflow-hidden py-24">
      <SpraySplat className="pointer-events-none absolute top-8 right-[6%] w-48 rotate-12 text-secondary/10" />
      <SpraySplat className="pointer-events-none absolute bottom-10 left-[3%] w-56 -rotate-6 text-tertiary/20" />
      <Container>
        <Reveal>
          <SectionTitle
            title="Nossas atuações"
            subtitle="O que o grêmio faz no dia a dia pra escola nunca ficar parada."
            marker
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 100}
              className={feature.wide ? "lg:col-span-2" : ""}
            >
              <div
                className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  feature.dark
                    ? "bg-primary text-neutral hover:shadow-secondary/20"
                    : "border border-primary/10 bg-neutral hover:border-tertiary hover:shadow-primary/5"
                }`}
              >
                <SpraySplat
                  className={`pointer-events-none absolute -bottom-6 -right-6 w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    feature.dark ? "text-tertiary/25" : "text-tertiary/15"
                  }`}
                />
                <span
                  className={`flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                    feature.dark
                      ? "bg-tertiary/20 text-tertiary"
                      : "bg-tertiary/40 text-primary"
                  }`}
                  style={{
                    borderRadius:
                      "255px 15px 225px 15px / 15px 225px 15px 255px",
                  }}
                >
                  {feature.icon}
                </span>
                <h3
                  className={`relative text-2xl font-black ${
                    feature.dark ? "text-neutral" : "text-primary"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`relative ${
                    feature.dark ? "text-neutral/70" : "text-primary/70"
                  }`}
                >
                  {feature.description}
                </p>
                {feature.tags ? (
                  <div className="relative mt-2 flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          feature.dark
                            ? "bg-tertiary/20 text-tertiary"
                            : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
