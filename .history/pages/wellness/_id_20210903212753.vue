<template>
  <div class="container">
    <section>
      <WellnessPageContent :wellnessData="category"> </WellnessPageContent>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getWellnessById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
