import { createRouter, createWebHistory } from 'vue-router'
import Images from '../views/Images.vue'
import Videos from '../views/Videos.vue'

const routes = [
    { path: '/', name: 'Home', component: Images },
    { path: '/images', name: 'Images', component: Images },
    { path: '/videos', name: 'Videos', component: Videos },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
