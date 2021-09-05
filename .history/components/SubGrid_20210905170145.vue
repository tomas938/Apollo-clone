<template>
  <div class="grid">
    <GridItem v-for="item in data" :key="item.id" :item="item"></GridItem>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  grid-template-rows: repeat(2, 1fr);
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
