<template>
  <h2>Špeciálne ponuky</h2>
  <special-offer></special-offer>
</template>

<script>
import SpecialOffer from './SpecialOffer.vue'
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
}
</style>
