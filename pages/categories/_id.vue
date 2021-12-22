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
                <div class="section-title">
                    <h2><span class="dot"></span> {{productsbydomain.domainname}}</h2>
                </div>

                <div class="row">
                    <Sidebar />
                     <div class="single-product-box" v-for="domain in productsbydomain" :key="domain.id">
            <div class="product-image">
                <nuxt-link :to="`/lastest-products/${domain.id}`">
                    <img :src="domain.imageurl" :alt="domain.name">
                    <img :src="domain.imageHover" :alt="domain.name">
                </nuxt-link>

                <ul>
                    <li>
                        <a 
                            href="javascript:void(0)" 
                            title="Quick View"
                            v-b-tooltip.hover
                            @click.prevent="quickView"
                        >
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
                    <nuxt-link :to="`/latest-products/${domain.id}`">{{domain.name}}</nuxt-link>
                </h3>

                <div class="product-price">
                    <!-- <span 
                        class="old-price"
                        v-if="product.offer"
                    >
                        ${{product.price - product.offerPrice}}
                    </span> -->
                    <span class="new-price">${{domain.price}}</span>
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
import axios from 'axios'
import Sidebar from '/components/all-products/Sidebar'
export default {
    name: _id,

    data() {
        return {
            link: this.$route.params,
            productsbydomain:[]
        }
    },
    // async asyncData({ params, $axios }) {
    //   const productsbydomain = await $axios
    //   .$get(`https://www.affairez.com/apistock/api/get/products-by-domain/${params.productsbydomain}`)
    //   return { productsbydomain }
    // },
    components(){
        Sidebar
    },

    created() {
        // const domainId = this.$route.params.id
    axios.get('https://www.affairez.com/apistock/api/get/products-by-domain/${this.$route.params.id}')
    .then((response) => {this.productsbydomain = response.data;
        console.log(response.data)
             })
    .catch(function (error) {
        console.log(error)})
    },
}
</script>