<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import ProductCardOne from './components/ProductCardOne.vue'
import ProductCardTwo from './components/ProductCardTwo.vue'
import ProductCardThree from './components/ProductCardThree.vue'

const products = [
  {
    id: 1,
    name: 'Airpods Pro 2',
    price: 249.99,
    description: 'The best wireless earbuds with noise cancellation.',
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2499.99,
    description: 'The most powerful MacBook for professionals.',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 999.99,
    description: 'The latest iPhone with advanced features.',
  }
]
</script>

<template>
  <h1>Featured Products</h1>
  <div id="app">
    <h1>Product Display</h1>
    <div class="product-list">
    <ProductCardOne v-bind:product="products[0]" />
    <ProductCardTwo v-bind:product="products[1]" />
    <ProductCardThree v-bind:product="products[2]" />
    </div>
  </div>
  
</template>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
}
</style>
