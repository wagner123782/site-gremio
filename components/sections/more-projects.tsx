"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

const proposals = [
  {
    title: "Cinema na escola",
    description:
      "Sessões de filme no contraturno e em datas especiais, com pipoca, votação do filme pela turma e debate depois — cultura de graça dentro da escola.",
  },
  {
    title: "Clube para sugestões de projetos",
    description:
      "Um clube permanente onde qualquer aluno pode apresentar ideias, montar o plano com ajuda do grêmio e ver a proposta sair do papel de verdade.",
  },
  {
    title: "Reunião aberta de 15 em 15 dias",
    description:
      "A cada quinzena, uma reunião com presença da gestão pra ouvir as demandas das turmas e prestar contas do que foi feito — pauta aberta, portas abertas.",
  },
  {
    title: "Área de descanso",
    description:
      "Um espaço tranquilo, com sombra e lugar pra sentar, pra quem quer conversar baixinho, descansar ou escapar do barulho nos intervalos.",
  },
  {
    title: "Momentos religiosos",
    description:
      "Momentos de fé organizados com respeito a todas as crenças, antes das aulas ou em datas especiais, pra quem quiser participar.",
  },
  {
    title: "Volta da bandinha",
    description:
      "Resgate da bandinha nos jogos e eventos da escola, com grupo de música animando a torcida e ensaios abertos pra quem quiser aprender.",
  },
  {
    title: "Voltar a competir",
    description:
      "Reativar as competições entre turmas e a participação da escola em campeonatos externos, com treinos regulares e torcida organizada.",
  },
  {
    title: "Monitores",
    description:
      "Rede de alunos monitores nas matérias em que você manda bem, pra ajudar os colegas com dificuldade e fortalecer o currículo de quem ensina.",
  },
];

export function MoreProjects() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="propostas" className="relative py-24">
      <Container>
        <Reveal>
          <SectionTitle
            title="E tem mais na manga"
            subtitle="Uma gestão não se resume a quatro projetos. Essas propostas também entram no nosso plano — clique pra saber como cada uma vai funcionar."
            marker
          />
        </Reveal>
        <div className="grid items-start gap-4 lg:grid-cols-2">
          {proposals.map((proposal, index) => {
            const isOpen = open === proposal.title;
            return (
              <Reveal key={proposal.title} delay={index * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-neutral transition-colors ${
                    isOpen ? "border-tertiary" : "border-primary/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen((current) =>
                        current === proposal.title ? null : proposal.title
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-sm font-black text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-primary">
                        {proposal.title}
                      </span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/40 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-primary/70">
                        {proposal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
