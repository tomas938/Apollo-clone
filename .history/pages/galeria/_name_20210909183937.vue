<template>
  <SubGrid :grid="subgrid"></SubGrid>
</template>

<script>
export default {
  computed: {
    subgrid() {
      return this.$store.getters.getSubGridById(this.$route.params.name)
    },
  },
}
</script>

<style lang="scss" scoped></style>
