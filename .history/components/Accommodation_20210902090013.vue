<template>
  <div>
    <img
      :src="require(`../assets/reviews/${item.img || 'item-1.jpg'}`)"
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

<style lang="scss" scoped></style>
