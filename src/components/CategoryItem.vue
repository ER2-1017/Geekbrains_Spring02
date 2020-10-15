<template>
  <b-container class="rounded">
    <b-col>
      <b-link href="#" class="d-block category-item__link">
        <b-img-lazy
          v-bind="imgProps"
          :src="getImageUrl(category.id)"
          v-bind:alt="category.title">
        </b-img-lazy>
        <b-badge pill variant="success" class="d-block category-item__name">
          {{ category.title }}
        </b-badge>
      </b-link>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 400,
        height: 400,
        class: 'mt-5 rounded',
      },
    };
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.imgProps;
      return `https://picsum.photos/id/${imageId}/${width}/${height}`;
    },
  },
};
</script>

<style scoped lang="sass">
  .category-item
    &__link
      position: relative
    &__name
      position: absolute
      right: 50px
      bottom: 20px
</style>
