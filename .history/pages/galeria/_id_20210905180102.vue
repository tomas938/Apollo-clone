<template>
  <div class="container">
    <section>
      <Slider :data="subgrid"></Slider>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    subgrid() {
      return this.$store.getters.getSubGridById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
