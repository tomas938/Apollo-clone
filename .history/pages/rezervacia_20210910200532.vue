<template>
  <div class="container">
    <section>
      <h1>Rezervácie</h1>
      <Reservation></Reservation>
      <Reservation></Reservation>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  flex-direction: column;
}
.rent-item {
  height: 5rem;
  width: 100%;
  background: red;
}
.options {
  padding: 4rem;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  gap: 4rem;
}
.option-item {
  display: flex;
  flex-direction: column;
}
</style>
