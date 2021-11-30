<template>
  <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <div class="breadcrumbs">
        <router-link to="home" class="breadcrumbs__link appText">{{$t('home')}}</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">{{$t('deinsteindesign')}}</a>
      </div>
      <section class="shop">
        <h1 class="appTitle appTitle--left">
          {{$t('HeadingH1')}}
        </h1>
        <p class="shop__text appText">
          {{$t('Subtitle')}}
        </p>
        <div class="shop__row">
          <div class="shop__sidebar sidebar">
            <AppFilter @filterItems="UpdateItems($event)"/>
          </div>
          <div class="shop__items">
            <div class="shop__item shopitem" v-for="item in shopItems" :key="item.id">
              <router-link :to="{name: 'Editor', params: {id: item.id}}" class="shopitem__link">
                <img src="../assets/img/shop1.png" alt="">
              </router-link>  
              <h4 class="shopitem__title">{{item.title}}</h4>
              <p class="shopitem__text appText">{{item.description}}</p>
              <router-link :to="{name: 'Editor', params: {id: item.id}}" class="shopitem__btn appBtn appBtn--outline">STEIN EDITOR</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  </main>
</template>

<script>

import {getItems} from '@/api/shop'
import AppFilter from "@/components/Filter"

export default {
  name: 'Home',
  data: () => ({
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = await getItems()
    
  },
  methods: {
    UpdateItems(result){
      this.shopItems = result
    } 
  },
  components: {
    AppFilter
  }
  
  
}
</script>

<style lang="less">
@import '../assets/less/shop.less';

</style>

