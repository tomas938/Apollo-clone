<template>
  <div>
    <div class="left">
      <img
        :src="require(`../assets/reviews/${review.img} || review-1.jpg`)"
        alt="review"
      />
      <span>{{ review.personInformation }}</span>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: ['review'],
}
</script>

<style lang="scss" scoped></style>
