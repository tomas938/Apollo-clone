<template>
  <div>
    <h1>{{ product.title }}}</h1>
    <h1>{{ product.title }}}</h1>
    <h1>{{ product.title }}}</h1>
    <h1>{{ product.title }}}</h1>
    <h1>{{ product.title }}}</h1>
    <h1>{{ product.title }}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
