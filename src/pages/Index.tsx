
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-border/40 mt-4">
        {/* Main footer grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-12">

          {/* Col 1 — Name + tagline */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground font-heading">Meklit Eshetu</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating innovative web solutions and solving real-world problems.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wide">Connect</h4>
            {/* Social icon buttons */}
            <div className="flex items-center gap-3">
              {[
                { icon: "github", href: "https://github.com/Meklit588", label: "GitHub" },
                { icon: "linkedin", href: "https://www.linkedin.com/in/meklit-eshetu-8b867124a", label: "LinkedIn" },
                { icon: "mail", href: "mailto:mekliteshetu9@gmail.com", label: "Email" },
                { icon: "telegram", href: "https://t.me/Maki236", label: "Telegram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  {s.icon === "github" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  )}
                  {s.icon === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                  {s.icon === "mail" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  )}
                  {s.icon === "telegram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  )}
                </a>
              ))}
            </div>
            {/* Contact details */}
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Email: <a href="mailto:mekliteshetu9@gmail.com" className="hover:text-primary transition-colors">mekliteshetu9@gmail.com</a></p>
              <p>Telegram: <a href="https://t.me/Maki236" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@Maki236</a></p>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-border/40 py-5">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Meklit Eshetu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
