<template>
  <div>
    <Hero @clicked="log(name)"></Hero>
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
      console.log(name)
    },
  },
}
</script>
