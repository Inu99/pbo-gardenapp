import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueFinalModal from 'vue-final-modal'


createApp(App).use(store).use(router).use(VueFinalModal()).mount('#app')
