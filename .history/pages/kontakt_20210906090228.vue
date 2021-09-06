<template>
  <div class="container">
    <section>
      <h1>Kontakt</h1>
      <div class="grid">
        <div v-for="contact in contacts" :key="contact.id">
          <h2>{{ contact.title }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { contact } from '../assets/data'
export default {
  data() {
    return {
      contacts: contact,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  flex-direction: column;
}
.grid {
  width: 50%;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>
