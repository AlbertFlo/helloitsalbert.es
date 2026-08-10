import Link from "@/components/Link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function CTASection(){
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
	const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

    return (
		<section id="cta-section" className="md:py-25 py-20 relative overflow-hidden bg-primary text-primary-foreground">
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div ref={headerRef} className="text-center mx-auto max-w-xl mb-12">
					<h2
						className={`text-4xl md:text-5xl font-bold mt-4 mb-6 transition-opacity duration-300 ${headerVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}`}
					>
						Let's Work Together
					</h2>
					<p className={`text-primary-foreground ${headerVisible ? "animate-fade-in animation-delay-200" : "opacity-0 transition-opacity duration-300"}`}>
						Got a project in mind? I'd love to hear about it, whether it's a new idea or something that needs a fresh perspective.
					</p>
				</div>
                
                {/* CTAs */}
                <div ref={ctaRef} className={`flex flex-wrap justify-center gap-4 transition-opacity duration-300 ${ctaVisible ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
                <Link href="#contact" size="sm" theme="secondary">
                    Contact Me
                </Link>
                </div>
			</div>
		</section>
	)
}