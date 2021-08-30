<template>
  <div>
    <div v-for="review in reviews" :key="review.id"></div>
  </div>
</template>

<script>
import { reviews } from '../assets/data'
export default {
  data() {
    return {
      reviews,
    }
  },
}
</script>

<style lang="scss" scoped></style>
