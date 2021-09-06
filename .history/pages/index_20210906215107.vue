<template>
  <div>
    <Hero></Hero>
    <Services></Services>
    <SpecialOffers></SpecialOffers>
    <Reviews></Reviews>
    <bottom-navigarion></bottom-navigarion>
  </div>
</template>

<script>
import BottomNavigarion from '../components/BottomNavigarion.vue'
export default {
  components: { BottomNavigarion },
  layout: 'homeNav',
}
</script>
