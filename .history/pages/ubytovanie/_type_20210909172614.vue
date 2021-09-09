<template>
  <div class="container">
    <section>
      <!-- <accomodationPageContent :category="category"></accomodationPageContent>
      <Slider :data="category"></Slider> -->
      {{ category }}
      {{ category }}
      {{ category }}
      {{ category }}
      {{ category }}
      {{ category }}
      {{ category }}
      {{ category.title }}
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getProductById(this.$route.params.type)
    },
  },
}
</script>
