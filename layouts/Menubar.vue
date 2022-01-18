<template>
  <div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
      <div class="comero-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <nuxt-link class="navbar-brand" to="/">
              <img src="../assets/img/affairez.png" alt="logo" height="80">
            </nuxt-link>

            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
              <ul class="navbar-nav">

                <li class="nav-item p-relative"><a href="#" class="nav-link">Acceuil <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <nuxt-link to="/" class="nav-link active">Home Style One</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/diction-two" class="nav-link active">Home Style Two</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-three" class="nav-link active">Home Style Three</nuxt-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item p-relative"><a href="#" class="nav-link">Boutique <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item"><nuxt-link to="/products" class="nav-link">Produits</nuxt-link></li>

                    <li class="nav-item"><nuxt-link to="/products-details/1" class="nav-link">Details Produits</nuxt-link></li>
                  </ul>
                </li>

                <li class="nav-item p-relative">
                  <a href="#" class="nav-link">Categories <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu" >
                    <li class="nav-item" v-for="cat in categories_domain" :key="cat.id">
                      <nuxt-link :to="'/categories/'+cat.id" class="nav-link">
                        {{cat.name}}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>

<!--                <li class="nav-item">-->
<!--                  <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>-->
<!--                </li>-->

                <li class="nav-item p-relative"><a href="#" class="nav-link">Pages <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/cart" class="nav-link">Cart</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/checkout" class="nav-link">Checkout</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/signup" class="nav-link">Signup</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/not-found" class="nav-link">Error 404</nuxt-link>
                    </li>

                    <li class="nav-item">
                      <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item p-relative"><a href="#" class="nav-link">Blog <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item"><nuxt-link to="/blog-one" class="nav-link">Blog Grid</nuxt-link></li>

                    <li class="nav-item"><nuxt-link to="/blog-details" class="nav-link">Blog Details</nuxt-link></li>
                  </ul>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                </li>
              </ul>

              <div class="others-option">
                <div class="option-item">
                  <nuxt-link to="/login">Login</nuxt-link>
                </div>
                <div class="option-item">
                  <a @click.prevent="toggle" href="#">
                    Cart({{cart.length}}) <i class="fas fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </b-collapse>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Navbar Area -->

    <SidebarPanel></SidebarPanel>
  </div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import { mutations } from '../utils/sidebar-util';

import axios from 'axios'
export default {
  components: {
    SidebarPanel
  },
  data(){
    return {
      isSticky: false,
      link:this.$route.params,
      categories_domain:[],
      productsbydomain:[]
    }
  },
  mounted(){
    const that = this;
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;
      if(scrollPos >= 100){
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    })


    axios.get('https://www.affairez.com/apistock/api/get/categories_domain')
        .then((response) => {
          this.categories_domain = response.data;
          // console.log(response.data)
        });

  },
  computed: {
    cart(){
      return this.$store.getters.cart
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
}
</script>

<style scoped>
.dropdown-menu{
  max-height: 80vh;
  overflow-y: auto;
}
</style>