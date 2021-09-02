<template>
  <div class="container">
    <section>
      <ParkingPageContent
        :parkingPageData="parkingPageData"
      ></ParkingPageContent>
      <!-- <div class="left">
        <h1>{{ parkingPageData.title }}</h1>
        <h2>{{ parkingPageData.subTitleInfo }}</h2>
        <p>{{ parkingPageData.navigation }}</p>
        <p>{{ parkingPageData.capacity }}</p>
        <p>{{ parkingPageData.restrictions }}</p>
        <h2>{{ parkingPageData.subTitlePrice }}</h2>
        <p>{{ parkingPageData.price }}</p>
        <p>{{ parkingPageData.priceCustomers }}</p>
        <p>{{ parkingPageData.others }}</p>
      </div> -->
      <Slider :data="parkingPageData"></Slider>
    </section>
  </div>
</template>

<script>
import { parking } from '../assets/data'
export default {
  data() {
    return {
      ParkingPageContentparkingPageData: parking,
    }
  },
}
</script>
