<template>
  <div>
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

<style lang="scss" scoped></style>
