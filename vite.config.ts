import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css : {
    modules: {
      generateScopedName: '[local]__[hash:base64:3]'
    },
    preprocessorOptions: {
      scss : {
        additionalData: `@import "@src/colors.scss";`
      }
    }
  },
  
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, './src')},
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: "@context", replacement: path.resolve(__dirname, './src/context')},
      { find: "@ts", replacement: path.resolve(__dirname, './src/ts')},
    ]
  }
})
