<template>
  <div>
    <Hero></Hero>
    <Services></Services>
    <SpecialOffers></SpecialOffers>
    <Reviews></Reviews>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
export default {
  layout: 'homeNav',
  mounted() {
    this.$root.$on('clicked', args1, args2, ...)
  },
}
</script>
