import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './plugins/element.js'

const app = createApp(App)
app.mount('#app')
app.use(router)