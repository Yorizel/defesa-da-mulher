// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      AstroPWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          manifest: {
              name: 'Jardim de Blocos',
              short_name: 'Blocos',
              description: 'Um jogo simples de encaixar blocos coloridos.',
              lang: 'pt-BR',
              theme_color: '#10b981',
              background_color: '#ecfdf5',
              display: 'standalone',
              scope: '/',
              start_url: '/',
              icons: [
                  {
                      src: '/pwa-icon-192.png',
                      sizes: '192x192',
                      type: 'image/png',
                  },
                  {
                      src: '/pwa-icon-512.png',
                      sizes: '512x512',
                      type: 'image/png',
                  },
                  {
                      src: '/pwa-icon-512.png',
                      sizes: '512x512',
                      type: 'image/png',
                      purpose: 'maskable',
                  },
              ],
          },
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});