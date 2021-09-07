<template>
  <main>
    <img src="../assets/hero.jpg" alt="" />
    <div class="reservation">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.reservation {
  width: 40rem;
  height: 15rem;
  background: red;
}
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
