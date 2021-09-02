<template>
  <div>
    <h1>{{ category.title }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
