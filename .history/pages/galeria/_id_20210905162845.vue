<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getSubGrid(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
