<template>
  <div class="container">
    <section>
      <accomodationPageContent :category="category"></accomodationPageContent>
      <Slider :data="category"></Slider>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getProductByName(this.$route.params.name)
    },
  },
}
</script>
