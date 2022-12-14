import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import './styles/reset.css'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
