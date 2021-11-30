<template>
  <main class="home">
     <div class="intro__wrapper">
        <div class="intro">
          <section class="intro__info">
            <h1 class="intro__title">Create a tile design for yourself</h1>
            <p class="intro__text appText">And that's how it works:</p>
            <p class="appText">Choose your stone, choose your design, enter your Maybe, You order and we deliver.</p>  
            <a href="#" class="appBtn intro__btn">TO THE SHOP</a>
          </section>
          <div class="intro__images images">
            <div class="images__arearight">
              <img src="../assets/img/intro1.png" class="images__img images__img--1">       
            </div>
            <div class="images__arealeft">
              <img src="../assets/img/intro2.png" class="images__img images__img--2">
              <img src="../assets/img/intro3.png" class="images__img images__img--3">
            </div>
            <div class="images__areabottom">
                <img src="../assets/img/intro4.png" class="images__img images__img--4">
               <img src="../assets/img/intro5.png" class="images__img images__img--5">
            </div>   
          </div>
        </div>
      </div>
      <section class="recommend">
        <h2 class="appTitle">
          Recommendations for you
        </h2>
        <div class="recommend__wrapper product">
          <div class="product__item">
            <img src="../assets/img/rec1.png" alt="Modern Kitchens" class="product__img">
            <h3 class="product__title">Modern Kitchens</h3>
            <p class="appText product__text">Light tiles for the kitchen with a beautiful finish for a unique, ultra-modern style.</p>
            <a href="" class="product__btn appBtn appBtn--outline">VIEW ALL</a>
          </div>
          <div class="product__item">
            <img src="../assets/img/rec2.png" alt="Modern Kitchens" class="product__img">
            <h3 class="product__title">Traditional Kitchens</h3>
            <p class="appText product__text">The aged light tones of the tiles make traditional kitchens a popular choice in country houses.</p>
            <a href="" class="product__btn appBtn appBtn--outline">VIEW ALL</a>
          </div>
          <div class="product__item">
            <img src="../assets/img/rec3.png" alt="Modern Kitchens" class="product__img">
            <h3 class="product__title">Minimalistic bathrooms</h3>
            <p class="appText product__text">Dark tile tones will make the bathroom interior expensive and emphasize minimalism.</p>
            <a href="" class="product__btn appBtn appBtn--outline">VIEW ALL</a>
          </div>
          <div class="product__item">
            <img src="../assets/img/rec4.png" alt="Modern Kitchens" class="product__img">
            <h3 class="product__title">High-tech bathrooms</h3>
            <p class="appText product__text">The gray tones of the tiles will make the shape of the bathroom more strict, clear and concise.</p>
            <a href="" class="product__btn appBtn appBtn--outline">VIEW ALL</a>
          </div>
        </div>
      </section>
      <div class="bg-grey">
        <div class="createnow">
          <div class="createnow__wrapper">
            <img src="../assets/img/createnowimg.png" alt="" class="createnow__img">
            <section class="createnow__info">
              <h2 class="appTitle createnow__title">Create your own tile design</h2>
              <p class="createnow__text appText">Creating tiles to fit your size is what we do best-let's show you how to get started…</p>
              <button class="createnow__btn appBtn appBtn--outline">CREATE NOW</button>
            </section>
          </div>
        </div>  
      </div>
      <section class="interested">
        <h2 class="appTitle">You will be interested</h2>
        <div class="interested__wrapper">
          <a href="#" class="interested__item">
            <a href="#" class="interested__img">
              <img src="../assets/img/int1.png" alt="">
              <span>SEE MORE</span>
            </a>          
            <h3 class="interested__title">New tiles in DeinSteinDesign</h3>
            <p class="interested__text appText">Check out the new tiles in the DeinSteinDesign assortment.</p>
          </a>
          <a href="#" class="interested__item">
            <a href="#" class="interested__img">
              <img src="../assets/img/int2.png" alt="">
              <span>SEE MORE</span>
            </a>  
            <h3 class="interested__title">Tiles at affordable prices</h3>
            <p class="interested__text appText">See a selection of different tiles at affordable prices.</p>
          </a>
          <a href="#" class="interested__item">
            <a href="#" class="interested__img">
              <img src="../assets/img/int3.png" alt="">
              <span>SEE MORE</span>
            </a>
            <h3 class="interested__title">Create a tile design with a cutout for the sink</h3>
            <p class="interested__text appText">Create your own tile design with a cutout for the sink with the help of our editor.</p>
          </a>
        </div>
        <button class="appBtn appBtn--outline interested__btn">
          READ MORE
        </button>
      </section>
  </main>
</template>

<script>


export default {
  name: 'Home',
  data: () =>({
    arr: [],
  }),
  mounted(){
  },
  methods: {
   
  },
  components: {
    
  }
}
</script>
<style lang="less">
@import '../assets/less/home.less';

</style>