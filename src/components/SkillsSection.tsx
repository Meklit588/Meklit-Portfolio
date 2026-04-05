import { motion } from "framer-motion";

const skills = [
  {
    name: "TailwindCSS",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Spring Boot",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Git",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "MySQL",
    level: "Familiar",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Java",
    level: "Familiar",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Linux",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...skills, ...skills];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container overflow-hidden">
      {/* Centered heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="section-heading">
          Work &amp; <span className="gradient-text">Expertise</span>
        </h2>
      </motion.div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-4 skills-marquee">
          {doubled.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex-shrink-0 w-36 card-glass rounded-2xl px-5 py-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-default group"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {skill.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
