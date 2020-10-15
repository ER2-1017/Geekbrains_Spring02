<template>
  <b-container class="catalog">
    <h1>Catalog</h1>
    <b-row cols="4">
        <ProductItem
          v-for="product of products"
          v-bind:product="product"
          :key="product.id"
        />
    </b-row>
  </b-container>
</template>

<script>

import getDataset from '@/functions/get-data';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Catalog',
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductItem,
  },
  mounted() {
    getDataset('http://localhost:9000/api/catalog').then((data) => {
      this.products = [...data];
    });
  },
};
</script>
