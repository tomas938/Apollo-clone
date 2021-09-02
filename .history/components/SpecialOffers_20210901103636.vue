<template>
  <div>
    <h2>Špeciálne ponuky</h2>
    <div class="container">
      <specialoffer></specialoffer>
      <specialoffer></specialoffer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  padding-top: 2rem;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
h2 {
  font-family: var(----font-heading);
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  color: var(--heading);
  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
}
</style>
