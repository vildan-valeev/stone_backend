<template>
  <div>
    <header>
      <nav class="mainnav mainnav--editor">
        <router-link to="/" class="mainnav__logo">
          <svg width="158" height="32" id="logosite">
            <use xlink:href="../assets/img/editorLogo.svg#logo"></use>
          </svg>
        </router-link>
        <div class="mainnav__wrapper">
          <ul class="mainnav__list">
            <li class="mainnav__item">
              <router-link to="/" class="mainnav__link">Home</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/DeinSteinDesign" class="mainnav__link">DeinSteinDesign</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/Tiles" class="mainnav__link">Tiles</router-link>
            </li>
          </ul>
          <div class="mainnav__search search">
            <div class="search__icon">
              <svg width="14" height="14" >
                <use xlink:href="../assets/icon/search.svg#search"></use>
              </svg>
            </div>
            <input type="text" placeholder="What are you looking for?">
          </div>
          <div class="mainnav__icon icon">
            <a @click="onOpen()"> 
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/user.svg#user"></use>
              </svg>
            </a>
            <router-link to="/payment">
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/basket.svg#basket"></use>
              </svg>
              <div class="icon__counter">{{cart.total_items}}</div> 
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <router-view /> 
    
  </div>
</template>

<script>
import {mapGetters} from "vuex"

  export default {
    methods: {
      onOpen() {
        this.isLoggedIn ? 
          this.$router.push('/profile')
        :
          this.show = true
      },
    },
    computed: {
      ...mapGetters(['cart', 'isLoggedIn']),
    }
  }
</script>

<style lang="less" >

</style>