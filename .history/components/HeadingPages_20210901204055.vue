<template>
  <h1>{{ heading }}</h1>
</template>

<script>
export default {
  props: ['heading'],
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  color: var(--heading-text);
  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
}
</style>
