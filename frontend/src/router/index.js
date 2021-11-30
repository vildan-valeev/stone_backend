import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/DeinSteinDesign',
    name: 'About',
    meta: {layout: 'main'},
    component: () => import( '../views/DeinSteinDesign.vue')
  },
  {
    path: '/tiles',
    name: 'Tiles',
    meta: {layout: 'main'},
    component: () => import( '../views/Tiles.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    meta: {layout: 'main'},
    component: () => import( '../views/Privacy.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: {layout: 'main'},
    component: () => import( '../views/Payment.vue')
  },
  {
    path: '/paypal',
    name: 'Paypal',
    meta: {layout: 'main'},
    component: () => import( '../views/PayPal.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    meta: {layout: 'main'},
    component: () => import( '../views/thanks.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import( '../views/Profile.vue')
  },
  {
    path: '/activate/:code/:token',
    name: 'Activate',
    meta: {layout: 'main'},
    component: () => import( '../views/Activate.vue')
  },
  {
    path: '/emailcheck',
    name: 'EmailCheck',
    meta: {layout: 'main'},
    component: () => import( '../views/EmailCheck.vue')
  },
  {
    path: '/editor/:id',
    name: 'Editor',
    meta: {layout: 'editor'},
    component: () => import( '../views/Editor.vue')
  },
  {
    path: '/svgeditor',
    name: 'svgEditor',
    meta: {layout: 'editor'},
    component: () => import( '../views/SvgEditor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next() 
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router
