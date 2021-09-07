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
  methods: {
    log() {
      console.log('gi')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 8rem;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 950px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 0rem;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
}
</style>
