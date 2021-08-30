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
      <h3>review.title</h3>
      <p>review.desc</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['review'],
}
</script>

<style lang="scss" scoped></style>
