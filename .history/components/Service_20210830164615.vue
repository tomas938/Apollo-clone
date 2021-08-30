<template>
  <div class="container">
    <img
      :src="`../assets/home-icons/${service.img || 'home-1.svg'}`"
      alt="service"
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
img {
  width: 5rem;
  height: 5rem;
  background: red($color: #000000);
}
</style>
