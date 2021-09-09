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
export default {}
</script>

<style lang="scss" scoped></style>
