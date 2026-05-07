import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const aboutLinks = [
    { label: "Working Experience", href: "/about#career-timeline" },
    { label: "Public Engagements", href: "/about#public-engagements" },
    { label: "Press Mentions", href: "/about#press-mentions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer font-display text-xl font-bold text-gradient"
        >
          Peculiar C Umeh
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            item.path !== "/about" ? (
              <li key={item.path}>
                <button
                  onClick={() => {
                    navigate(item.path);
                    window.scrollTo(0, 0);
                  }}
                  className={`cursor-pointer relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-hero rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              </li>
            ) : (
              <li
                key={item.path}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  onClick={() => {
                    navigate(item.path);
                    window.scrollTo(0, 0);
                  }}
                  className={`cursor-pointer relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-hero rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-soft"
                    >
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setAboutOpen(false)}
                          className="block px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.path === "/about" && (
                    <div className="mt-2 space-y-1 rounded-2xl border border-border bg-muted/40 p-2">
                      <Link
                        to="/about#career-timeline"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        Career Timeline
                      </Link>
                      <Link
                        to="/about#public-engagements"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        Public Engagements
                      </Link>
                      <Link
                        to="/about#press-mentions"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        Press Mentions
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
