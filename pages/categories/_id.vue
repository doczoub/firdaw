<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Categories</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Collections Area -->
    <section class="products-collections-area ptb-60">
      <div class="container">
        <div class="section-title" v-for="domain in productsby" :key="domain.id">
          <h2><span class="dot"></span> {{domain.domainname}}</h2>
        </div>

        <div class="row" >
          <div>
         <sousCategory/>
         </div>
         <!-- <Sidebar /> -->
          <div class="single-product-box" v-for="domain in productsbydomain" :key="domain.id">
            <div class="product-image">
              <nuxt-link :to="'/lastest-products/'+domain.id">
                <img v-if="domain.imageurl" :src="domain.imageurl" :alt="domain.name" style="width: 200px; height: 200px">
                <img v-if="domain.imageurl" :src="domain.imageurl" :alt="domain.name" style="width: 200px; height: 200px">
                <img v-if="!domain.imageurl" src="/produit.png" style="width: 200px; height: 200px">
              </nuxt-link>

              <ul>
                <li>
                  <a href="javascript:void(0)" title="Quick View" v-b-tooltip.hover
                      @click.prevent="quickView">
                    <i class="far fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      title="Add to Wishlist"
                      v-b-tooltip.hover
                  >
                    <i class="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      title="Add to Compare"
                      v-b-tooltip.hover
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                </li>
              </ul>

              <!-- <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer> -->
            </div>

            <div class="product-content">
              <h3>
                    <nuxt-link :to="'/latest-products/'">{{domain.name}}</nuxt-link>
                </h3>
<!--              <h3>-->
<!--                <nuxt-link :to="`/latest-products/${domain.id}`">-->
<!--                  {{domain.description}}-->
<!--                </nuxt-link>-->
<!--              </h3>-->

              <div class="product-price">
                <!-- <span
                    class="old-price"
                    v-if="product.offer"
                >
                    ${{product.price - product.offerPrice}}
                </span> -->
                <span class="new-price">{{domain.price}} Cfa</span>
              </div>

              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <a
                  v-if="getExistPId === domain.id"
                  href="javascript:void(0)"
                  class="btn btn-light added-btn"
                  @click="addToCart">
                Added Already!
              </a>

              <a
                  v-else
                  href="javascript:void(0)"
                  class="btn btn-light"
                  @click="addToCart">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Collections Area -->

  </div>
</template>

<script>
import axios from 'axios';
import sousCategory from './sous_category/_sousCategory';
export default {
  data() {
    return {
      link: this.$route.params,
      quantity: 0,
      getExistPId: null,
      productsbydomain: [],
      limit:1
    }
  },

  components: {
    sousCategory
  },
  computed:{
     productsby(){
       return this.limit? this.productsbydomain.slice(0,this.limit) :this.productsbydomain
     }
  },

  created() {
    axios.get('https://www.affairez.com/apistock/api/get/products-by-domain/'+this.$route.params.id)
        .then((response) => {
          this.productsbydomain = response.data;
          console.log(response.data)
        }).catch(function (error) {
          console.log(error)})
  },

  methods: {
    addToCart(){
      const product = [{
        id: this.id,
        name: this.name,
        price: this.price,
        image: this.image,
        quantity: this.quantity
      }]

      if(this.cart.length > 0){
        let id = this.id
        let cartIndex = this.cart.findIndex(cart => {
          return cart.id == id
        })

        if(cartIndex == -1){
          this.$store.dispatch('addToCart', product);
          this.$toast("Added to cart", {
            icon: 'fas fa-cart-plus'
          });
        } else {
          this.$store.dispatch('updateCart', {
            id, unit: 1, cart: this.cart
          });
          this.getExistPId = true
          this.$toast.info("Already added to the cart");
        }
      } else {
        this.$store.dispatch('addToCart', product)
        this.$toast("Added to cart",{
          icon: 'fas fa-cart-plus'
        });
      }
    },
    increaseQuantity(){
      if(this.quantity > 9){
        this.$toast("Can't add more than 10",{
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if(this.quantity < 2){
        this.$toast("Can't add less than 1",{
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity--;
      }
    },
  }
}
</script>