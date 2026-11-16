import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { About } from '@/components/sections/about';
import { CallToAction } from '@/components/sections/call-to-action';
import { Contact } from '@/components/sections/contact';
import { Features } from '@/components/sections/features';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { MoreProjects } from '@/components/sections/more-projects';
import { PaintDivider } from '@/components/ui/divider';

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <Hero />
                <PaintDivider color="tertiary" />
                <About />
                <PaintDivider color="secondary" flip />
                <Projects />
                <PaintDivider color="tertiary" flip />
                <MoreProjects />
                <PaintDivider color="secondary" />
                <Features />
                <PaintDivider color="secondary" />
                <CallToAction />
                <PaintDivider color="tertiary" />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
