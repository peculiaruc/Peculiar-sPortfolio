import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** GitHub project Pages URL is `/repo-name/` — path is case-sensitive; must match the repo name exactly. */
function githubPagesBase(): string {
  const raw = process.env.GITHUB_PAGES_BASE?.trim();
  if (raw) {
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
  }
  return "/Peculiars-PF/";
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Dev server: "/". Production: subpath for GitHub Pages (CI sets GITHUB_PAGES_BASE from repo name).
  // Use `command`, not `mode`: `vite build --mode development` still uses production base.
  base: command === "serve" ? "/" : githubPagesBase(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), command === "serve" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
