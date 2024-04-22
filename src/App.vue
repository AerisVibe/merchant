<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>
<script setup>
import {ref, computed} from "vue"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
// 引入初始化样式
#app {
  background: #eee;
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}

.el-button {
  font-weight: 400 !important;
}

html, body {
  padding: 0;
  margin: 0;
}
</style>
