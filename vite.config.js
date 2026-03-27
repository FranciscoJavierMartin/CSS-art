import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CSS-art/',
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        'england-flag': './src/art/01-england-flag/index.html'
      },
    },
  },
});
