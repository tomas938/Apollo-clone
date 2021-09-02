<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>{{ parkingPageData.title }}</h1>
        <h2>{{ parkingPageData.subTitleInfo }}</h2>
        <p>{{ parkingPageData.navigation }}</p>
        <p>{{ parkingPageData.capacity }}</p>
        <p>{{ parkingPageData.restrictions }}</p>
        <h2>{{ parkingPageData.subTitlePrice }}</h2>
        <p>{{ parkingPageData.price }}</p>
        <p>{{ parkingPageData.priceCustomers }}</p>
        <p>{{ parkingPageData.others }}</p>
      </div>
      <div class="right">
        <div class="big">
          <img
            :src="
              require(`../assets/parking/${parkingPageData.img[this.slide]}`)
            "
            alt="room image"
          />
        </div>
        <div class="small">
          <img
            v-for="(img, index) in parkingPageData.img"
            :key="index"
            :src="require(`../assets/parking/${parkingPageData.img[index]}`)"
            @click="slide()"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { parking } from '../assets/data'
export default {
  data() {
    return {
      parkingPageData: parking,
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
section {
  display: flex;
  gap: 3rem;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
}
.left {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
}
.right {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
}
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
