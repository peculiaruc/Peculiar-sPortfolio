import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Clock, Zap, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What services do you offer?", a: "Open source consulting, community management, software development, Android development, and technical mentorship." },
  { q: "Are you available for freelance work?", a: "Yes! I'm open to consulting and freelance opportunities, especially in open source and community-focused projects." },
  { q: "How can I get involved in your open source projects?", a: "Head over to my Projects page and pick any repository that interests you. Issues labeled 'good first issue' are great starting points!" },
  { q: "Do you offer mentorship?", a: "Absolutely! I'm passionate about helping developers grow. Reach out through this form and let's discuss how I can help." },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-96 h-96 bg-accent/12 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-violet/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

      <section className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Let's{" "}
            <span className="text-gradient">connect</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project idea, want to collaborate on open source, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            { icon: Mail, label: "Email Me", value: "peculiarumeh02@gmail.com", color: "text-primary", bg: "from-primary/10", border: "border-primary/30" },
            { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "text-accent", bg: "from-accent/10", border: "border-accent/30" },
            { icon: Calendar, label: "Availability", value: "Open for projects", color: "text-violet", bg: "from-violet/10", border: "border-violet/30" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`p-5 rounded-2xl bg-gradient-to-br ${card.bg} to-transparent border ${card.border} shadow-soft text-center backdrop-blur-sm hover:shadow-card transition-all`}
            >
              <card.icon className={`mx-auto mb-2 ${card.color}`} size={24} />
              <p className="text-sm font-semibold text-foreground">{card.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 transition-opacity"
            >
              {submitted ? "Sent! ✓" : <>Send Message <Send size={18} /></>}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border shadow-soft backdrop-blur-sm">
              <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">peculiarumeh02@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-sm">Available Worldwide</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-border shadow-soft backdrop-blur-sm">
              <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", color: "hover:bg-foreground/10", link: "https://github.com/peculiaruc" },
                  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-primary/10", link: "https://www.linkedin.com/in/peculiar-c-umeh/" },
                  { icon: Twitter, label: "Twitter", color: "hover:bg-primary/10", link: "https://twitter.com/peculiarumeh" },
                ].map((social) => (
                  <a
                    target="_blank"
                    key={social.label}
                    href={social.link}
                    className={`p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground ${social.color} transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
              <Zap className="mb-2" size={24} />
              <h3 className="font-display font-semibold text-lg mb-2">Open for Opportunities</h3>
              <p className="text-sm opacity-90">
                I'm always interested in collaborating on open source projects,
                consulting on community management, or discussing new ideas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-display font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-medium text-foreground text-sm">{faq.q}</span>
                  <MessageSquare size={16} className={`text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
