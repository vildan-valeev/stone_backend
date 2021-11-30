<template>
  <div>
    <template v-if="selectedFilter.length || selectedFilterImg.length > 0">
      <p class="sidebar__itemtitle">Current filters</p>
      <div class="sidebar__selectedWrapper">
        <div v-for="subitem in selectedFilter" :key="subitem.id" class="sidebar__selected">
          <span>{{subitem.title}}</span>
          <img src="../assets/img/close.svg" alt="close" @click="subitem.checked = false">
        </div>
        <div v-for="subitem in selectedFilterImg" :key="subitem.id" class="sidebar__selected sidebar__selected--img">
          <img class="selectedImg" :src="subitem.image" alt="">
          <img src="../assets/img/close.svg" alt="close" @click="subitem.checked = false">
        </div>
      <button class="sidebar__clear appLink" @click="clear">Clear all</button>      
      </div>     
    </template>
    <ul class="sidebar__list">
      <li class="sidebar__item" v-for="item in filter.multipleСhoice" :key="item">
        <p class="sidebar__itemtitle">{{item.type}}</p>
        <ul class="sidebar__sublist">
          <li class="sidebar__subitem appText appCheckbox" v-for="subitem in item.items" :key="subitem.id">
            <input type="checkbox" :id="subitem.title" :name="item.type" v-model="subitem.checked">
            <label :for="subitem.title">{{subitem.title}}</label>
          </li>
        </ul>
      </li>
      <li class="sidebar__item" v-for="item in filter.multipleСhoiceImg" :key="item">
        <p class="sidebar__itemtitle">{{item.type}}</p>
        <ul class="sidebar__sublist groupImgCheckbox">
          <li class="groupImgCheckbox__item" v-for="subitem in item.items" :key="subitem.id">
            <input type="checkbox" :id="subitem.title" :name="item.type" v-model="subitem.checked">
            <label :for="subitem.title">
              <img :src="subitem.image" alt="">
            </label>
          </li>
        </ul>
      </li>
      <li class="sidebar__item appRange">
        <div class="appRange__wrapper">
          <input type="number" class="appRange__input appInput" v-model="Price.value[0]">
          <div class="appRange__line"></div>
          <input type="number" class="appRange__input appInput" :value="Price.value[1]" @change="setMax($event)">
        </div> 
        <div class="appRange__slider">
          <Slider
            v-model="Price.value"
            v-bind="Price"
            @change="setPrice()"
          ></Slider>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {getItems, getFilterMaterial, getFilterTypes, getFilterColor } from '@/api/shop'

import Slider from '@vueform/slider'

export default {
  name: 'AppFilter',
  props: {
    Tiles: Boolean,
    default: false,
  },
  data: () => ({
    filter: {
      multipleСhoice: {
        Slabsfor: {
          type: 'Slabs for',
          items: []
        },
        Material: {
          type: 'Material',
          items: []
        },
      },
      multipleСhoiceImg: {
        MaterialColor: {
          type: 'Material color',
          items: []
        }
      },
      price: []
    },
    
    Price: {
      value: [0, 5000],
      step: 10,
      min: 0,
      max: 10000,
      tooltips: false,
    },
  }),
  async mounted(){
    this.filter.multipleСhoice.Material.items = (await getFilterMaterial()).map(item => ({ 
      ...item,
      checked: false
    }))
    this.filter.multipleСhoice.Slabsfor.items = (await getFilterTypes()).map(item => ({ 
      ...item,
      checked: false
    }))
    this.filter.multipleСhoiceImg.MaterialColor.items = (await getFilterColor()).map(item => ({ 
      ...item,
      checked: false
    }))
  },
  methods: {
    setMax(event){
      this.Price.value[1] = event.target.value
    },
    clear(){
      for(let i in this.filter.multipleСhoice){
        this.filter.multipleСhoice[i].items.forEach(item =>{
          item.checked = false
        })
      }
      for(let i in this.filter.multipleСhoiceImg){
        this.filter.multipleСhoiceImg[i].items.forEach(item =>{
          item.checked = false
        })
      }
      
    },
    setPrice(){
      this.filter.price = this.Price.value
    }
  },
  watch: {
    filter: {
      async handler(){
        let data = {
          type__in: '',
          material__in: '',
          limit: '',
          offset: '',
          price__gte: this.filter.price[0],
          price__lte: this.filter.price[1],
          is_tile: this.Tiles,
          item_color: ''
        }
        this.filter.multipleСhoice.Material.items.forEach(item =>{
          if(item.checked){
            data.material__in += item.id + ','
          }
        })
        this.filter.multipleСhoice.Slabsfor.items.forEach(item =>{
          if(item.checked){
            data.type__in += item.id + ','
          }
        })
        this.filter.multipleСhoiceImg.MaterialColor.items.forEach(item =>{
          if(item.checked){
            data.item_color += item.id + ','
          }
        })
        let result = await getItems(data)
        this.$emit('filterItems', result)
     },
     deep: true
    }
  },
  computed: {
    selectedFilter(){
      let checked = []
      for(let i in this.filter.multipleСhoice){
        this.filter.multipleСhoice[i].items.forEach(item =>{
          if(item.checked){
            checked.push(item)
          }
        })
        
      }
      return checked
    },
    selectedFilterImg(){
      let checked = []
      for(let i in this.filter.multipleСhoiceImg){
        this.filter.multipleСhoiceImg[i].items.forEach(item =>{
          if(item.checked){
            checked.push(item)
          }
        })
      }
      return checked
    }
  },
  components: {
    Slider
  }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>