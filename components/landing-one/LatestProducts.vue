<template>
    <div>
        <!-- Start All Products Area -->
        <section class="all-products-area pb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Latest Products</h2>
                </div>

                <div class="row">

                    <ProductItem
                        v-for="(product, index) in Produits"
                        :product="product"
                        :key="index"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>
                    
                </div>
            </div>
        </section>
        <!-- End all Products Area -->
        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from './ProductItem';
import axios from 'axios';
export default {
    components: {
        QuckView,
        ProductItem,
    
    },

    data(){
     return{
        Produits: [],
        produitsRecents:[]
     }
    },
    methods: {
        toggle() {
            mutations.toggleQuickView();
        },
        //  getProducts(){
        //     axios.get("https://www.affairez.com/apistock/api/get/products")
        //          .then((resp) =>{
        //              this.Produits = resp.data;
        //              console.log(this.Produits);
        //          })
        // }

       
    },
    computed: {
        // products(){
        //     return this.$store.state.products.all.filter(product => product.latest === true)
        // },
       
        
        
    },

    created: function(){
        // this.getProducts
         axios.get("https://www.affairez.com/apistock/api/get/products")
                 .then((resp) =>{
                     this.Produits = resp.data;
                     this.Produits.reverse()
                     this.Produits.length = 8
                 })
        
    }
}
</script>