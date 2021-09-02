<template>
  <div class="container">
    <section>
      <h1>{{ category.title }}</h1>
      <p>{{ category.aboutRoom }}</p>
    </section>
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
