<template>
  <div class="container">
    <h2>Napísali o nás</h2>
    <Review
      v-for="review in reviews"
      :key="review.id"
      :review="review"
    ></Review>
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
