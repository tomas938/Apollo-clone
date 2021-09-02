<template>
  <div class="container">
    <ParkingPageContent :parkingPageData="parkingPageData"></ParkingPageContent>
    <Slider :data="parkingPageData"></Slider>
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
