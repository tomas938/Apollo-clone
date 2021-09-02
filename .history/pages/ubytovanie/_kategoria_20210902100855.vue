<template>
  <div>Hello</div>
</template>

<script>
export default {
    computed: {
    product() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
}
</script>

<style lang="scss" scoped></style>
