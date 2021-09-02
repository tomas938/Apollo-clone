<template>
  <div>
    <h1>{{ category }}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getCategoryById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped></style>
