import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import ElementPlus from 'element-plus'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
