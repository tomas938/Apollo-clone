<template>
  <div class="event-item">
    <img :src="require(`../assets/svgs/${icon}.svg`)" alt="" />
    <span>{{ event }}</span>
    <nuxt-link to="">Viac info</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['event', 'icon'],
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
span {
  font-weight: 500;
}
</style>
