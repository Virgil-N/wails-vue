import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  base: process.env.VITE_BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element_rewrite.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // ElementPlus({
    //   useSource: true,
    // }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        })
      ]
    })
  ]
})
