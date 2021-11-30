import { createStore } from 'vuex'
import auth from './auth'
import {getCartUser, getOneItem, addToCard} from '@/api/shop'

export default createStore({
  state: {
    cart: {
      total_items: 0, 
      related_items: [], 
    }, 
  },
  mutations: {
    setCart(state, cart){
      state.cart = cart
    },
  },
  actions: {
    async deleteCartItem(id){
      if(Object.keys(this.state.auth.token).length){
        console.log('delete from server cart')

      }else{
        console.log('delete from localcart')
        cart = JSON.parse(localStorage.getItem('cart')) 
        let index = cart.related_items.findindex(item => item.item.id == id)
        cart.related_items.splice(index, 1)
        cart.total_items = cart.related_items.length
        cart.final_price = cart.related_items.reduce((sum, res) => {
          return parseInt(sum)  + parseInt(res.total_price)
        }, 0)
        localStorage.setItem('cart', JSON.stringify(cart))    
      }
    },
    async addToCart({commit}, item){
      let cart = {}    
      if(Object.keys(this.state.auth.token).length){
        console.log('add to server cart')
        item.cart = this.state.cart.id
        await addToCard(item)
        cart = await getCartUser()
        cart.final_price = cart.related_items.reduce((sum, res) => {
          return parseInt(sum)  + parseInt(res.total_price)
        }, 0)
        cart.total_items = cart.related_items.length

      }else{
        console.log('add to local cart')
        cart = JSON.parse(localStorage.getItem('cart'))
        let itemInfo = await getOneItem(item.item)
        item = {
          ...item,
          item: itemInfo
        }
        cart.related_items.push(item)
        cart.total_items = cart.related_items.length
        cart.final_price = cart.related_items.reduce((sum, res) => {
          return parseInt(sum)  + parseInt(res.total_price)
        }, 0)
        localStorage.setItem('cart', JSON.stringify(cart))    
      }
      
      commit('setCart', cart)
    },
    async loadCart({commit}){
      let cart = {} 
      let items = []
      cart = JSON.parse(localStorage.getItem('cart'))
      if(Object.keys(this.state.auth.token).length){
        console.log('auth cart')
        // проверяем на наличие товаров в локальной корзине
        if(cart.total_items){
          console.log('check local cart')
          items = cart.related_items.map(item => ({
            ...item,
            item: item.item.id
          }))
          this.dispatch('clearCart')
        }
        // получаем корзину чтобы получить id
        cart = await getCartUser()
        if(items.length){
          // если нашли товары в локальной корзине, отпраляем на сервер 
          console.log(items)
          for(let res of items){
            await addToCard({
              ...res,
              cart: cart.id
            })
            console.log(res, 'add to cart')
          }
          // получаем обновленную корзину
          cart = await getCartUser()
          console.log('add update cart', cart)
        }
        // считаем цену
        cart.final_price = cart.related_items.reduce((sum, res) => {
          return parseInt(sum)  + parseInt(res.total_price)
        }, 0)
        cart.total_items = cart.related_items.length

        
      }else{
        console.log('start local cart')
        if(!cart){
          console.log('!!!start local cart')
          cart = {total_items: 0, related_items: []}
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      }
      commit('setCart', cart)
    },
    clearCart({commit}){
      let cart = {
        total_items: 0, 
        related_items: [], 
      }
      localStorage.setItem('cart',JSON.stringify(cart))
      commit('setCart', cart)
    }
  },
  getters: {
    cart: state => state.cart,
    totalItems: state => state.cart.total_items
  },
  modules: {
    auth,
  }
})
