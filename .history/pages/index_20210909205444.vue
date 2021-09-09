<template>
  <div @click="toggleCalendar()">
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
  methods: {
    toggleCalendar() {
      this.calendarActive = !this.calendarActive
    },
  },
}
</script>
