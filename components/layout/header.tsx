'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#atuacoes', label: 'Atuações' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
];

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('inicio');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.href.slice(1)))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 border-b bg-neutral/80 backdrop-blur transition-all duration-300 ${
                scrolled || open
                    ? 'border-primary/10 shadow-[0_8px_30px_rgba(0,20,33,0.06)]'
                    : 'border-transparent'
            }`}
        >
            <Container className="flex h-20 items-center justify-between gap-4">
                <a
                    href="#inicio"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5"
                    aria-label="Ir para o início"
                >
                    <Image
                        src="/logo-gremio1.PNG"
                        alt="Logo do Grêmio Inovação"
                        width={100}
                        height={100}
                        priority
                        className="h-12 w-auto md:h-full md:w-auto"
                    />
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
                    {navLinks.map((link) => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? 'true' : undefined}
                                className={`relative text-sm font-bold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-tertiary after:transition-all after:duration-300 hover:text-primary ${
                                    isActive
                                        ? 'text-primary after:w-full'
                                        : 'text-primary/60 after:w-0 hover:after:w-full'
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <Button href="#contato" className="hidden h-10 px-5 text-sm md:inline-flex">
                        Participe
                    </Button>
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/5 md:hidden"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                        >
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </Container>

            {open ? (
                <div id="mobile-menu" className="border-t border-primary/10 bg-neutral md:hidden">
                    <Container className="flex flex-col gap-1 py-4">
                        {navLinks.map((link) => {
                            const isActive = active === link.href.slice(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                                        isActive
                                            ? 'bg-tertiary/40 text-primary'
                                            : 'text-primary/70 hover:bg-primary/5 hover:text-primary'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <Button href="#contato" className="mt-2" onClick={closeMenu}>
                            Participe
                        </Button>
                    </Container>
                </div>
            ) : null}
        </header>
    );
}
