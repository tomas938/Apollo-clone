<template>
  <main>
    <img src="../assets/hero.jpg" alt="" />
    <div class="resevation"></div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  margin-top: -17rem;
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
