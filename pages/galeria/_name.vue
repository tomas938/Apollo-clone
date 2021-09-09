<template>
  <SubGrid :grid="subgrid"></SubGrid>
</template>

<script>
export default {
  computed: {
    subgrid() {
      return this.$store.getters.getSubGridByName(this.$route.params.name)
    },
  },
}
</script>

<style lang="scss" scoped></style>
