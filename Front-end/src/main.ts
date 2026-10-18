import { createApp } from 'vue'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, { queryClient: new QueryClient() })

app.mount('#app')
