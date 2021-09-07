<template>
  <div class="container">
    <section>
      <div class="grid">
        <div class="item" v-for="(img, index) in grid.img" :key="index">
          <img
            @click="toggleSlide()"
            :class="{ slide: active }"
            :src="
              require(`../assets/detialgallery/${grid.type}/${grid.img[index]}`)
            "
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['grid'],
  data() {
    return {
      active: null,
    }
  },
  methods: {
    toggleSlide() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss" scoped>
.slide {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: black;
}
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
