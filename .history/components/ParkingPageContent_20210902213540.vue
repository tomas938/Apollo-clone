<template>
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
}
h1 {
  padding-bottom: 0rem;
}
h2 {
  margin-top: 1rem;
}
</style>
