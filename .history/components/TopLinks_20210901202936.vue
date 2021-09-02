<template>
  <div>
    <div class="container">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="path">{{ path }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['path'],
}
</script>

<style lang="scss" scoped></style>
