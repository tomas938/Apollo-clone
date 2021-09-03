<template>
  <div class="container">
    <section>
      <Grid :category="category"></Grid>
      <Slider :data="category"></Slider>
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
