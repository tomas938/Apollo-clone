<template>
  <div class="item">
    <img
      :src="
        require(`../assets/accommodation/${item.img || 'accommodation-1.jpg'}`)
      "
      alt=""
    />
    <div class="title">
      <nuxt-link to="/">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
img {
  cursor: pointer;
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.03);
  }
}
h1 {
  padding: 0;
}
.title {
  width: 100%;
  padding: 3rem;
}
a {
  font-weight: 500;
  font-size: 2.3rem;
  color: var(--heading-page);
}
</style>
