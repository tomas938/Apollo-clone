<template>
  <div class="container">
    <section>
      <WellnessPageContent :wellnessData="wellness"> </WellnessPageContent>
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
