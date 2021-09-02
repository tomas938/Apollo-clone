<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="path">{{ path }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['path'],
}
</script>

<style lang="scss" scoped></style>
