<template>
  <div>
    <div class="big">
      <img
        :src="require(`../assets/parking/${data.img[this.slide]}`)"
        alt="parking image"
      />
    </div>
    <div class="small">
      <img
        v-for="(img, index) in data.img"
        :key="index"
        :src="require(`../assets/parking/${data.img[index]}`)"
        @click="slideImg(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      slide: 0,
    }
  },
  methods: {
    slideImg(index) {
      this.slide = index
    },
  },
}
</script>

<style lang="scss" scoped>
.big {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 3rem;
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
}
.small {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s ease-in;
}
h1 {
  padding-top: 0;
}
</style>
