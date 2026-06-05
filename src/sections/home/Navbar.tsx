import { useEffect, useState } from "react"
import type { JSX } from "react"
import Link from "@/components/Link"
import { Menu, X, Mail } from "lucide-react"
import { SplitUnderlineLink } from "@/components/SplitUnderlineLink"
import { useMediaQuery } from "@/hooks/useMediaQuery"

type NavbarMode = "default" | "project"

type NavbarProps = {
    mode?: NavbarMode
}

const defaultLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
]

const projectLinks = [
    { href: "/", label: "Home" },
]

export default function Navbar({ mode = "default" }: NavbarProps): JSX.Element {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const mobileMenuOpen = isMobileMenuOpen && !isDesktop

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const closeMenu = () => setIsMobileMenuOpen(false)
    const links = mode === "project" ? projectLinks : defaultLinks
    const contactHref = mode === "project" ? "/#contact" : "#contact"
    const notScrolledBg = mode === "project" ? "bg-foreground" : "bg-transparent"
    const headerClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "shadow-sm bg-transparency-nav" : notScrolledBg}`

    return (
        <header className={headerClassName}>
            <nav className={`container mx-auto px-6 py-2 flex items-center gap-8 justify-between ${mobileMenuOpen ? "bg-primary" : ""}`}>
                <a
                    href="/"
                    className={`flex sm:flex-row flex-col sm:items-center items-start font-extralight uppercase font-heading tracking-tight text-primary-foreground transition-all duration-500 ${isScrolled ? "text-2xl" : "md:text-3xl text-xl"}`}
                >
                    Albert Flores{" "}
                    <span className="text-primary-foreground capitalize text-base sm:pl-5 pl-0 tracking-normal">
                        Frontend Developer
                    </span>
                </a>

                <div className="hidden lg:flex flex-1 justify-end gap-1 text-primary-foreground">
                    <div className="py-1 flex items-center gap-8 text-sm">
                        {links.map((link) => (
                            <SplitUnderlineLink key={link.href} href={link.href}> 
                                {link.label}
                            </SplitUnderlineLink>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Link href={contactHref} className="text-sm" theme="secondary" size="sm" icon={<Mail className="w-4 h-4" />}>
                        Contact Me
                    </Link>
                </div>

                <button
                    className="lg:hidden p-2 text-primary-foreground"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="lg:hidden animate-fade-in">
                    <div className="container bg-background mx-auto px-10 py-8 flex flex-col gap-4 min-h-screen">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-md text-primary font-medium hover:text-foreground py-0"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link href={contactHref} onClick={closeMenu} className="bg-secondary me-auto mt-5" size="md" icon={<Mail className="w-4 h-4" />}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}