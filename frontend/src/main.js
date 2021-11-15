import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import ElementPlus from 'element-plus'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import '@/styles/index.scss'


createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
