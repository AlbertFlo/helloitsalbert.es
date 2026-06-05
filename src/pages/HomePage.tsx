import Navbar from '@/sections/home/Navbar'
import Hero from '@/sections/home/Hero'
import Skills from '@/sections/home/Skills'
import Projects from '@/sections/home/Projects'
import CTASection from '@/sections/home/CTASection'
import Experience from '@/sections/home/Experience'
import Contact from '@/sections/home/Contact'

export default function HomePage() {
    return (
        <div className="relative min-h-screen bg-section-grain">
            <Navbar />
            <main>
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.7"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                </svg>
                <Hero />
                <Skills />
                <Projects />
                <CTASection />
                <Experience />
                <Contact />
            </main>
        </div>
    )
}