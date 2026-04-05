import { motion } from "framer-motion";
import { ExternalLink, Github, MapPin, Monitor, Server, Shield } from "lucide-react";

const projects = [
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
        <span className="section-label">What I've built</span>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A selection of projects that showcase my technical range and impact.
        </p>
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
