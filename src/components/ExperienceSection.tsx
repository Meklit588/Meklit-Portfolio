import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst & Junior Programmer",
    company: "XOKA IT SOLUTION",
    duration: "1 year 3 months",
    description: "Developed data-driven solutions and contributed to full-stack web applications for various clients.",
  },
  {
    role: "ICT System Administrator Intern",
    company: "Ethiopian Customs Commission",
    duration: "Internship",
    description: "Managed ICT infrastructure and supported government-level system administration and maintenance.",
  },
  {
    role: "ICT Network Administrator Intern",
    company: "Awash Bank",
    duration: "Internship",
    description: "Assisted in network administration, monitoring, and troubleshooting across banking infrastructure.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Work Experience</span>
        </h2>
        <p className="text-muted-foreground mb-12">My professional journey so far.</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="card-glass p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="font-mono text-xs text-primary">{exp.duration}</span>
                </div>
                <p className="text-primary/80 text-sm font-medium flex items-center gap-2 mb-3">
                  <Briefcase size={14} />
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
