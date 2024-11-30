import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // each time address start or includes '/api' add localhost:3000 at the begininig
        secure: false,
    },
  },
},
  plugins: [react()],
})
