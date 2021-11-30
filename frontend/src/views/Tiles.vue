<template>
    <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <div class="breadcrumbs">
        <router-link to="home" class="breadcrumbs__link appText">Home</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">Tiles</a>
      </div>
      <section class="shop">
        <h1 class="appTitle--left appTitle">
          All our tiles
        </h1>
        <p class="shop__text appText">
          At DeinSteinDesign, we pride ourselves on helping customers find the perfect tile for their bathrooms. With our inspiring assortment, you will create the bathroom of your dreams.
        </p>
        <div class="shop__row">
          <div class="shop__sidebar sidebar">
            <AppFilter @filterItems="UpdateItems($event)" :Tiles="true"/>           
          </div>
          <div class="shop__items">
            <div class="shop__item shopitem" v-for="item in shopItems" :key="item.id">
              <router-link :to="{name: 'Editor', params: {id: item.id}}" class="shopitem__link">
                <img src="../assets/img/shop1.png" alt="">
              </router-link>  
              <div class="shopitem__header">
                <h4 class="shopitem__title">{{item.title}}</h4>
                <p class="appBtn appBtn--outline shopitem__stock">Stock: 320 pcs</p>
              </div> 
              <p class="shopitem__text appText">{{item.description}}</p>
              <div class="shopitem__footer">
                <div class="shopitem__pricewrapper">
                  <span class="shopitem__priceinfo">Price per m²</span>
                  <span class="shopitem__price">€ {{item.price}}</span>
                </div>
                <router-link :to="{name: 'Editor', params: {id: item.id}}" class="shopitem__btn appBtn appBtn--outline">TILE EDITOR</router-link>
              </div>
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
  data: () => ({
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = await getItems({is_tile: 'true'});
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