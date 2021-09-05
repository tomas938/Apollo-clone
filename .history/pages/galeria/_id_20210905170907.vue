<template>
  <div class="container">
    <section>
      <GridItem v-for="item in subgrid" :key="item.id" :item="item"></GridItem>
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
