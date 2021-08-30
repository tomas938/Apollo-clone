<template>
  <div>
    <Navigation></Navigation>
    <Hero></Hero>
    <Service v-for="service in services"></Service>
  </div>
</template>

<script>
import { largeCardSections } from '../assets/data'
export default {}
</script>
