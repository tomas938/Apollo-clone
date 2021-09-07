<template>
  <div>
    <Hero @clicked="log(state)"></Hero>
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
    log(state) {
      console.log(state)
    },
  },
}
</script>
