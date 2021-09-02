<template>
  <div class="container">
  <section>
    <AccomodationPageContent :category="category"></accomodationPageContent>
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
