import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import LPlugin from '../packages'

const app = createApp(App)

app.use(LPlugin)
app.use(router)
app.mount('#app')
