<template>
  <div>
    <h1>{{ parkingPageData.title }}</h1>
    <h2>{{ parkingPageData.subTitleInfo }}</h2>
    <p>{{ parkingPageData.navigation }}</p>
    <p>{{ parkingPageData.capacity }}</p>
    <p>{{ parkingPageData.restrictions }}</p>
    <h2>
      {{ parkingPageData.price }}
    </h2>
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

<style lang="scss" scoped></style>
