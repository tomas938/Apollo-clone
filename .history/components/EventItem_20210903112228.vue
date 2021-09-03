<template>
  <div class="event-item">
    <img src="../assets/svgs/conference-event.svg" alt="" />
    <span>Svadba</span>
    <nuxt-link to="">Viac info</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.event-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
img {
  width: 10rem;
  height: 10rem;
}
</style>
