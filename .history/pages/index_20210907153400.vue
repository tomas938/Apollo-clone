<template>
  <div>
    <Hero @clicked="log()"></Hero>
    <Services></Services>
    <SpecialOffers></SpecialOffers>
    <Reviews></Reviews>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
export default {
  layout: 'homeNav',
  data() {
    return {
      data: null,
    }
  },
  methods: {
    log(calendarVisible) {
      this.data = calendarVisible
      console.log(this.data)
    },
  },
}
</script>
