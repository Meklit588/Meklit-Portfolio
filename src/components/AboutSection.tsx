import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Experience" },
  { value: "3+", label: "Major Projects" },
  { value: "3+", label: "Companies Worked With" },
];



const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left — Bio + stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              I'm a{" "}
              <span className="text-foreground font-semibold">Full Stack Developer</span>{" "}
              with a keen eye for design and a love for clean, efficient code.
              I specialize in creating beautiful and functional web applications
              that solve real-world problems and drive measurable results.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest in web technologies,
              contributing to open-source projects, and constantly leveling up
              my skills in system design and cloud architecture.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass p-5 text-center"
              >
                <p className="text-3xl font-bold gradient-text font-heading mb-1">
                  {s.value}
                </p>
                <p className="text-muted-foreground text-xs leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl scale-110" />
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl w-full max-w-sm">
              <img
                src="/IMG_5167.JPG"
                alt="Meklit Eshetu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
