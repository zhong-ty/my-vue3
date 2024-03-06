<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
// import { Edit } from '@element-plus/icons-vue'
import { onMounted } from 'vue';
import { 
  // api_login,
  
  api_userInfo } from './api/user'

onMounted(() => {
  // api_login({name: 'www', pwd: '1111'})
  api_userInfo()
})

</script>

<style scoped>

</style>
