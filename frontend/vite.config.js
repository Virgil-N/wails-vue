import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
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
