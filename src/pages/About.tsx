import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Users, GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCountUp } from "@/hooks/use-count-up";
import SpeakingEngagements from "../components/about/SpeakingEngagements";
import openSourceImg from "@/assets/open_source.png";
import computerImg from "@/assets/computer1.png";
import androidImg from "@/assets/android-1.png";
import mentoringImg from "@/assets/mentoring.png";

const skills = [
  { name: "JavaScript/TypeScript", level: 50 },
  { name: "Android/Kotlin", level: 90 },
  { name: "React/React Native", level: 55 },
  { name: "Python", level: 20 },
  { name: "Project Management", level: 100 },
  { name: "Community Building", level: 100 },
];

const experiences = [
  {
    image: openSourceImg,
    title: "Open Source Project & Community  Manager Consultant",
    org: "CHAOSS Project & Superbloom",
    description: "Guiding product development and support. Project Manager for the CHAOSS Education project, building open source education. Community & Project Manager for the Superbloom project.",
    color: "bg-primary/10 text-primary",
  },
  {
    image: computerImg,
    title: "Software Engineer & Product Manager",
    org: "Various Organizations",
    description: "Leading cross-functional teams, driving innovation, and contributing to open-source projects with a proven track record.",
    color: "bg-accent/10 text-accent",
  },
  {
    image: androidImg,
    title: "Android Developer",
    org: "Various Organizations",
    description: "Experience in modern development practices, writing clean, maintainable, and readable code using Kotlin, Jetpack Compose, and Kotlin Multiplatform.",
    color: "bg-violet/10 text-violet",
  },
  {
    image: mentoringImg,
    title: "Mentor & Community Builder",
    org: "Open Source Communities",
    description: "Passionate about helping others solve problems and mentoring people who share a love for technology and open source.",
    color: "bg-lime/10 text-lime",
  },
];



const pressMentions = [
  {
    title: "How open source shapes modern product teams",
    publication: "Tech Weekly",
    excerpt: "Featured a deep dive into community-driven product strategy and sustainable open source growth.",
    date: "March 2024",
    href: "https://example.com/tech-weekly-open-source",
  },
  {
    title: "Designing mobile UX for global audiences",
    publication: "UX Today",
    excerpt: "Quoted on mobile-first product design and building inclusive Android experiences.",
    date: "October 2023",
    href: "https://example.com/ux-today-mobile-ux",
  },
  {
    title: "Leading healthy open source communities",
    publication: "Open Source Journal",
    excerpt: "Profiled for leadership in mentorship, community growth, and open source education efforts.",
    date: "July 2023",
    href: "https://example.com/open-source-journal-leadership",
  },
];

const timeline = [
  { year: "2024", title: "CHAOSS Education Project Manager", desc: "Leading the development of open source education resources.", location: "Remote" },
  { year: "2023", title: "Senior Software Engineer", desc: "Building scalable platforms and mentoring junior developers.", location: "Remote" },
  { year: "2022", title: "Open Source Community Consultant", desc: "Guiding organizations in building sustainable open source programs.", location: "Remote" },
  { year: "2021", title: "Android Developer & Team Lead", desc: "Shipped multiple Android apps with modern architecture patterns.", location: "Hybrid" },
  { year: "2020", title: "Started Open Source Journey", desc: "First major contributions to CHAOSS and other open source projects.", location: "Remote" },
];

const tools = [
  "Kotlin", "Jetpack Compose", "TypeScript", "React", "React Native",
  "Python", "Git", "GitHub Actions", "Figma", "Jira",
  "Docker", "Firebase", "PostgreSQL", "Node.js", "GraphQL",
];

const FactCounter = ({ target, label }: { target: number; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div ref={ref}>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="font-display font-semibold text-foreground">{count}+</p>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-40 -right-40 w-96 h-96 bg-accent/12 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

      {/* Header */}
      <section className="relative container mx-auto px-6 py-6">
        <div className="absolute inset-0 -z-10 bg-gradient-accent-subtle rounded-3xl opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-6">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Passionate about{" "}
            <span className="text-gradient">open source,</span> tech and education.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm an experienced Software Engineer with a versatile background spanning software development,
            project management, product management, and community management. I thrive at the intersection
            of technology and people, building bridges between communities and developers.
          </p>
        </motion.div>
      </section>

      {/* Bio Split */}
      <section className="relative container mx-auto px-6 py-4">
        <div className="absolute -inset-20 -z-10 bg-mesh opacity-25 rounded-3xl" />
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-hero text-primary-foreground"
          >
            <h2 className="text-2xl font-display font-bold mb-4">My Mission</h2>
            <p className="leading-relaxed opacity-90 mb-4">
              I believe in the power of open source to transform lives and industries. My mission is to make
              open source accessible to everyone, regardless of their background or experience level.
            </p>
            <p className="leading-relaxed opacity-90">
              Through education, mentorship, and community building, I help organizations and individuals
              unlock the full potential of collaborative software development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border shadow-soft"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Quick Facts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="font-display font-semibold text-foreground">Worldwide</p>
              </div>
              <FactCounter target={7} label="Experience" />
              <FactCounter target={20} label="Projects" />
              <FactCounter target={100} label="Mentored" />
              <FactCounter target={5} label="Languages" />
              <FactCounter target={30} label="Talks Given" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience cards */}
      <section className="container mx-auto px-6 py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold mb-8"
        >
          What I Do
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border border-border shadow-soft hover:shadow-card transition-all duration-300 group backdrop-blur-sm"
            >
              <div className={`inline-flex p-3 rounded-xl ${exp.color} mb-4 group-hover:scale-110 transition-transform`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-6 w-6 object-contain"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">{exp.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{exp.org}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Speaking engagements */}
      <SpeakingEngagements />

      {/* Press mentions */}
      <section id="press-mentions" className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-4">
            Press Mentions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Featured in the Press</h2>
          <p className="max-w-2xl text-muted-foreground mt-4">
            Press features and articles where my work and community impact have been highlighted.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {pressMentions.map((mention, i) => (
            <motion.div
              key={`${mention.publication}-${mention.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{mention.publication}</p>
                  <span className="text-xs text-muted-foreground">{mention.date}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{mention.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mention.excerpt}</p>
              </div>
              <a
                href={mention.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80"
              >
                View more <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="career-timeline" className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Career Timeline</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-2 ring-4 ring-background" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="p-5 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <MapPin size={14} className="text-muted-foreground ml-2" />
                    <span className="text-xs text-muted-foreground">{item.location}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-6 py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold mb-8"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {skills.map((skill, i) => {
            const colors = ["from-primary to-cyan", "from-accent to-orange", "from-violet to-primary", "from-lime to-blue", "from-gold to-accent", "from-cyan to-lime"];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${colors[i]} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-display font-bold">Tools & Technologies</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {tools.map((tool, i) => {
            const toolColors = [
              "from-primary/10 to-primary/5 border-primary/30 text-primary hover:from-primary/20",
              "from-accent/10 to-accent/5 border-accent/30 text-accent hover:from-accent/20",
              "from-violet/10 to-violet/5 border-violet/30 text-violet hover:from-violet/20",
              "from-lime/10 to-lime/5 border-lime/30 text-lime hover:from-lime/20",
              "from-gold/10 to-gold/5 border-gold/30 text-gold hover:from-gold/20",
              "from-cyan/10 to-cyan/5 border-cyan/30 text-cyan hover:from-cyan/20",
            ];
            const colorClass = toolColors[i % toolColors.length];
            return (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`px-4 py-2 rounded-xl bg-gradient-to-br ${colorClass} border text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md`}
              >
                {tool}
              </motion.span>
            );
          })}
        </motion.div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-accent/5 to-violet/5 rounded-3xl border border-border shadow-soft p-10 md:p-14 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-display font-bold mb-6">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Clean Code", desc: "Writing maintainable, readable code that stands the test of time.", color: "text-primary", bg: "from-primary/10 to-transparent" },
              { icon: Users, title: "Collaboration", desc: "Team player who gets along exceptionally well with others.", color: "text-accent", bg: "from-accent/10 to-transparent" },
              { icon: GraduationCap, title: "Education", desc: "Building open source education to empower the next generation.", color: "text-violet", bg: "from-violet/10 to-transparent" },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${val.bg} border border-border/50 hover:border-primary/30 transition-all`}
              >
                <val.icon className={`mx-auto ${val.color} mb-3`} size={32} />
                <h3 className="font-display font-semibold mb-2 text-foreground">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-4">Want to work together?</h2>
          <p className="text-muted-foreground mb-6">I'm always open to new opportunities and collaborations.</p>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-hero text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
