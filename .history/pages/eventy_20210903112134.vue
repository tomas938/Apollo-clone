<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>Konferencie a Eventy</h1>
        <div class="events">
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventItem from '../components/EventItem.vue'
export default {
  components: { EventItem },
}
</script>

<style lang="scss" scoped>
.events {
  display: flex;
  gap: 10rem;
}
</style>
