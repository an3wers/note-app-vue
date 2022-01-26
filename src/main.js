import { createApp } from 'vue'
import App from './App.vue'
import '@/scss/main.scss'

import routers from '@/routers'

const app = createApp(App)

export const tagsTwo = [
  {
    id: 1,
    name: 'home',
    tagIsActive: false
  },
  {
    id: 2,
    name: 'work',
    tagIsActive: false
  },
  {
    id: 3,
    name: 'travel',
    tagIsActive: false
  }
]

app.use(routers)

app.mount('#app')
