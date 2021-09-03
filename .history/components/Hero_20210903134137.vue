<template>
  <main>
    <img src="../assets/hero.jpg" alt="" />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  z-index: -1;
}
img {
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
    min-height: 100vh;
  }
}
</style>
