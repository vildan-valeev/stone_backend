<template>
  <main class="profile"> 
    <div class="profile__row">
      <div class="profile__sitebar">
        <button class="appBtn appBtn--meduim full" @click="tab = 1" :class="tab == 1 ? '' : 'appBtn--outline'">
          Order history
        </button>
        <button class="appBtn appBtn--meduim full" @click="tab = 2" :class="tab == 2 ? '' : 'appBtn--outline'">
          Personal data
        </button>
        <button class="appBtn appBtn--meduim full" @click="tab = 3" :class="tab == 3 ? '' : 'appBtn--outline'">
          support
        </button>
        <button class="appBtn appBtn--meduim full" @click="logout()" :class="tab == 4 ? '' : 'appBtn--outline'">
          Go out
        </button>
      </div>
      <div class="profile__content content" v-if="tab == 1">
        <header class="content__header">
          Order history
        </header>
        <div class="content__body">
          <template v-if="cart.related_items.length">
          <div class="history">       
            <div class="history__item itemSmall" v-for="item in cart.related_items" :key="item.item.id">
              <img src="../assets/img/order1.png" alt="" class="itemSmall__img">
              <div class="itemSmall__info">
                <h4 class="itemSmall__title">{{item.item.title}}</h4>
                <ul class="itemSmall__list">
                  <li>Delivery: Europa</li>
                  <li>date: 30.09.2021</li>
                </ul>
                <div class="itemSmall__price">
                  <span class="itemSmall__priceinfo">€ {{item.item.price}}</span>
                </div>
              </div>
            </div>
          </div>
          </template>
          <template v-else>
            <div class="historyEmpty">
              <p class="content__title">You don't have any orders at the moment</p>
              <p class="appText">Fix it by simply ordering a stone!</p>
              <router-link to="/tiles" class="appBtn">START SHOPPING</router-link>
            </div>      
          </template>
        </div>
      </div>
      <div class="profile__content content" v-if="tab == 2">
        <header class="content__header">
          Personal data
        </header>
        <div class="content__body">
          <form class="appform profileForm">
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="fname">Full name</label>
                  <input name="fname" id="fname" type="text" class="appInput" placeholder="Enter the full name"/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="email">E-mail</label>
                  <input name="email" id="email" type="email" class="appInput" placeholder="example@mail.com"/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="Telephone">Telephone</label>
                  <input name="Telephone" id="Telephone" type="phone" class="appInput" placeholder=""/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="fname">Date of birth</label>
                  <input name="date" id="date" type="date" class="appInput" placeholder="01.01.1000"/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="password">Password</label>
                  <input name="password" id="password" type="text" class="appInput" placeholder="********"/>
                  <button class="appLink">Change Password</button>
              </div>
            </div>
            <button class="appBtn appBtn--meduim profileForm__btn">SAVE CHANGES</button>
          </form>
        </div>
      </div>
      <div class="profile__content content" v-if="tab == 3">
        <header class="content__header">
          Support
        </header>
        <div class="content__body">
          <form class="appform profileForm">
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                <label for="question">Ask a question</label>
                <textarea name="question" id="question" type="text" class="appInput" placeholder="Ask the question in a detailed form (preferably in more detail)..."></textarea>
                <p class="appText profileForm__notise">The answer will be sent to the post office*</p>
              </div>
            </div>
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="email">E-mail</label>
                  <input name="email" id="email" type="email" class="appInput" placeholder="example@mail.com">
              </div>
            </div>
            <button class="appBtn appBtn--meduim profileForm__btnSend">SEND</button>
          </form>
        </div>
      </div>    
    </div>
  </main>
</template>

<script>
import {mapGetters} from "vuex"
import {getOrders} from '@/api/shop'

export default {
  data: () => ({
    tab: 1,
    orders: []
  }),
  async mounted(){
    this.orders = await getOrders()
    console.log(this.orders)
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>

<style lang="less">
@import '../assets/less/profile.less';

</style>