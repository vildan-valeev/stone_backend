<template>
  <div class="appSelect">
    <p class="appSelect__title" @click="visible = !visible">
      {{selected.name}}
    </p>
    <ul v-if="visible" class="appSelect__list">
      <li 
        class="appSelect__listitem"
        v-for="(item, index) in items" 
        :key="index"
        @click="selectOption(item)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: Object,
        default: {}
      },
    },
    name: 'AppSelect',
    data: () => ({
      visible: false,
      itemsLocal: []
    }),
    methods: {
      selectOption(item){
        this.$emit('select', item)
        this.visible = false
      },
      hideSelect(){
        this.visible = false     
      },
    },
    mounted(){
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style lang="less">
  .appSelect{
    position: relative;
    cursor: pointer;
    z-index: 10;
    font-weight: 500;
    &__title{
      // min-height: 42px;
    }
    &__list{
      position: absolute;
      top: 30px;
      left: 0;
      z-index: 5;
      width: 100%;
    }
    &__listitem{
      transition: all .3s;
      &:hover{
        background-color: var(--neutral-color);
        transition: all .3s;
      }
    }
  }
</style>