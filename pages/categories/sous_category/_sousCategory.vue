<template>
<div>
    <div class="woocommerce-sidebar-area">
     <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    Sous category

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row" v-for="catparent in categoriesParent" :key="catparent.id">
                      <nuxt-link to="">  <li>  {{catparent.name}}</li> </nuxt-link>
                    </ul>
                </b-collapse>
            </div>
            </div>
            </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
             link: this.$route.params,
            categoriesParent:[]
        }
    },
      created() { 
    axios.get('https://www.affairez.com/apistock/api/get/categories_parent/'+this.$route.params.id+'/1')
        .then((response) => {
          this.categoriesParent = response.data;
          console.log(response.data)
        }).catch(function (error) {
          console.log(error)})
  },
}
</script>

<style scoped>
ul {
  padding-left: 2rem;
  list-style: none;
}
ul li{
  font-size: 16px;
  color: #000;
}
</style>