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
  data() {
    return {
      calendarActive: null,
    }
  },
  mounted() {
    this.$root.$on('clicked', (val) => {
      this.calendarActive = val
    })
  },
}
</script>
