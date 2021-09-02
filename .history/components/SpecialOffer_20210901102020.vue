<template>
  <div class="offer">
    <img src="../assets/rooms/room-1.jpg" alt="" />
    <div class="description">
      <div class="title">Zostante dlhšie za menej</div>
      <p>Rezervujte si min. 3 noci a dostanete 7 % zľavu !</p>
      <nuxt-link to="/">Zistiť dostupnosť</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.offer {
  padding: 2rem 2rem 10rem 2rem;
  min-width: 33rem;
}
.description {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
}
</style>
