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
    this.$root.$on('clicked', (val) => {
      console.log(val)
    })
  },
}
</script>
