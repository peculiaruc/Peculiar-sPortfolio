import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Code2, Users, BookOpen, Smartphone, Zap, Award, Globe, MessageSquare, ChevronRight, Briefcase, Heart, Target, Lightbulb, Rocket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCountUp } from "@/hooks/use-count-up";
import SpeakingEngagements from "@/components/about/SpeakingEngagements";

const roles = [
  { icon: Code2, label: "Software Developer", desc: "Clean, maintainable code", color: "text-primary", bg: "from-primary/10 to-primary/5", borderColor: "border-primary/30" },
  { icon: Users, label: "Community Builder", desc: "Empowering open source", color: "text-accent", bg: "from-accent/10 to-accent/5", borderColor: "border-accent/30" },
  { icon: BookOpen, label: "Open Source Educator", desc: "Teaching & mentoring", color: "text-violet", bg: "from-violet/10 to-violet/5", borderColor: "border-violet/30" },
  { icon: Smartphone, label: "Android Developer", desc: "Kotlin & Jetpack", color: "text-lime", bg: "from-lime/10 to-lime/5", borderColor: "border-lime/30" },
];

const featuredWork = [
  {
    title: "CHAOSS Education",
    desc: "Building open source education resources and curriculum for newcomers.",
    tags: ["Education", "Open Source"],
    accent: "border-l-primary",
    bg: "from-primary/5 to-cyan/5"
  },
  {
    title: "Community Health Analytics",
    desc: "Tools & metrics for measuring open source community sustainability.",
    tags: ["Python", "Analytics"],
    accent: "border-l-accent",
    bg: "from-accent/5 to-gold/5"
  },
  {
    title: "Android Starter Kit",
    desc: "Modern Android template with Kotlin, Jetpack Compose, and clean architecture.",
    tags: ["Android", "Kotlin"],
    accent: "border-l-violet",
    bg: "from-violet/5 to-lime/5"
  },
];

const testimonials = [
  {
    quote: "An exceptional mentor who truly understands the open source ecosystem. Their guidance helped our team ship faster and more confidently.",
    name: "Sarah Chen",
    role: "Engineering Lead",
    avatar: "SC",
    color: "from-primary/10 to-transparent",
    iconColor: "text-primary"
  },
  {
    quote: "Their community management skills are world-class. They built a thriving ecosystem around our project from scratch.",
    name: "James Okafor",
    role: "Project Founder",
    avatar: "JO",
    color: "from-accent/10 to-transparent",
    iconColor: "text-accent"
  },
  {
    quote: "Working with them on Android projects has been incredible. Clean code, great architecture, and always willing to teach.",
    name: "Maria Santos",
    role: "Mobile Developer",
    avatar: "MS",
    color: "from-violet/10 to-transparent",
    iconColor: "text-violet"
  },
];

const expertise = [
  { icon: Briefcase, title: "Project Management", desc: "Leading cross-functional teams to deliver impactful products on time.", bgGradient: "from-primary/10 via-primary/5 to-transparent", accentColor: "bg-primary/20 text-primary", bgImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", gradientOverlay: "from-primary/70 to-primary/50" },
  { icon: Globe, title: "Open Source Strategy", desc: "Building sustainable open source programs and community governance.", bgGradient: "from-accent/10 via-accent/5 to-transparent", accentColor: "bg-accent/20 text-accent", bgImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYW18ZW58MHx8MHx8fDA%3D", gradientOverlay: "from-accent/70 to-accent/50" },
  { icon: Lightbulb, title: "Technical Consulting", desc: "Helping organizations adopt best practices in software development.", bgGradient: "from-violet/10 via-violet/5 to-transparent", accentColor: "bg-violet/20 text-violet", bgImage: "https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", gradientOverlay: "from-violet/70 to-violet/50" },
  { icon: Target, title: "Program Management", desc: "Driving large-scale initiatives across multiple stakeholders.", bgGradient: "from-lime/10 via-lime/5 to-transparent", accentColor: "bg-lime/20 text-lime", bgImage: "https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", gradientOverlay: "from-lime/70 to-lime/50" },
  { icon: Heart, title: "Developer Relations", desc: "Creating bridges between engineering teams and their communities.", bgGradient: "from-cyan/10 via-cyan/5 to-transparent", accentColor: "bg-cyan/20 text-cyan", bgImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", gradientOverlay: "from-cyan/70 to-cyan/50" },
  { icon: Rocket, title: "Product Strategy", desc: "Turning ideas into shipped products with clear roadmaps.", bgGradient: "from-gold/10 via-gold/5 to-transparent", accentColor: "bg-gold/20 text-gold", bgImage: "https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", gradientOverlay: "from-gold/70 to-gold/50" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const StatCounter = ({ target, label }: { target: number; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-primary-foreground">
        {count}+
      </div>
      <p className="mt-2 text-primary-foreground/80 font-medium text-sm">{label}</p>
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-60 -left-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-lime/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      {/* Hero */}
      <section className="relative container mx-auto px-6 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-primary rounded-3xl opacity-40" />
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-8">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                Open Source Advocate
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            >
              Building the{" "}
              <span className="text-gradient">future</span>{" "}
              of open source
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Software Engineer & Community Builder driving innovation through open-source projects,
              mentorship, and cross-functional leadership.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  navigate("/projects");
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground font-medium rounded-lg shadow-glow hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-4 pt-2" >
              {[
                { icon: Github, label: "GitHub", link: "https://github.com/peculiaruc" },
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/peculiar-c-umeh/" },
                { icon: Twitter, label: "Twitter", link: "https://x.com/peculiarpec" },
              ].map((social, i) => (
                <a
                  target="_blank"
                  key={i}
                  href={social.link}
                  className={`text-muted-foreground hover:text-primary transition-colors`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-20 blur-2xl scale-105" />
              <img
                src="./myself.jpg"
                alt="Abstract geometric portrait"
                className="relative rounded-3xl shadow-card w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles */}
      <section className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${role.bg} border ${role.borderColor} shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <role.icon className={`${role.color} mb-3 relative z-10`} size={28} />
              <h3 className="font-display font-semibold text-foreground relative z-10">{role.label}</h3>
              <p className="text-sm text-muted-foreground mt-1 relative z-10">{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative container mx-auto px-6 py-8">
        <div className="absolute inset-0 -z-10 bg-mesh rounded-3xl opacity-30" style={{ height: "100%", width: "100%" }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-hero rounded-3xl shadow-glow p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-grid" />
          <div className="absolute inset-0 opacity-10 bg-wave" />
          <div className="relative z-10 grid md:grid-cols-4 gap-10 text-center">
            <StatCounter target={5} label="Years Experience" />
            <StatCounter target={20} label="Open Source Projects" />
            <StatCounter target={100} label="People Mentored" />
            <StatCounter target={50} label="Talks & Workshops" />
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="relative container mx-auto px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-cool-subtle rounded-3xl opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">What I bring to the table</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${exp.bgImage}')` }}
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradientOverlay}`} />
              
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl ${exp.accentColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <exp.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Featured Work */}
      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute inset-0 -z-10 bg-gradient-accent-subtle rounded-3xl opacity-50" style={{ height: "100%" }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Selected projects</h2>
          </div>
          <button
            onClick={() => {
              navigate("/projects");
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all text-sm"
          >
            View all projects <ChevronRight size={16} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredWork.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${project.bg} border border-border border-l-4 ${project.accent} shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col backdrop-blur-sm`}
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* speaking-engagements */}
      <SpeakingEngagements />

      {/* Testimonials */}
      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute inset-0 -z-10 bg-gradient-violet rounded-3xl opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">What people say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${t.color} border border-border shadow-soft backdrop-blur-sm`}
            >
              <MessageSquare className={`${t.iconColor} mb-4`} size={28} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-primary-foreground text-sm font-bold border border-border`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute -inset-20 -z-10 bg-mesh opacity-40 rounded-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-accent/10 to-violet/10 rounded-3xl border border-border shadow-soft overflow-hidden backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30 mb-4 w-fit">
                Achievements
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Recognized for <span className="text-gradient">impact</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From speaking at international conferences to leading open source initiatives
                that impact thousands of developers worldwide.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, text: "Open Source Community Leadership Award", color: "text-gold" },
                  { icon: Globe, text: "Speaker at 10+ international conferences", color: "text-cyan" },
                  { icon: Zap, text: "CHAOSS Project contributor & PM", color: "text-lime" },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-${a.color === 'text-gold' ? 'gold' : a.color === 'text-cyan' ? 'cyan' : 'lime'}/10 ${a.color}`}>
                      <a.icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{a.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden hidden md:flex items-center justify-center h-80 md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYW18ZW58MHx8MHx8fDA%3D" 
                alt="Community" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-accent/50 to-violet/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="text-center text-primary-foreground relative z-10">
                <div className="text-6xl md:text-7xl font-display font-bold mb-2">∞</div>
                <p className="text-lg font-medium opacity-90">Committed to open source forever</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative container mx-auto px-6 py-6 pb-8">
        <div className="absolute inset-0 -z-10 bg-gradient-lime opacity-30 rounded-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center max-w-2xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-border/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's build something <span className="text-gradient">amazing</span> together
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether you need help with open source strategy, community building, or software development—I'd love to collaborate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-hero text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 transition-opacity"
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
            <button
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
            >
              Learn More About Me
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
