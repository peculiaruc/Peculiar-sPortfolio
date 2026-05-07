import { Github, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer font-display text-xl font-bold text-gradient"
            >
              Portfolio
            </button>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Software Engineer & Open Source Community Builder passionate about driving innovation.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
                      window.scrollTo(0, 0);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub", color: "hover:bg-foreground/10", link: "https://github.com/peculiaruc" },
                { icon: Linkedin, label: "LinkedIn", color: "hover:bg-primary/10", link: "https://www.linkedin.com/in/peculiar-c-umeh/" },
                { icon: Twitter, label: "Twitter", color: "hover:bg-primary/10", link: "https://x.com/peculiarpec" },
              ].map((social, i) => (
                <a
                  target="_blank"
                  key={i}
                  href={social.link}
                  className={`p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Open Source</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All my projects are open source. Feel free to contribute, fork, and learn!
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Peculiar C Umeh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
