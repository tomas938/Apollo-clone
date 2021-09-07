<template>
  <div class="container">
    <section>
      <div class="grid">
        <div class="item" v-for="(img, index) in grid.img" :key="index">
          <img :class="{"big": active}" :src="
          require(`../assets/detialgallery/${grid.type}/${grid.img[index]}`) "
          />
        </div>
      </div>
    </section>
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
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
.item {
  display: flex;
  flex-direction: column;
  position: relative;
  transform: scale(1);
  filter: brightness(100%);
  overflow: hidden;
  &:hover {
    img {
      transition: all 0.3s ease-in-out;
      filter: brightness(80%);
      transform: scale(1.02);
    }
  }
}

img {
  cursor: pointer;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
</style>
