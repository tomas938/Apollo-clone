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
    wellness() {
      return this.$store.getters.getWellnessById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
