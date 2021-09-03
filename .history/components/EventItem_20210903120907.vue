<template>
  <div class="event-item">
    <img :src="require(`../assets/svgs/${svg}.svg`)" alt="" />
    <span>{{ event }}}</span>
    <nuxt-link to="">Viac info</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['event', 'svg'],
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
