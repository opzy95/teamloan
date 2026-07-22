
import { createApp } from 'vue';
import './assets/main.css';
import './style.css'
import App from './App.vue'
import router from './router'
import 'animate.css';

// createApp(App).use(router).mount('#app')
import { Icon } from '@iconify/vue'

const app = createApp(App)
app.use(router)
app.component('Icon', Icon)
app.mount('#app')
    