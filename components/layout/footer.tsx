import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SpraySplat } from "@/components/ui/spray";

const SUGGESTION_BOX_URL = "https://caixinha.infinityfree.me";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacoes", label: "Atuações" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const contactLinks = [
  { label: "gremioinovacao0@gmail.com", href: "mailto:gremioinovacao0@gmail.com" },
  {
    label: "@gremio_inovacao.pbmg",
    href: "https://instagram.com/gremio_inovacao.pbmg",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-neutral">
      <SpraySplat className="animate-hero-float pointer-events-none absolute -top-8 left-[8%] w-28 -rotate-12 text-tertiary/15" />
      <SpraySplat className="animate-hero-float-reverse pointer-events-none absolute -bottom-10 right-[6%] w-36 rotate-6 text-secondary/25" />
      <Container className="relative flex flex-col gap-12 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-gremio1.PNG"
                alt="Logo do Grêmio Inovação"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold text-neutral">
                  Grêmio Inovação
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">
                  EREM Benedita Moraes Guerra
                </span>
              </span>
            </div>
            <p className="max-w-sm text-sm text-neutral/70">
              O grêmio estudantil que conecta estudantes e gestão pra construir
              uma escola melhor pra todo mundo — com voz, integração e
              intervalo bem aproveitado.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-black tracking-widest text-neutral/50 uppercase">
              Navegação
            </span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral/70 transition-colors hover:text-tertiary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-black tracking-widest text-neutral/50 uppercase">
              Fale com a gente
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={SUGGESTION_BOX_URL}
                className="flex w-fit items-center gap-2 rounded-full border border-tertiary/40 bg-tertiary/10 px-3 py-1.5 text-xs font-black tracking-wider text-tertiary uppercase transition-colors hover:bg-tertiary/20"
              >
                Caixa de sugestões
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
                </span>
              </a>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-neutral/70 transition-colors hover:text-tertiary"
                >
                  {link.label}
                </a>
              ))}
              <span className="text-sm text-neutral/70">
                Sala do grêmio — no intervalo
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral/10 pt-6 text-xs text-neutral/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Grêmio Inovação — EREM Benedita Moraes Guerra.</span>
          <span>Feito por estudantes, pra estudantes.</span>
        </div>
      </Container>
    </footer>
  );
}
