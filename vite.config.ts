import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  onwarn: (warning, handler) => {
    if (warning.code.startswith("a11y-")) {
      return;
    }
    handler(warning);
  },
});
