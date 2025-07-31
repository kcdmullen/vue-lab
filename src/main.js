import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import router from './router'

import GlobalComponents from './globals'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(vuetify).use(GlobalComponents)

app.mount('#app')
