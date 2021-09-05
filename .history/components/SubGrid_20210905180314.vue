<template>
  <div class="grid">
    <img
      v-for="(img, index) in grid.img"
      :key="index"
      :src="require(`../assets/${grid.type}/${grid.img[0]}`)"
      @click="slideImg(index)"
    />
  </div>
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
  grid-template-rows: repeat(2, 1fr);
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
