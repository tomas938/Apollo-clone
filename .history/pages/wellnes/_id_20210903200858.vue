<template>
  <div class="container">
    <section>
      <WellnessPageContent> </WellnessPageContent>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    wellness() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
