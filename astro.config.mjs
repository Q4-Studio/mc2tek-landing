import { defineConfig } from "astro/config";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://q4-studio.github.io",
  base: isGitHubPagesBuild ? "/mc2tek-landing/" : "/",
  output: "static",
});
