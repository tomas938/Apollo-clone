<template>
  <div class="grid">
    <img
      v-for="(img, index) in grid.img"
      :key="index"
      :src="require(`../assets/${grid.type}/${grid.img[index]}`)"
    />
  </div>
  <GridItem></GridItem>
</template>

<script>
export default {
  props: ['grid'],
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
