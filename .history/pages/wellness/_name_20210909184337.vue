<template>
  <div class="container">
    <section>
      <WellnessPageContent :wellnessData="wellness"> </WellnessPageContent>
      <Slider :data="wellness"></Slider>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    wellness() {
      return this.$store.getters.getWellnessById(
        Number(this.$route.params.name)
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
