<template>
  <div>
    <WellnessPageContent></WellnessPageContent>
  </div>
  <div class="container">
    <section>
      <accomodationPageContent :category="category"></accomodationPageContent>
      <Slider :data="category"></Slider>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
