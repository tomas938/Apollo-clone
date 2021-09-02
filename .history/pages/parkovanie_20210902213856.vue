<template>
  <div class="container">
    <section>
      <ParkingPageContent
        :parkingPageData="parkingPageData"
      ></ParkingPageContent>
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
    }
  },
}
</script>
