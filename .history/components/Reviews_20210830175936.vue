<template>
  <div>
    <h2>Napísali o nás</h2>
    <div class="reviews container">
      <Review
        v-for="review in reviews"
        :key="review.id"
        :review="review"
      ></Review>
    </div>
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

<style lang="scss" scoped>
.reviews {
  padding: 5rem 0;
  display: flex;
}
h2 {
  text-align: center;
}
</style>
