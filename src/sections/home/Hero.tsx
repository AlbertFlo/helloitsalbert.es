import { Github, Linkedin } from "lucide-react";
import { AnimatedProfileVideo } from "@/components/AnimatedProfileVideo";

const orangeDots = [...Array(30)].map(() => ({
	left: `${Math.random() * 100}%`,
	top: `${Math.random() * 100}%`,
	animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
	animationDelay: `${Math.random() * 5}s`,
}));

export default function Hero() {

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
			{/* Grid BG */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#2c374aa1_1px,transparent_1px),linear-gradient(to_bottom,#2c374aa1_1px,transparent_1px)] bg-size-[64px_64px]" />

			{/* Orange Dots */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{orangeDots.map((dot, i) => (
					<div
						key={i}
						className="absolute w-1.5 h-1.5 rounded-full opacity-60"
						style={{ backgroundColor: "#FF6B35", ...dot }}
					/>
				))}
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">

					{/* Left Column */}
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-6xl md:text-6xl lg:text-8xl font-bold leading-none pb-6 animate-fade-in animation-delay-100 text-primary-foreground">
								Creating<span className="text-secondary">.</span><br />
								Coding<span className="text-secondary">.</span><br />
								Shipping<span className="text-secondary">.</span>
							</h1>
							<p className="text-md text-primary-foreground max-w-lg animate-fade-in animation-delay-200">
								I build the web the way it should feel: fast, accessible, and
								intentional. With 8+ years turning mockups into pixel-perfect,
								performant frontends, I bridge the gap between design and
								engineering across WordPress, React, and everything in between.
							</p>
						</div>

						<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
							{[
								{ icon: Github, href: "https://github.com/AlbertFlo", label: "GitHub" },
								{ icon: Linkedin, href: "https://www.linkedin.com/in/albert-flores/", label: "LinkedIn" },
							].map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									aria-label={`Follow me on ${social.label}`}
									rel="noopener noreferrer"
									className="p-2 rounded-full text-white hover:bg-background hover:text-primary transition-all duration-300 hover:translate-y-[-6px]">
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>

					{/* Right Column - Profile Image */}
					<div className="animate-fade-in animation-delay-300 h-full">
						<div className="relative max-w-md mx-auto h-full">
							<div className="absolute inset-0 rounded-3xl bg-linear-to-br from-muted/20 via-transparent to-muted/10 blur-xl animate-pulse" />
							<div className="relative rounded-xl p-2 md:h-full h-96">
								<AnimatedProfileVideo />
								<div className="absolute -bottom-4 -right-4 bg-transparency rounded-xl px-4 py-3 animate-float">
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
										<span className="text-sm font-medium">Available for work</span>
									</div>
								</div>

								<div className="absolute -top-4 -left-4 bg-transparency rounded-xl px-4 py-3 animate-float animation-delay-500">
									<div className="text-2xl font-bold text-primary">8+</div>
									<div className="text-xs text-muted-foreground">Years Exp.</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}