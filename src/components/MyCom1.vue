<template>
  <div class="mycom">
    这是我的全局组件1
    <div>测试一下scss</div>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from 'vue'


export default defineComponent({
name:'',
props:{},
emits:[],
setup(){
  const data=reactive({})  //里面写所有的响应式数据，像vue2中的data一样

  return{
    ...toRefs(data),
  }
},
components:{},
})
</script>

<style scoped lang="scss">
.mycom {
  div {
    color: red;
  }
}
</style>
