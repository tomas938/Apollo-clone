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
    log(name) {
      this.val = calendarVisible
      console.log(name)
    },
  },
}
</script>
