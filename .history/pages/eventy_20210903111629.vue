<template>
  <div class="container">
    <section>
      <h1>Konferencie a Eventy</h1>
      <EventItem></EventItem>
    </section>
  </div>
</template>

<script>
import EventItem from '../components/EventItem.vue'
export default {
  components: { EventItem },
}
</script>

<style lang="scss" scoped></style>
