import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

createApp(App)
  .use(ElementPlus)
  .mount('#app')
