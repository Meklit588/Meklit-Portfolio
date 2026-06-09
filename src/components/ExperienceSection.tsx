import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Mereb Technologies",
    location: "Addis Ababa, Ethiopia",
    duration: "Current",
    bullets: [
      "Develop and maintain scalable, high-performance web applications and SaaS products for European and North American clients.",
      "Build and optimize robust RESTful and gRPC APIs to ensure seamless integration between front-end UIs and back-end services.",
      "Utilize modern web technologies including JavaScript/TypeScript frameworks and back-end languages to deliver clean, testable code.",
      "Leverage AWS cloud infrastructure, serverless architectures, and Docker containers to maximize application speed and responsiveness.",
      "Collaborate with international cross-functional teams in Agile sprints, translating complex requirements into high-utility digital solutions.",
    ],
  },
  {
    role: "Full-stack Developer Intern",
    company: "Minab IT Solutions PLC",
    location: "Ethiopia",
    duration: "Internship",
    bullets: [
      "Contributed to building and maintaining the frontend of Hahu.jobs using React.js and Next.js.",
      "Assisted in developing backend APIs with Node.js and Express.js while managing data through MongoDB.",
      "Worked closely with the team to fix bugs, write tests using Jest, and improve platform features.",
      "Supported the development of scalable features serving thousands of job seekers and employers across Ethiopia.",
      "Gained hands-on full-stack experience working within a microservice architecture in an agile environment.",
    ],
  },
  {
    role: "Data Analyst & Junior Programmer",
    company: "XOKA IT SOLUTION",
    location: "",
    duration: "1 year 3 months",
    bullets: [
      "Developed data-driven solutions and contributed to full-stack web applications for various clients.",
    ],
  },
  {
    role: "ICT System Administrator Intern",
    company: "Ethiopian Customs Commission",
    location: "",
    duration: "Internship",
    bullets: [
      "Managed ICT infrastructure and supported government-level system administration and maintenance.",
    ],
  },
  {
    role: "ICT Network Administrator Intern",
    company: "Awash Bank",
    location: "",
    duration: "Internship",
    bullets: [
      "Assisted in network administration, monitoring, and troubleshooting across banking infrastructure.",
    ],
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
                  {exp.location && (
                    <span className="text-muted-foreground font-normal">— {exp.location}</span>
                  )}
                </p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
