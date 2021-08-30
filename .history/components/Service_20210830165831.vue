<template>
  <div class="container">
    <img
      :src="require(`../assets/home-icons/${service.img || 'home-1.svg'}`)"
      alt="service"
      class="service"
    />
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['service'],
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
img {
  width: 8rem;
  height: 8rem;
}
</style>
