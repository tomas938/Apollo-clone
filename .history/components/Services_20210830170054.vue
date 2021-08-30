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
export default {
    import { services } from '../assets/data'
}
</script>

<style lang="scss" scoped></style>
