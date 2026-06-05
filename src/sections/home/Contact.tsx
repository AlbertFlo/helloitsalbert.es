import { MapPin, Linkedin, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { sendContactEmail } from "@/services/email";
import { useState } from "react";

type SubmitStatus = {
    type: "success" | "error" | null;
    message: string;
};

export default function Contact() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
        type: null,
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        const result = await sendContactEmail(formData);

        if (result.ok) {
            setSubmitStatus({
                type: "success",
                message: "Message sent successfully. I'll respond as soon as possible.",
            });
            setFormData({ name: "", email: "", message: "" });
        } else {
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again later.",
            });
        }

        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <section id="contact" className="mx-auto md:py-30 py-20 relative bg-foreground z-10">
            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto container">
                {/* Contact Info */}
                <div ref={headerRef} className={`px-6 text-primary-foreground transition-opacity duration-300 ${headerVisible ? "animate-fade-in" : "opacity-0"}`}>
                    <div className="mb-10">
                        <span className="pb-6 font-body font-semibold text-secondary tracking-widest text-sm">
                            Contact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-primary uppercase mb-1 leading-tight">
                            Get In Touch
                        </h2>
                        <p className="leading-relaxed">
                            Send a message and I'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a
                            href="https://www.linkedin.com/in/albert-flores/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl hover:bg-surface transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-muted/10 flex items-center justify-center group-hover:bg-muted-foreground/60 transition-colors">
                                <Linkedin className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">LinkedIn</div>
                                <div className="font-medium flex flex-row gap-2 items-center">
                                    Albert Flores <ExternalLink className="w-3 h-3 text-primary-foreground" />
                                </div>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-1 rounded-xl hover:bg-surface transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-muted/10 flex items-center justify-center transition-colors">
                                <MapPin className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Location</div>
                                <div className="font-medium">Barcelona, ES</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-1 rounded-xl hover:bg-surface transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-muted/10 flex items-center justify-center transition-colors">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div className="font-medium">Currently Available</div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div ref={formRef} className={`px-8 rounded-3xl border border-primary/30 transition-opacity duration-300 animation-delay-300 ${formVisible ? "animate-fade-in" : "opacity-0"}`}>
                    <form className="text-primary-foreground space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder="Your name..."
                                value={formData.name}
                                onChange={handleChange}
                                className="text-sm w-full px-4 py-3 bg-surface rounded-xl border border-border focus:bg-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="text-sm w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary-foreground outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                                className="text-sm w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary-foreground outline-none transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-4 py-2 w-full bg-secondary hover:bg-background hover:text-primary text-black inline-block rounded-md font-body font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>

                        <div role="status" aria-live="polite">
                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}