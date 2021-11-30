<template>
  <div>
    <header>
      <nav class="mainnav">
        <router-link to="/" class="mainnav__logo">
          <svg width="158" height="111" id="logosite">
            <use xlink:href="../assets/img/DeinSteinLogo.svg#logo"></use>
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
            <li class="mainnav__item">
              <app-select 
                :items="items" 
                @select="setLocale($event)" 
                :selected="lang"             
              />
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
              <div class="icon__counter">{{totalItems}}</div> 
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <!-- main -->
    <router-view />
    <!-- footer -->
    <footer class="mainfooter">
        <div class="mainfooter__wrapper">
          <router-link to="/" class="mainfooter__logo">
            <svg width="158" height="111">
              <use xlink:href="#logosite"></use>
            </svg>
          </router-link>
          <ul class="mainfooter__list">
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Navigation</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Home</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">DeinSteinDesign</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">KITCHEN</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Mehr</a>
                </li>
              </ul>
            </li>
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Connections</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Facebook</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Twitter</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">KITCHEN</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Mehr</a>
                </li>
              </ul>
            </li>
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Account</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Your account</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Returns Centre</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">100 % purchase protection</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Help</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mainfooter__politic">
          <p class="mainfooter__politicText">Copyright © 2021 DeinSteinDesign. All rights reserved.</p>
          <div class="mainfooter__politicWrap">
            <span class="mainfooter__politicText">Impressum</span>
            <span class="mainfooter__politicText">Datenschutzerklärung</span>
          </div>
        </div>
    </footer>
    <GDialog v-model="show" max-width="500">
      <div class="appModal">
        <header class="appModal__header">
          <button 
            class="appBtn"  
            :class="formType !== 'login' ? 'appBtn--outline' : null"
            @click="formType = 'login'"
          >Authorization</button>
          <button 
            class="appBtn" 
            :class="formType !== 'registration' ? 'appBtn--outline' : null"
            @click="formType = 'registration'"
          >Registration</button>
        </header>
        <div class="appModal__body">
          <div class="registration" v-if="formType == 'registration'">
            <p class="appText text-center" :class="classSuccess">
              {{$route.params.message}}
            </p>
            <Form class="appForm" @submit="Registration()" :validation-schema="schemaRegistration"> 
              <div class="appForm__group">  
                <label for="emailAuth">E-mail</label>
                <Field name="emailAuth" id="emailAuth" type="text" class="appInput" v-model.trim="emailAuth" placeholder="Enter your e-mail"/>
                <ErrorMessage class="appError" name="emailAuth" />
              </div>
              <div class="appForm__group"> 
                <label for="password">Password</label>
                <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password"  autocomplete="on"/>
                <p class="appText profileForm__notise">The password must be at least 6 characters long.</p>
                <ErrorMessage class="appError" name="password" />
              </div>
              <div class="appForm__group"> 
                <label for="passwordConfirm">Password Confirmation</label>
                <Field name="passwordConfirm" id="passwordConfirm" type="password" class="appInput" v-model.trim="passwordConfirm" placeholder="Enter your password again"  autocomplete="on"/>
                <ErrorMessage class="appError" name="passwordConfirm" /> 
              </div>
              <div class="appError" v-for="(error, index) in errors" :key="index">
                <div class="" v-for="(err, index1) in error" :key="index1">
                  {{ err }}
                </div>
              </div>
              <button class="appBtn appBtn--meduim appBtn--outline appModal__btn">REGISTER</button>
            </Form>
          </div>
          <div class="login" v-if="formType == 'login'">
            <p class="appText text-center success" :class="classSuccess">
              {{$route.params.message}}
            </p>
            <Form class="appForm" @submit="Login()"
             :validation-schema="schemaLogin"> 
              <div class="appForm__group">  
                <label for="emailAuth">E-mail</label>
                <Field name="emailAuth" id="emailAuth" type="text" class="appInput" v-model.trim="emailAuth" placeholder="Enter your e-mail"/>
                <ErrorMessage class="appError" name="emailAuth" />
              </div>
              <div class="appForm__group"> 
                <label for="password">Password</label>
                <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password" autocomplete="on"/>
                <ErrorMessage class="appError" name="password" />
              </div>
              <div class="appError" v-for="(error, index) in errors" :key="index">
                <div class="" v-for="(err, index1) in error" :key="index1">
                  {{ err }}
                </div>
              </div>
              <button class="appBtn appBtn--meduim appBtn--outline appModal__btn">Login</button>
            </Form>
          </div>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
import AppSelect from '../components/ui/AppSelect.vue'
import {mapGetters} from "vuex"
import "gitart-vue-dialog/dist/style.css";
import { GDialog, plugin } from "gitart-vue-dialog";

  export default {
    data: () => ({
      items: [{name: 'de'}, {name: 'ru'}, {name: 'eng'}],
      lang: {name: 'ru'},
      show: false,
      emailAuth: '',
      password: '',
      passwordConfirm: '',
      errors: '',
      formType: 'login', 
    }),
    watch: {
      "$route.params"(value) {
        if(value.login){
          this.show = true
          this.formType = 'login'
        }
        if(value.registration){
          this.show = true 
          this.formType = 'registration'
        }
      }
    },
    methods: {
      setLocale(event){
        this.lang = event
        this.$i18n.locale = event.name
      },
      onOpen() {
        this.isLoggedIn ? 
          this.$router.push('/profile')
        :
          this.show = true
      },
      async Registration(){
        let data = {
          email: this.emailAuth,
          password: this.password,
          re_password: this.passwordConfirm
        }
        this.errors = ''
        try{
          await this.$store.dispatch('register', data)
          this.show = false
          this.$router.push({name: 'EmailCheck', params: {email: this.emailAuth}})
        }catch (err) {
          if(err.response){
            this.errors = err.response.data
          }
        }
      },
      async Login(){
        let data = {
          email: this.emailAuth,
          password: this.password,
        }
        this.errors = ''
        try{
          await this.$store.dispatch('login', data)
          await this.$store.dispatch('loadCart')
          this.show = false
          this.$router.push('/profile')
        }catch (err) {
          if(err.response){
            this.errors = err.response.data
          }
        }
      }
    },
    components: {
      AppSelect,
      GDialog,
      Form,
      Field,
      ErrorMessage,
    },
    computed: {
      ...mapGetters(['isLoggedIn', 'totalItems']),
      schemaRegistration() {
        return yup.object({
          emailAuth: yup.string().required().email(),
          password: yup.string().required(),
          passwordConfirm: yup.string().required().test('password-confirm', 'password not confirm', value => value === this.password),
        });
      },
      classSuccess(){
        return this.$route.params.check == 'success' ? 'success' : 'error'
      },
      schemaLogin() {
        return yup.object({
          emailAuth: yup.string().required().email(),
          password: yup.string().required(),
        });
      },
    }
  }
</script>

<style lang="less" >

</style>