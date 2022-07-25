import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'


import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import './assets/js/main.js'
// import './assets/main.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
