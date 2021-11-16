import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from '@/store'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/message.scss' // If you want to use ElMessage, import it.
import 'virtual:svg-icons-register'
import IconSvg from '@/components/svg_icon/svgIcon.vue'



createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .component('iconSvg', IconSvg)
  .mount('#app')
