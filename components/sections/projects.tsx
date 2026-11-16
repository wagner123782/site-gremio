'use client';

import { SideGif } from '@/components/layout/mascot';
import { Container } from '@/components/ui/container';
import { Modal } from '@/components/ui/modal';
import { Reveal } from '@/components/ui/reveal';
import { SectionTitle } from '@/components/ui/section-title';
import { SpraySplat } from '@/components/ui/spray';
import type { JSX } from 'react';
import { useState } from 'react';

type Project = {
    number: string;
    title: string;
    tagline: string;
    category: string;
    icon: JSX.Element;
    details: string;
    items: string[];
    links: { label: string; url: string }[];
};

const projects: Project[] = [
    {
        number: '01',
        title: 'Oficina do Saber',
        tagline: 'Conhecimento criado por nós, para todos',
        category: 'Educação',
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
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
        details:
            'Uma plataforma de ensino onde nossa própria equipe produzirá aulas e materiais educativos, compartilhando conhecimento e ajudando outros alunos a aprender.',
        items: [
            'Aulas produzidas pela nossa equipe',
            'Materiais de apoio e conteúdos próprios',
            'Aprendizado gratuito e acessível',
        ],
        links: [
            {
                label: 'A oficina do saber',
                url: 'oficinadosaber.free.je/',
            },
        ],
    },
    {
        number: '02',
        title: 'Organização das saídas ao banheiro',
        tagline: 'Mais organização, menos interrupções',
        category: 'Organização',
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
        ),
        details:
            'Criar um sistema de tickets para organizar as saídas ao banheiro. Cada sala terá dois tickets disponíveis, que serão entregues aos alunos e devolvidos ao retornar, permitindo que outro colega utilize.',
        items: [
            'Dois tickets disponíveis por sala',
            'Devolução do ticket ao retornar',
            'Menos interrupções durante as aulas',
        ],
        links: [],
    },
    {
        number: '03',
        title: 'Clubes estudantis',
        tagline: 'Todo mundo tem um lugar onde pertence',
        category: 'Convivência',
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
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0113 0" />
                <circle cx="17.5" cy="9.5" r="2.5" />
                <path d="M16 19.5a5.5 5.5 0 015.5-5" />
            </svg>
        ),
        details:
            'Queremos criar clubes temáticos que se encontrem nos intervalos ou no contraturno, com espaço cedido pela escola e liderança escolhida pelos próprios participantes. Cada clube conta com um professor ou estudante mais velho responsável — e novos clubes nascem sempre que os alunos pedirem. A ideia é ter um lugar pra cada paixão.',
        items: [
            'Clubes de games, leitura, música, esporte, ciência e mais',
            'Encontros nos intervalos, com espaço e apoio da escola',
            'Líderes de clube escolhidos pelos próprios participantes',
        ],
        links: [
            {
                label: 'Ver ideias de clubes escolares',
                url: 'https://www.youtube.com/results?search_query=clubes+escolares+ideias+exemplos',
            },
        ],
    },
    {
        number: '04',
        title: 'Caixa de sugestões online',
        tagline: 'Sua ideia chega onde precisa chegar',
        category: 'Participação',
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
        details:
            'Um formulário online, anônimo e sempre aberto, ligado direto no grêmio. Toda sugestão é lida nas nossas reuniões quinzenais, respondida num mural público de respostas e, quando viável, vira projeto real na escola. Assim a voz do estudante não fica no papel — ela vira ação.',
        items: [
            'Formulário online anônimo, disponível a qualquer hora',
            'Toda sugestão lida e respondida pelo grêmio',
            'As melhores ideias viram projetos reais da escola',
        ],
        links: [
            {
                label: 'Ver exemplos de caixas de sugestões online',
                url: 'https://www.youtube.com/results?search_query=caixa+de+sugestoes+online+escola+formulario',
            },
        ],
    },
];

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-tertiary"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4 shrink-0"
        >
            <path d="M14 5h5v5" />
            <path d="M19 5l-9 9" />
            <path d="M19 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h4" />
        </svg>
    );
}

export function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projetos" className="relative overflow-hidden py-24">
      <SideGif
        src="/pingu.gif"
        width={631}
        height={512}
        className="absolute right-2 bottom-2 xl:right-4 xl:bottom-8"
        imgClassName="h-12 w-auto xl:h-28"
      />
            <Container>
                <Reveal>
                    <SectionTitle
                        title="Nossos projetos"
                        subtitle="Quatro entregas concretas da nossa gestão. Clique em cada projeto pra ver a ideia completa e links pra conhecer mais."
                        marker
                    />
                </Reveal>
                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal key={project.number} delay={index * 100}>
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label={`Conhecer o projeto ${project.title}`}
                                onClick={() => setSelected(project)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setSelected(project);
                                    }
                                }}
                                className="group relative flex h-full cursor-pointer flex-col gap-4 overflow-hidden rounded-3xl border border-primary/10 bg-neutral p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-tertiary hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black text-primary/5"
                                >
                                    {project.number}
                                </span>
                                <SpraySplat className="pointer-events-none absolute -bottom-6 -right-6 w-24 text-tertiary/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="relative flex items-center justify-between gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary/40 text-primary">
                                        {project.icon}
                                    </span>
                                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="relative text-2xl font-black text-primary">
                                    {project.title}
                                </h3>
                                <p className="relative -mt-2 text-sm font-bold text-secondary">
                                    {project.tagline}
                                </p>
                                <ul className="relative flex flex-col gap-2.5">
                                    {project.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <CheckIcon />
                                            <span className="text-primary/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="relative mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-secondary">
                                    Conhecer a ideia
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>

            <Modal
                open={selected !== null}
                onClose={() => setSelected(null)}
                label={selected ? `Projeto ${selected.title}` : 'Projeto'}
            >
                {selected ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 pr-10">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary/40 text-primary">
                                {selected.icon}
                            </span>
                            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                                {selected.category}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-primary">{selected.title}</h3>
                            <p className="text-sm font-bold text-secondary">{selected.tagline}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black tracking-widest text-primary/50 uppercase">
                                A ideia
                            </h4>
                            <p className="mt-2 text-primary/70">{selected.details}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black tracking-widest text-primary/50 uppercase">
                                O que entregamos
                            </h4>
                            <ul className="mt-2 flex flex-col gap-2">
                                {selected.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <CheckIcon />
                                        <span className="text-primary/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black tracking-widest text-primary/50 uppercase">
                                Quer ver mais?
                            </h4>
                            <ul className="mt-2 flex flex-col gap-2">
                                {selected.links.map((link) => (
                                    <li key={link.url}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 rounded-xl border border-primary/10 px-4 py-3 text-sm font-bold text-secondary transition-colors hover:border-tertiary hover:bg-tertiary/10"
                                        >
                                            {link.label}
                                            <ExternalIcon />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </Modal>
        </section>
    );
}
