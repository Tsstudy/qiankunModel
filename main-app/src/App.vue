<template>
  <div id="main-app">
    <header class="main-header">
      <h1>Qiankun 微前端 Demo</h1>
      <p class="subtitle">主应用: Vue 2 | 子应用: Vue 3</p>
      <nav class="main-nav">
        <router-link to="/">首页</router-link>
        <router-link to="/vue3-app1">Vue 3 子应用 1</router-link>
        <router-link to="/vue3-app2">Vue 3 子应用 2</router-link>
        <router-link to="/vue3-app3">Vue 3 子应用 3</router-link>
      </nav>
    </header>
    <main class="main-content">
      <router-view />
      <div v-show="showSubApp" id="sub-app-container" class="sub-app-container"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showSubApp() {
      return this.$route.path.startsWith('/vue3-app')
    }
  }
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; color: #333; }
#main-app { min-height: 100vh; }
.main-header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #fff; padding: 30px; text-align: center; }
.main-header h1 { font-size: 28px; margin-bottom: 6px; }
.subtitle { font-size: 14px; opacity: 0.7; margin-bottom: 20px; }
.main-nav { display: flex; justify-content: center; gap: 12px; }
.main-nav a { color: #fff; text-decoration: none; padding: 8px 20px; border-radius: 6px; background: rgba(255,255,255,0.1); transition: all 0.3s; }
.main-nav a:hover, .main-nav a.router-link-exact-active { background: #409eff; }
.main-content { max-width: 900px; margin: 30px auto; padding: 0 20px; }
.sub-app-container { min-height: 200px; }
</style>
