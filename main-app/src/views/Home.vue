<template>
  <div class="home">
    <div class="hero-card">
      <h2>欢迎使用 Qiankun 微前端架构</h2>
      <p>当前主应用基于 <strong>Vue 2</strong>，通过 qiankun 加载三个 <strong>Vue 3</strong> 子应用</p>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">主应用</span>
          <span class="value">Vue 2.7 + Vue CLI</span>
        </div>
        <div class="info-item">
          <span class="value">Qiankun</span>
          <span class="value">v2.10</span>
        </div>
        <div class="info-item">
          <span class="label">子应用 1</span>
          <span class="value">Vue 3.4 + Vite (端口 3001)</span>
        </div>
        <div class="info-item">
          <span class="label">子应用 2</span>
          <span class="value">Vue 3.4 + Vite (端口 3002)</span>
        </div>
        <div class="info-item">
          <span class="label">子应用 3</span>
          <span class="value">Vue 3.4 + Vite (端口 3003)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'Home' }
</script>

<style scoped>
.hero-card { background: #fff; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
h2 { font-size: 24px; margin-bottom: 12px; color: #1a1a2e; }
p { color: #666; margin-bottom: 30px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.info-item { background: #f0f5ff; border-radius: 8px; padding: 16px; text-align: center; }
.label { display: block; font-size: 12px; color: #999; margin-bottom: 4px; }
.value { font-weight: 600; font-size: 14px; color: #333; }
</style>
