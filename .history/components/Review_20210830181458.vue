<template>
  <div class="review">
    <div class="left">
      <img
        :src="require(`../assets/reviews/${review.img || 'review-1.jpg'}`)"
        alt="review"
      />
      <span>{{ review.personInformation }}</span>
    </div>
    <div class="right">
      <h3>{{ review.title }}</h3>
      <p>{{ review.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['review'],
}
</script>

<style lang="scss" scoped>
.review {
  padding: 2rem;

  display: flex;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  width: 50%;
  gap: 1rem;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
  span {
    width: 10rem;
    font-size: 1.2rem;
  }
}
.right {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
p {
  line-height: 2.7rem;
}
</style>
