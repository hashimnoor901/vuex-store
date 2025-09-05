<script setup lang="ts"></script>

<template>
 <div id="product-list-one">
    <h2>product list one </h2>
    <ul>
         <li v-for="product  in saleProducts" >
            <span>{{ product.name }}</span>
            <span> ${{ product.price }}</span>
         </li>
    </ul> 
 </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
export default {
 
    computed:{
   ...mapState({
    products:state=>state.products
   }),
  ...mapGetters([
    'saleProducts'
  ])
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>