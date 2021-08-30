<template>
  <div class="services container">
    <img
      :src="`../assets/home-icons/${service.img} || 'home-1.svg'`"
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
.services {
  margin-top: 100rem;
}
</style>
