<template>
  <div @clicked="log()">
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
  methods: {
    log() {
      console.log('gi')
    },
  },
}
</script>
