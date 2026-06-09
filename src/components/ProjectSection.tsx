import { motion } from "framer-motion";
import { ExternalLink, Github, MapPin, Monitor, Server, Shield } from "lucide-react";

const projects = [
  {
    title: "Apadua GmbH — AI-Powered B2B Fintech & Enterprise Procurement SaaS",
    description:
      "Actively engineering a modular, event-driven B2B marketplace and procurement platform for a German AI enterprise client under strict European data security standards. Designing and integrating secure RESTful APIs to manage high-concurrency fintech workflows, complex vendor bidding processes, and automated data pipelines.",
    tags: ["Python", "Django Ninja", "Next.js", "DDD", "REST APIs", "Agile/Scrum"],
    icon: Shield,
    accent: "from-primary/20 to-primary/5",
    links: { github: "#", live: "#" },
    highlights: [
      { icon: Monitor, label: "Frontend", detail: "Next.js, modular UI, Vertical Slice Architecture" },
      { icon: Server, label: "Backend", detail: "Python (Django Ninja), DDD, event-driven architecture" },
      { icon: Shield, label: "Security & Scale", detail: "European data compliance, high-concurrency fintech workflows" },
    ],
  },
  {
    title: "Hahu Jobs — Ethiopia's Leading Online Job Portal",
    description:
      "Ethiopia's leading online job portal connecting job seekers with employers across various industries. Users can browse listings, apply for positions, while companies post vacancies and manage recruitment. Contributed to full-stack development using the MERN stack alongside Next.js for server-side rendering and Socket.io for real-time features. Collaborated with the engineering team to build and maintain scalable features within a microservice architecture, working with both MongoDB and MySQL for data management. Participated in testing and debugging using Jest to ensure platform reliability and performance, serving thousands of users across Ethiopia.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Socket.io", "Jest"],
    icon: Monitor,
    accent: "from-primary/15 to-primary/5",
    links: { github: "#", live: "https://www.hahu.jobs/" },
    highlights: [
      { icon: Monitor, label: "Frontend", detail: "React.js, Next.js (SSR), real-time UI with Socket.io" },
      { icon: Server, label: "Backend", detail: "Node.js, Express.js, microservice architecture, MongoDB & MySQL" },
    ],
  },
  {
    title: "Addis Ababa Bus Tracking System",
    description:
      "A full-stack real-time public transportation tracking platform for the city of Addis Ababa. Provides live bus location updates, route management, and comprehensive dashboards for city transport authorities.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket", "Leaflet Maps"],
    icon: MapPin,
    accent: "from-primary/20 to-primary/5",
    links: { github: "#", live: "#" },
    highlights: [
      { icon: Monitor, label: "Frontend", detail: "React, real-time maps, responsive dashboards" },
      { icon: Server, label: "Backend", detail: "Node.js, REST APIs, PostgreSQL, WebSockets" },
    ],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`card-glass glow-border p-8 md:p-10 bg-gradient-to-br ${project.accent}`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <project.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.links.github}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.links.live}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="Live demo"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {project.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/30"
                >
                  <h.icon className="text-primary mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="font-semibold text-xs text-foreground mb-0.5">{h.label}</p>
                    <p className="text-muted-foreground text-xs leading-snug">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
