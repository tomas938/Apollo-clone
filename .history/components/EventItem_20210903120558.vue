<template>
  <div class="event-item">
    <img src="../assets/svgs/conference-event.svg" alt="" />
    <span>{{ event }}}</span>
    <nuxt-link to="">Viac info</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['event'],
}
</script>

<style lang="scss" scoped>
.event-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 8rem;
}
img {
  width: 10rem;
  height: 10rem;
}
</style>
