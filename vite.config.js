import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// force full reload of the page on Ctrl+S
const fullReloadAlways = () => ({
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({type: "full-reload"})
    return []
  }
});


export default defineConfig({
  plugins: [
    tailwindcss(),
    fullReloadAlways(),
    react()
  ]
});
