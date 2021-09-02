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
      <Slider :data="parkingPageData"></Slider>
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
</style>
