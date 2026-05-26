import Home from '../views/Home.vue'
import Vue3App1 from '../views/Vue3App1.vue'
import Vue3App2 from '../views/Vue3App2.vue'
import Vue3App3 from '../views/Vue3App3.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/vue3-app1', name: 'Vue3App1', component: Vue3App1 },
  { path: '/vue3-app2', name: 'Vue3App2', component: Vue3App2 },
  { path: '/vue3-app3', name: 'Vue3App3', component: Vue3App3 }
]

export default routes
