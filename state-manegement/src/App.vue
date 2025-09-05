<script setup lang="ts"></script>

<template>
  <product-list-two ></product-list-two>
  <product-list-one  ></product-list-one>
</template>
<script>
import ProductListOne  from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
export default {
  components:{
    'product-list-one':ProductListOne,
     'product-list-two':ProductListTwo
  },
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
body{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color:#555
}</style>
