<template>
  <div class="container">
    <section>
      <accomodationPageContent :category="category"></accomodationPageContent>
      <Slider :data="category"></Slider>
    </section>
  </div>
  <SubGrid :grid="subgrid"></SubGrid>
</template>

<script>
export default {
  computed: {
    subgrid() {
      return this.$store.getters.getSubGrid(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
