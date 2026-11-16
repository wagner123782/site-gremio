import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SpraySplat, SpraySwipe } from "@/components/ui/spray";
import { Mascot } from "@/components/layout/mascot";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="animate-hero-float absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-tertiary/30 blur-3xl" />
        <div className="animate-hero-float-reverse absolute -right-32 bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-tertiary/25 blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-hero-orbit relative h-[42rem] w-[42rem] rounded-full border border-tertiary/20">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-tertiary/80" />
            <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-tertiary" />
            <span className="absolute top-[72%] left-[10%] h-2.5 w-2.5 rounded-full bg-tertiary/60" />
          </div>
        </div>
        <div className="absolute inset-0 hidden items-center justify-center sm:flex">
          <div className="animate-hero-orbit-reverse relative h-[26rem] w-[26rem] rounded-full border border-dashed border-tertiary/25">
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-tertiary" />
            <span className="absolute top-1/2 -left-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-tertiary/70" />
          </div>
        </div>
      </div>

      <div className="absolute right-2 bottom-2 lg:right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 xl:right-16">
        <Mascot />
      </div>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="rounded-full bg-tertiary/40 px-4 py-1 text-sm font-bold text-primary">
            Grêmio Inovação - EREM Benedita Moraes Guerra
          </span>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <SpraySplat className="absolute -top-10 -left-8 w-36 rotate-12 text-tertiary/30" />
            <h1 className="relative max-w-3xl text-4xl font-black tracking-tight text-primary sm:text-6xl">
              <SpraySwipe>Inovação</SpraySwipe> para transformar a nossa escola
            </h1>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p className="max-w-2xl text-lg font-bold text-primary/70">
            Somos o grêmio estudantil da EREM Benedita Moraes Guerra. Conheça
            nossas ações, participe das decisões e ajude a transformar a nossa
            escola.
          </p>
        </Reveal>
        <Reveal delay={360}>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button href="#contato">Fale com a gente</Button>
          <Button href="#atuacoes" variant="outline">
            Conheça as ações
          </Button>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
