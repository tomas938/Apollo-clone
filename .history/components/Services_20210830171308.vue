<template>
  <div class="container">
    <Service
      v-for="service in services"
      :key="service.id"
      :service="service"
    ></Service>
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

<style lang="scss" scoped>
.container {
  padding: 5rem 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(8, 1fr);
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(8, 1fr);
  }
  justify-content: center;
}
</style>
