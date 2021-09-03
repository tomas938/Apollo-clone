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
  gap: 3rem;
  margin-bottom: 8rem;
}
img {
  width: 8rem;
  height: 8rem;
}
span {
  font-weight: 500;
  font-size: 1.8rem;
}
a {
  color: var(--heading-page);
  font-size: 1.8rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover {
    transition: color 0.3s ease-in-out;
    color: var(--heading);
  }
}
</style>
