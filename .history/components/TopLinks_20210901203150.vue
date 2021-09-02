<template>
  <div>
    <div class="container">
      <nuxt-link to="/">Home</nuxt-link> /
      <nuxt-link to="path">{{ path }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['das'],
}
</script>

<style lang="scss" scoped></style>
