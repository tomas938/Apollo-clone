<template>
  <div class="container">
    <section>
      <div class="lleft">
        <h1>Konferencie a Eventy</h1>
        <EventItem></EventItem>
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

<style lang="scss" scoped></style>
