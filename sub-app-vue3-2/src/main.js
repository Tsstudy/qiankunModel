import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'

let app = null

function render(props = {}) {
  const { container } = props
  app = createApp(App)
  app.mount(container ? container.querySelector('#app') : document.getElementById('app'))
}

renderWithQiankun({
  bootstrap() {
    console.log('[sub-app-vue3-2] bootstrap')
  },
  mount(props) {
    console.log('[sub-app-vue3-2] mount', props)
    render(props)
  },
  unmount() {
    console.log('[sub-app-vue3-2] unmount')
    app?.unmount()
    app = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
