import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')