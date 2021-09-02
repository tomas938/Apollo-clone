<template>
  <div class="item">
    <img
      :src="
        require(`../assets/accommodation/${item.img || 'accommodation-1.jpg'}`)
      "
      alt=""
    />
    <N uxt-link>{{ item.name }}</N>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
<style lang="scss" scoped>
.item {
  // display: flex;
  // flex-direction: column;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1 {
  padding: 0;
}
</style>
