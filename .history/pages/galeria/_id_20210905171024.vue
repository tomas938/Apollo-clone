<template>
  <div class="container">
    <section>
      <img src="../../assets/conference/conference-1.jpg" alt="" />
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
