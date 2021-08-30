<template>
  <div>
    <img :src="`../assets/svgs/${service.img} || 'home-1.jpg'`" alt="service" />
    <p>{{ service.desc }}</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
