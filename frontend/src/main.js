import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CSS from "./assets/style.css"

createApp(App).use(store).use(router).use(CSS).mount('#app')
