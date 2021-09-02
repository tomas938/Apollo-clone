<template>
  <div>
    <h1>{{ item.name }}</h1>
    <img
      :src="
        require(`../assets/accommodation/${item.img || 'accommodation-1.jpg'}`)
      "
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
