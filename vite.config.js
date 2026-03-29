import { defineConfig } from "vite";

export default defineConfig({
  base: "/CSS-art/",
  build: {
    rolldownOptions: {
      input: {
        index: "index.html",
        "england-flag": "./src/art/01-england-flag/index.html",
        "laughing-emoji": "./src/art/02-laughing-emoji/index.html",
        "pepsi-logo": "./src/art/03-pepsi-logo/index.html",
        "bahamas-flag": "./src/art/04-bahamas-flag/index.html",
        "tiktok-logo": "./src/art/05-tiktok-logo/index.html",
        "duck-art": "./src/art/06-duck-art/index.html",
      },
    },
  },
});
