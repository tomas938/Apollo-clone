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
  display: flex;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
}
h2 {
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  color: var(--heading);
  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
}
</style>
