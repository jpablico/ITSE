<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-price">${{ product.price.toFixed(2) }}</p>
    <p class="product-description">{{ product.description }}</p>
    <button class="add-to-cart-button">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
}
.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.product-name {
  font-size: 1.5em;
  margin: 8px 0;
}
.product-price {
  font-size: 1.2em;
  color: #d4d4d4;
}
.product-description {
  font-size: 1em;
  color: #666;
}
.add-to-cart-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.add-to-cart-button:hover {
  background-color: #218838;
}
</style>