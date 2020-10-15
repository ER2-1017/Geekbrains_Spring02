<template>
  <b-container>
    <h1>Product categories</h1>
    <b-row cols="3">
      <CategoryItem
        v-for="category of categories"
        v-bind:category="category"
        :key="category.id"
      />
    </b-row>
  </b-container>
</template>

<script>

import getDataset from '@/functions/get-data';
import CategoryItem from './CategoryItem.vue';

export default {
  name: 'Categories',
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    getDataset('http://localhost:9000/api/categories').then((data) => {
      this.categories = [...data];
    });
  },
  components: {
    CategoryItem,
  },
};
</script>
