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
              require(`../../assets/rooms/parking/${
                parkingPageData.img[this.slide]
              }`)
            "
            alt="room image"
          />
        </div>
        <div class="small">
          <img
            @click="getIndex(index)"
            v-for="(img, index) in category.roomImg"
            :key="index"
            :src="
              require(`../../assets/rooms/${category.type}/${category.roomImg[index]}`)
            "
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
    }
  },
}
</script>

<style lang="scss" scoped>
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
</style>
