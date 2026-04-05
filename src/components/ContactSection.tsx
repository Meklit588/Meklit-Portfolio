import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/mekliteshetu",
    value: "@mekliteshetu",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/meklit-eshetu",
    value: "meklit-eshetu",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:mekliteshetu9@gmail.com",
    value: "mekliteshetu9@gmail.com",
  },
  {
    label: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/mekliteshetu",
    value: "@mekliteshetu",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a mailto link with form values
    const mailto = `mailto:mekliteshetu9@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all";

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="section-heading">
          Get in <span className="gradient-text">Touch</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="card-glass p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
               
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
  
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center text-base shadow-lg shadow-primary/20"
            >
              <Send size={18} />
              {sent ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
