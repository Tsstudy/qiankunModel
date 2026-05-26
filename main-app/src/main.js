import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const apps = [
  {
    name: 'sub-app-vue3-1',
    entry: '//localhost:3001',
    container: '#sub-app-container',
    activeRule: '/vue3-app1',
    props: { msg: '来自主应用的消息' }
  },
  {
    name: 'sub-app-vue3-2',
    entry: '//localhost:3002',
    container: '#sub-app-container',
    activeRule: '/vue3-app2',
    props: { msg: '来自主应用的消息' }
  },
  {
    name: 'sub-app-vue3-3',
    entry: '//localhost:3003',
    container: '#sub-app-container',
    activeRule: '/vue3-app3',
    props: { msg: '来自主应用的消息' }
  }
]

const state = { user: 'admin' }
const actions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
  console.log('[主应用] 全局状态变更:', state, prev)
})

registerMicroApps(apps, {
  beforeLoad: [app => console.log('[主应用] beforeLoad:', app.name)],
  beforeMount: [app => console.log('[主应用] beforeMount:', app.name)],
  afterUnmount: [app => console.log('[主应用] afterUnmount:', app.name)]
})

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
})
