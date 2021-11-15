import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from '@/routes/index.js'
import ElementPlus from 'element-plus'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import IconSvg from '@/components/svg_icon/svgIcon.vue'



createApp(App)
  .use(router)
  .use(Vuex)
  .use(ElementPlus)
  .component('iconSvg', IconSvg)
  .mount('#app')
