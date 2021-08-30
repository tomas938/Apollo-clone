<template>
  <Service
    v-for="service in services"
    :key="service.id"
    :service="service"
  ></Service>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
