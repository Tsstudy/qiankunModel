<template>
  <div class="sub-app-card">
    <h1>Vue 3 子应用 3</h1>
    <p>这是第3个基于 Vue 3 + Vite 的子应用</p>
    <button class="my-btn btn-danger" @click="count++">
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
  border: 2px dashed #e6a23c;
  border-radius: 12px;
  background: #fdf6ec;
  text-align: center;
  margin: 20px 0;
}
h1 { color: #e6a23c; margin-bottom: 12px; }
p { color: #666; margin-bottom: 16px; }
.my-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}
.btn-danger { background: #e6a23c; }
.btn-danger:hover { background: #ebb563; }
</style>
