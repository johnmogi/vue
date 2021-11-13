import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// @ts-ignore
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')
