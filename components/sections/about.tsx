import { SideGif } from '@/components/layout/mascot';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

const pillars = [
    {
        number: '01',
        title: 'Acolher quem chega',
        description:
            'Recepção especial pros primeiros anos, com atividades de integração pra ninguém se sentir sozinho na escola nova.',
        highlight: false,
    },
    {
        number: '02',
        title: 'Animar os intervalos',
        description:
            'Criar clubes didáticos e atividades para incentivar a interação entre os alunos.',
        highlight: false,
    },
    {
        number: '03',
        title: 'Dar voz aos estudantes',
        description:
            'Canais de escuta, assembleias de turma e representação de verdade pra escola ouvir o que você tem a dizer.',
        highlight: false,
    },
    {
        number: '04',
        title: 'Conectar gestão e estudantes',
        description:
            'Somos o intermediário entre a direção e as turmas: levamos as demandas de vocês pra gestão e trazemos as respostas de volta, com transparência.',
        highlight: true,
    },
];

const values = ['Acolhimento', 'Voz estudantil', 'Integração', 'Diversão', 'União', 'Respeito'];

export function About() {
    return (
        <section id="sobre" className="relative overflow-hidden py-24">
      <SideGif
        src="/pingui.gif"
        width={473}
        height={498}
        className="absolute bottom-2 left-2 xl:left-4 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2"
        imgClassName="h-14 w-auto xl:h-28"
      />
            <Container>
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div className="flex flex-col gap-5">
                            <span className="w-fit rounded-full bg-tertiary/40 px-4 py-1 text-sm font-bold text-primary">
                                Quem somos
                            </span>
                            <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                                Somos a chapa <span className="bg-clip-text ">Inovação</span>
                            </h2>
                            <p className="text-lg font-bold text-primary/70">
                                A Inovação nasceu de uma percepção simples: muita gente —
                                principalmente no primeiro ano — tem dificuldade de se enturmar e
                                não encontra nada legal pra fazer nos intervalos.
                            </p>
                            <p className="text-primary/70">
                                Nossa ideia central é cuidar do bem-estar e da integridade dos
                                estudantes: garantir que cada aluno tenha voz nas decisões da escola
                                e se conectar com todos — estudantes, turmas e gestão — pra
                                construir, juntos, um ambiente melhor pra todo mundo.
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {values.map((value) => (
                                    <span
                                        key={value}
                                        className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-bold text-primary/70"
                                    >
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="flex flex-col gap-4">
                        {pillars.map((pillar, index) => (
                            <Reveal key={pillar.number} delay={index * 120}>
                                <div
                                    className={`flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                        pillar.highlight
                                            ? 'border border-primary bg-primary hover:border-secondary hover:shadow-secondary/20'
                                            : 'border border-primary/10 bg-neutral hover:border-tertiary hover:shadow-primary/5'
                                    }`}
                                >
                                    <span className="text-4xl font-black text-tertiary">
                                        {pillar.number}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <h3
                                            className={`text-xl font-bold ${
                                                pillar.highlight ? 'text-neutral' : 'text-primary'
                                            }`}
                                        >
                                            {pillar.title}
                                        </h3>
                                        <p
                                            className={
                                                pillar.highlight
                                                    ? 'text-neutral/70'
                                                    : 'text-primary/70'
                                            }
                                        >
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>

            <Reveal delay={200}>
                <div className="mt-20 overflow-hidden border-y border-primary/10 py-5">
                    <div className="animate-marquee flex w-max items-center gap-10">
                        {[...values, ...values].map((value, index) => (
                            <span
                                key={`${value}-${index}`}
                                className="flex items-center gap-10 text-lg font-black uppercase tracking-widest text-primary/30"
                            >
                                {value}
                                <span className="h-2 w-2 rounded-full bg-tertiary" />
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
