<template>
  <b-container>
    <b-col>
      <b-card no-body
        style="max-width: 15rem;"
        class="p-1 rounded shadow mt-5"
      >
      <b-card-img-lazy
        :src="getImageUrl(product.id)"
        :alt="product.title"
        :top="true"
      ></b-card-img-lazy>
      <b-card-title
        :title="product.title"
        blank-color="#bbb"
        blank-width=200
        blank-height=200
      ></b-card-title>
      <b-card-text>Cost: {{ product.cost }}</b-card-text>
      <b-button href="#" variant="primary">Buy</b-button>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/id/${imageId}/200`;
    },
  },
};
</script>
