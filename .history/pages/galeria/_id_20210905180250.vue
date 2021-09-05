<template>
  <div class="container">
    <section>
      <SubGrid :grid="subgrid.img"></SubGrid>
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
