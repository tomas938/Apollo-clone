<template>
  <div>
    <img :src="`../assets/svgs/${service.img} || 'home-1.jpg'`" alt="service" />
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
props:["service"].
export default {}
</script>

<style lang="scss" scoped></style>
