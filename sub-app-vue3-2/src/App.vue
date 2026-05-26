<template>
  <div class="sub-app-card">
    <h1>Vue 3 子应用 2</h1>
    <p>这是另一个基于 Vue 3 + Vite 的子应用</p>
    <button class="my-btn btn-success" @click="count++">
      点击次数: {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
.sub-app-card {
  padding: 30px;
  border: 2px dashed #67c23a;
  border-radius: 12px;
  background: #f0f9eb;
  text-align: center;
  margin: 20px 0;
}
h1 { color: #67c23a; margin-bottom: 12px; }
p { color: #666; margin-bottom: 16px; }
.my-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}
.btn-success { background: #67c23a; }
.btn-success:hover { background: #85ce61; }
</style>
