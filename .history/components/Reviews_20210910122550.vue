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
  padding: 5rem 0rem;
  margin-bottom: 6rem;
  display: flex;
  gap: 3rem;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
}
h2 {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: var(--heading-text);
  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 800px) {
    display: none;
    padding-bottom: 0;
  }
}
</style>
