import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: "/src/components",
      contactForm: "/src/components/ContactForm",
      contactList: "/src/components/ContactList",
      searchBox: "/src/components/SearchBox",
      contact: "/src/components/Contact",
    },
  },
});
