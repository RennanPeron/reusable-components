import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalComponents from './includes/_globals'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(GlobalComponents)

app.mount('#app')
