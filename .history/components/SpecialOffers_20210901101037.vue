<template>
  <div>
    <h2>Špeciálne ponuky</h2>
    <div class="container">
      <special-offer></special-offer>
      <special-offer></special-offer>
    </div>
  </div>
</template>

<script>
export default {
  components: { SpecialOffer },
}
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
