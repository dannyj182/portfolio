import { defineConfig } from "vite";

export default defineConfig({
    base: "https://dannyj182.github.io/portfolio",
    build: {
        minify: "terser",
    }
});