{/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/pedrotech-portfolio",
});
*/}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my_portfolio/', // Remplace "portfolio" par le nom de ton dépôt si différent
  plugins: [react()],
})
