import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { SpraySplat } from "@/components/ui/spray";
import { SideGif } from "@/components/layout/mascot";

const president = {
  name: "Nome Completo",
  role: "Presidente",
  bio: "Comanda a gestão, articula todas as frentes da chapa e representa o grêmio junto à direção da escola.",
};

const members = [
  { name: "Nome Completo", role: "Vice-presidente" },
  { name: "Nome Completo", role: "Secretário-geral" },
  { name: "Nome Completo", role: "1º Secretário" },
  { name: "Nome Completo", role: "2º Secretário" },
  { name: "Nome Completo", role: "1º Tesoureiro" },
  { name: "Nome Completo", role: "2º Tesoureiro" },
  { name: "Nome Completo", role: "Orador(a)" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  return (
    <section id="chapa" className="relative overflow-hidden py-24">
      <SideGif
        src="/p.gif"
        width={500}
        height={534}
        className="absolute bottom-2 left-2 xl:left-4 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2"
        imgClassName="h-14 w-auto xl:h-28"
      />
      <Container>
        <Reveal>
          <SectionTitle
            title="Nossa chapa"
            subtitle="As pessoas que vão colocar o plano em prática — cada uma com sua função pra Inovação entregar tudo isso."
            marker
          />
        </Reveal>

        <Reveal>
          <div className="group relative mb-6 overflow-hidden rounded-3xl border border-primary/10 bg-neutral p-8 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary hover:shadow-lg hover:shadow-primary/5 sm:p-10">
            <SpraySplat className="pointer-events-none absolute -top-6 right-8 w-28 text-tertiary/15" />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-tertiary/40 text-3xl font-black text-primary ring-4 ring-tertiary/30 transition-transform duration-300 group-hover:scale-105">
                {initials(president.name)}
              </span>
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                  {president.role}
                </span>
                <span className="text-3xl font-black text-primary">
                  {president.name}
                </span>
                <p className="text-primary/70">{president.bio}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <Reveal key={member.role} delay={index * 80}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-primary/10 bg-neutral p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-tertiary hover:shadow-lg hover:shadow-primary/5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-tertiary/40 text-lg font-black text-primary ring-4 ring-tertiary/30 transition-transform duration-300 group-hover:scale-105">
                  {initials(member.name)}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-primary">{member.name}</span>
                  <span className="text-sm font-bold text-secondary">
                    {member.role}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={members.length * 80}>
            <a
              href="#contato"
              className="flex h-full flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-primary/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary/5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-2xl font-black text-secondary">
                +
              </span>
              <span className="font-bold text-primary">Quer fazer parte?</span>
              <span className="text-sm text-primary/60">
                Vagas de apoio abertas no início da gestão — fale com a gente!
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
