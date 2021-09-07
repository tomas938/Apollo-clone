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
      show: true,
    }
  },
  methods: {
    log(name) {},
  },
}
</script>
