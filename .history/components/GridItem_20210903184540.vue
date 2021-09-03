<template>
  <div class="item">
    <nuxt-link :to="`/${item.link}/${item.id}`">
      <img
        :src="
          require(`../assets/${item.type}/${item.img || 'accommodation-1.jpg'}`)
        "
        alt=""
      />
    </nuxt-link>
    <div class="title">
      <nuxt-link :to="`/${item.link}/${item.id}`">{{ item.name }}</nuxt-link>
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
  position: relative;
  transform: scale(1);
  overflow: hidden;
  &:hover {
    img {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.02);
    }
  }
}
img {
  cursor: pointer;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.title {
  width: 100%;
  padding: 3rem;
  font-size: 2.3rem;
  @media only screen and (max-width: 800px) {
    padding: 3rem 1rem;
    font-size: 1.7rem;
  }
}
a {
  height: 100%;
  font-weight: 500;
  color: var(--heading-page);
}
</style>
