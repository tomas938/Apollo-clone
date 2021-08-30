<template>
  <div>
    <Navigation></Navigation>
    <Hero></Hero>
    <Services></Services>
  </div>
</template>

<script>
import { services } from '../assets/data'
export default {
  data() {
    return {
      services,
    }
  },
}
</script>
