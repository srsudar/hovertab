import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import { viteStaticCopy } from "vite-plugin-static-copy";
import manifest from "./app/manifest.json" assert { type: "json" };

export default defineConfig({
  root: "app",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    crx({ manifest }),
    viteStaticCopy({
      targets: [
        {
          src: "styles",
          dest: ".",
        },
      ],
    }),
  ],
});
