<template>
  <div class="item">
    <img
      :src="
        require(`../assets/accommodation/${item.img || 'accommodation-1.jpg'}`)
      "
      alt=""
    />
    <h1>{{ item.name }}</h1>
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
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
h1 {
  padding: 0;
}
</style>
