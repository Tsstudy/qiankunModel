<template>
  <div class="sub-app-card">
    <h1>Vue 3 子应用 1</h1>
    <p>这是基于 Vue 3 + Vite 的子应用</p>
    <el-button type="primary" @click="handleClick">
      点击次数: {{ count }}
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const count = ref(0)
function handleClick() {
  count.value++
  ElMessage.success(`已点击 ${count.value} 次`)
}
</script>

<style scoped>
.sub-app-card {
  padding: 30px;
  border: 2px dashed #409eff;
  border-radius: 12px;
  background: #f0f9ff;
  text-align: center;
  margin: 20px 0;
}
h1 { color: #409eff; margin-bottom: 12px; }
p { color: #666; margin-bottom: 16px; }
</style>
