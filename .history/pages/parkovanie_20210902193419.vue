<template>
  <div>
    <h1>{{ parking.title }}</h1>
  </div>
</template>

<script>
import { parking } from '../assets/data'
export default {
  data() {
    return {
      parkingPageData = parking,
    }
  },
}
</script>

<style lang="scss" scoped></style>
