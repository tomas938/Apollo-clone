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
        this.$route.params.name.toLoweCase()
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
