<template>
  <div class="container">
    <section>
      <SubGrid :data="subgrid"></SubGrid>
    </section>
  </div>
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
