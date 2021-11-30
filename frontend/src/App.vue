<template>
  <component :is="layout">  
    <router-view /> 
  </component> 
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import EditorLayout from './layouts/EditorLayout.vue'
 
export default {
  async mounted(){
    if(!Object.keys(this.$store.getters.user).length){
      try{
        await this.$store.dispatch('getUser')
      }catch{
        this.$store.dispatch('logout')
      }
    }
    this.$store.dispatch('loadCart')
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, 
    MainLayout,
    EditorLayout
  }
}
</script>


<style lang="less">
@import './assets/less/main.less';
</style>
