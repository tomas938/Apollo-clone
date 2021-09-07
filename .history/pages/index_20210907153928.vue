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
      val: '',
    }
  },
  methods: {
    log(calendarVisible) {
      this.val = calendarVisible
    },
      console.log(this.val)
  },
}
</script>
