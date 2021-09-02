<template>
  <div>
    <h2>Špeciálne ponuky</h2>
    <special-offer class="container"></special-offer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
