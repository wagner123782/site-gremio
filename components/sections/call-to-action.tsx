import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SpraySplat, SpraySwipe } from "@/components/ui/spray";

const perks = [
  "Mande suas ideias",
  "Participe das reuniões",
  "Entre pra chapa",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-tertiary"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CallToAction() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="animate-hero-float absolute -top-16 -left-10 h-56 w-56 rounded-full bg-secondary/40 blur-3xl" />
              <div className="animate-hero-float-reverse absolute -right-12 -bottom-20 h-64 w-64 rounded-full bg-tertiary/25 blur-3xl" />
              <SpraySplat className="animate-hero-float absolute top-6 left-8 w-24 -rotate-12 text-tertiary/25" />
              <SpraySplat className="animate-hero-float-reverse absolute right-10 -bottom-4 w-32 rotate-6 text-secondary/40" />
            </div>

            <div className="relative flex flex-col items-center gap-6">
              <span className="rounded-full border border-tertiary/50 bg-tertiary/10 px-4 py-1 text-xs font-black tracking-widest text-tertiary uppercase">
                Vagas abertas
              </span>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight text-neutral sm:text-4xl">
                Quer fazer parte da{" "}
                <SpraySwipe>
                  <span className="text-primary">mudança</span>
                </SpraySwipe>
                ?
              </h2>
              <p className="max-w-xl text-lg font-bold text-neutral/70">
                Seja pra mandar ideias, ajudar na organização ou entrar pra
                chapa: tem sempre um lugar pra você na Inovação. É só dar o
                primeiro passo.
              </p>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <Button href="#contato">Quero participar</Button>
                <Button href="#projetos" variant="light">
                  Ver nossos projetos
                </Button>
              </div>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-sm font-bold text-neutral/70"
                  >
                    <CheckIcon />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
