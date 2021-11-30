<template>
  <div class="paypal__wrapper">
   <div ref="paypal"></div>
  </div>
</template>

<script>
import { paypalOrder } from '@/api/shop'
import {mapGetters} from "vuex"


export default {
  data: () => ({
    loaded: false,
    paidFor: false,
    product: {
      price: 777999,
      description: "leg lamp from that one movie",
      img: "./assets/lamp.jpg"
    }
  }),
  mounted(){
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbLwrgEaPeiIpwmFu6rP9rexynquY7H3KT8CrYV2bEejAfhK_q6o31viE4Zr2rtS2mRNe0DNpzvmj339";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    this.product.price = this.cart.final_price > 0 ? this.cart.final_price : '200'
    console.log(this.product.price)
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            let cartItems = this.cart.related_items.map(item => ({
              height: item.height,
              width: item.width,
              length: item.length,
              bohrung: item.bohrung,
              comment: '23312312321312312',
              qty_item: 0,
              total_price: item.total_price,
              ausschnitt: item.ausschnitt,
              item: item.item.id,
              armierung: true,
              ausschnitt: 0,
              ausklinkung: 0,
              polierte_kante: true
            }))
            let result = {
              ...this.$route.params,
              paypal_id: order.id,
              email: order.payer.email_address,
              first_name: order.payer.name.given_name,
              last_name: order.payer.name.surname,
              total_items: this.cart.total_items,
              final_price: this.cart.final_price,
              cart_items: cartItems,
            }
            try{ 
              let res = await paypalOrder(result)
              this.$store.dispatch('clearCart')
              if(this.isLoggedIn){
                this.$router.push('/profile')
              }else{ 
                this.$router.push({name: 'Thanks', params: {info: res.data.detail}})       
              }
            }catch(err){
              console.log(err)
            }
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  },
  computed: {
    ...mapGetters(['cart', 'isLoggedIn'])
  }
}
</script>

<style>

</style>