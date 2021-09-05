<template>
  <div class="container">
    <section>
      <SubGrid :grid="subgrid"></SubGrid>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    subgrid() {
      return this.$store.getters.getWellnessById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
