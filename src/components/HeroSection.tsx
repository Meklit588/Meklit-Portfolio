import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <span className="badge bg-primary/10 border border-primary/20 text-primary text-xs px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-2">
              <span className="text-foreground font-heading">Building Tomorrow's</span>
              <br />
              <span className="gradient-text font-heading">High-Performance Web</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hi, I'm{" "}
            <span className="text-foreground font-semibold">Meklit Eshetu</span>. A{" "}
            <span className="text-primary font-medium">Full Stack Developer</span> &amp; Creative
            Problem Solver dedicated to crafting seamless digital experiences
            with{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">Node.js</span>, and{" "}
            <span className="text-primary">PostgreSQL</span>.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a href="#projects" className="btn-primary text-base shadow-lg shadow-primary/20">
              <ExternalLink size={18} />
              Explore My Work
            </a>
            <a href="#contact" className="btn-outline text-base">
              <Mail size={18} />
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <span className="text-muted-foreground text-xs font-mono tracking-widest uppercase">scroll</span>
          <ArrowDown className="text-primary" size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
