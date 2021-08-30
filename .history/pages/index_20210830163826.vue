<template>
  <div>
    <Navigation></Navigation>
    <Hero></Hero>
    <Service v-for="service in services"></Service>
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
