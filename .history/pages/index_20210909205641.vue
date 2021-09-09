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
  props: ['dada'],
  data() {
    return {
      calendarActive: null,
      dada: calendarActive,
    }
  },
  methods: {
    toggleCalendar() {
      this.calendarActive = !this.calendarActive
      console.log(this.calendarActive)
    },
  },
  mounted() {
    this.$root.$on('clicked', (val) => {
      this.calendarActive = val
    })
  },
}
</script>
