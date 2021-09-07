<template>
  <div>
    <Hero @clicked="log(calendarVisible)"></Hero>
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
    log(calendarVisible) {
      console.log('calendarVisible')
    },
  },
}
</script>
