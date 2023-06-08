import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import store from './stores/index.js'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const installPersistedStatePlugin = createPersistedStatePlugin()
const app = createApp(App)

app.use(pinia) // Use the pinia instance you created
app.use(router)
app.use(store)

pinia.use(piniaPluginPersistedstate)
pinia.use((context) => installPersistedStatePlugin(context))

app.mount('#app')