import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowRight, Filter, Layers } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCountUp } from "@/hooks/use-count-up";

const projects = [
  {
    title: "CHAOSS Education",
    description: "Building open source education resources and curriculum to help newcomers understand and contribute to open source communities.",
    tags: ["Education", "Open Source", "Community"],
    color: "border-l-primary",
    bg: "from-primary/5 to-transparent",
    stars: 120,
    forks: 45,
    category: "Education",
  },
  {
    title: "Community Health Analytics",
    description: "Tools and metrics for measuring the health and sustainability of open source communities and projects.",
    tags: ["Python", "Analytics", "CHAOSS"],
    color: "border-l-accent",
    bg: "from-accent/5 to-transparent",
    stars: 85,
    forks: 32,
    category: "Analytics",
  },
  {
    title: "Android Starter Kit",
    description: "A modern Android app template with clean architecture, Kotlin coroutines, Jetpack Compose, and best practices baked in.",
    tags: ["Android", "Kotlin", "Jetpack"],
    color: "border-l-lime",
    bg: "from-lime/5 to-transparent",
    stars: 200,
    forks: 60,
    category: "Mobile",
  },
  {
    title: "Open Source Mentorship Platform",
    description: "A platform connecting aspiring developers with experienced open source mentors for guided contributions.",
    tags: ["React", "Node.js", "Mentoring"],
    color: "border-l-violet",
    bg: "from-violet/5 to-transparent",
    stars: 150,
    forks: 38,
    category: "Web",
  },
  {
    title: "Project Management Dashboard",
    description: "Comprehensive dashboard for managing open source projects with team collaboration, milestones, and progress tracking.",
    tags: ["TypeScript", "React", "Dashboard"],
    color: "border-l-gold",
    bg: "from-gold/5 to-transparent",
    stars: 95,
    forks: 22,
    category: "Web",
  },
  {
    title: "DevRel Toolkit",
    description: "A collection of tools and templates for developer relations, community engagement, and event management.",
    tags: ["DevRel", "Community", "Tools"],
    color: "border-l-cyan",
    bg: "from-cyan/5 to-transparent",
    stars: 70,
    forks: 18,
    category: "Tools",
  },
];

const categories = ["All", "Education", "Analytics", "Mobile", "Web", "Tools"];

const ContributionCounter = ({ target, label }: { target: number; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl font-display font-bold text-primary-foreground">
        {count}+
      </div>
      <p className="text-sm text-primary-foreground/70 mt-1">{label}</p>
    </motion.div>
  );
};

const contributions = [
  { label: "Commits this year", value: "1,200+" },
  { label: "Pull Requests", value: "350+" },
  { label: "Issues Resolved", value: "200+" },
  { label: "Repositories", value: "40+" },
];

const Projects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute inset-0 -z-10 bg-gradient-primary rounded-3xl opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-6">
            Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Things I've{" "}
            <span className="text-gradient">built</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of open source projects and tools I've contributed to or created.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              layout
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${project.bg} border border-border border-l-4 ${project.color} shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col backdrop-blur-sm`}
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Star size={14} /> {project.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={14} /> {project.forks}
                </span>
                <div className="flex-1" />
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contributions */}
      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute -inset-20 -z-10 bg-animated-gradient rounded-3xl opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-hero rounded-3xl shadow-glow p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-dots" />
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-2">Open Source Contributions</h2>
            <p className="text-primary-foreground/80">My impact across the open source ecosystem</p>
          </div>
          <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ContributionCounter target={1200} label="Commits this year" />
            <ContributionCounter target={350} label="Pull Requests" />
            <ContributionCounter target={200} label="Issues Resolved" />
            <ContributionCounter target={40} label="Repositories" />
          </div>
        </motion.div>
      </section>

      {/* Open Source Philosophy */}
      <section className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <Layers className="text-primary mb-4" size={32} />
              <h2 className="text-2xl font-display font-bold mb-4 text-foreground">My Open Source Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe that open source software is more than just code—it's about building communities,
                sharing knowledge, and creating tools that empower everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every contribution, no matter how small, moves the needle forward. Whether it's documentation,
                code, design, or community support—it all matters.
              </p>
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's collaborate <ArrowRight size={16} />
              </button>
            </div>
            <div className="bg-muted/50 p-10 md:p-14 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {["Fork", "Star", "PR", "Issue", "Review", "Merge", "Deploy", "Ship"].map((action, i) => (
                  <motion.div
                    key={action}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 rounded-xl bg-card border border-border text-center text-sm font-medium text-foreground shadow-soft"
                  >
                    {action}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
