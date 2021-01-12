import { createApp, vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/font/iconfont.css"
import axios from "axios"
// import Vue from "vue"
// axios.default.baseUrl = "http://127.0.0.1:991"
// Vue.prototype.$http = axios
createApp(App).use(store).use(router).mount('#app')
