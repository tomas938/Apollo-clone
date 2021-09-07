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
main {
  margin-top: -17rem;
  position: relative;
}
.reservation {
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  bottom: 0;
  position: absolute;
  width: 100%;
  max-width: 80rem;
  height: 15rem;
}
.top {
  background: var(--header);
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
