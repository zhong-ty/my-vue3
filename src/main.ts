import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

// 注册全局组件
import allGlobalComponents from '@/components/index.js'
app.use(allGlobalComponents)

app.mount('#app')

console.log(import.meta.env, 'env')

