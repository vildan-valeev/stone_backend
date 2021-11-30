<template>
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
          <Form class="appForm" @submit="Registration()" :validation-schema="schemaRegistration"> 
            <div class="appForm__group">  
              <label for="email">E-mail</label>
              <Field name="email" id="email" type="text" class="appInput" v-model.trim="email" placeholder="Enter your e-mail"/>
              <ErrorMessage class="appError" name="email" />
            </div>
            <div class="appForm__group"> 
              <label for="password">Password</label>
              <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password" autocomplete="on"/>
              <p class="appText profileForm__notise">The password must be at least 6 characters long.</p>
              <ErrorMessage class="appError" name="password" />
            </div>
            <div class="appForm__group"> 
              <label for="passwordConfirm">Password Confirmation</label>
              <Field name="passwordConfirm" id="passwordConfirm" type="password" class="appInput" v-model.trim="passwordConfirm" placeholder="Enter your password again"/>
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
          <Form class="appForm" @submit="Login()"
            :validation-schema="schemaLogin"> 
            <div class="appForm__group">  
              <label for="email">E-mail</label>
              <Field name="email" id="email" type="text" class="appInput" v-model.trim="email" placeholder="Enter your e-mail"/>
              <ErrorMessage class="appError" name="email" />
            </div>
            <div class="appForm__group"> 
              <label for="password">Password</label>
              <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password"/>
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
</template>

<script>
import "gitart-vue-dialog/dist/style.css";
import { GDialog, plugin } from "gitart-vue-dialog";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
export default {
  name: 'AuthForm',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    email: '',
    password: '',
    passwordConfirm: '',
    errors: '',
    formType: 'login', 
  }),
  watch: {
    show(){
      this.$emit('update:showAuth', this.show)
    }
  },
  methods: {
    setLocale(event){
      this.lang = event
      this.$i18n.locale = event.name
    },
    async Registration(){
      let data = {
        email: this.email,
        password: this.password,
      }
      this.errors = ''
      try{
        await this.$store.dispatch('register', data)
        await this.$store.dispatch('login', data)
        this.show = false
        this.$router.push('/profile')
      }catch (err) {
        if(err.response){
          this.errors = err.response.data
        }
      }
    },
    async Login(){
      let data = {
        email: this.email,
        password: this.password,
      }
      this.errors = ''
      try{
        await this.$store.dispatch('login', data)
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
    GDialog,
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    schemaRegistration() {
      return yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
        passwordConfirm: yup.string().required().test('password-confirm', 'password not confirm', value => value === this.password),
      });
    },
    schemaLogin() {
      return yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });
    },
  }
}
</script>

<style>

</style>