import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
// import axios from 'axios'
// import VueAxios from 'vue-axios'


import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// use(axios).use(VueAxios)

createApp(App).use(store).use(router).use(ElementPlus).use(Vant).mount('#app')
