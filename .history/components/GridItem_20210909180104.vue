<template>
  <div class="item">
    <nuxt-link v-if="item.link" :to="`/${item.link}/${item.type}`">
      <img
        :src="
          require(`../assets/${item.type}/${item.img || 'accommodation-1.jpg'}`)
        "
        alt=""
      />
    </nuxt-link>
    <div v-if="item.name" class="title">
      <nuxt-link :to="`/${item.link}/${item.type}`">{{ item.name }}</nuxt-link>
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
  filter: brightness(100%);
  overflow: hidden;
  &:hover {
    img {
      transition: all 0.3s ease-in-out;
      filter: brightness(80%);
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
