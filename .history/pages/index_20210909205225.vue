<template>
  <div @click="">
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
  methods: {},
  mounted() {
    this.$root.$on('clicked', (val) => {
      this.calendarActive = val
    })
  },
}
</script>
