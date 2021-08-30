<template>
  <div class="service">
    <img
      :src="require(`../assets/home-icons/${service.img || 'home-1.svg'}`)"
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
.service {
  display: flex;
  flex-direction: column;
}
img {
  width: 8rem;
  height: 8rem;
}
</style>
