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
  padding: 5rem 2rem;
  display: flex;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
}
h2 {
  color: var(--heading);
  font-weight: 500;
  font-size: 5rem;
  text-align: center;
}
</style>
