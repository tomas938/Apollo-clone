<template>
  <div class="container">
    <img
      :src="`../assets/home-icons/${service.img || 'home-1.svg'}`"
      alt="service"
    />
    <img src="/assets/home-icons/home-1.svg" alt="" />
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['service'],
}
</script>

<style lang="scss" scoped>
img {
  width: 5rem;
  height: 5rem;
  fill: red;
}
</style>
