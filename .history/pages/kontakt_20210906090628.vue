<template>
  <div class="container">
    <section>
      <h1>Kontakt</h1>
      <div class="grid">
        <div class="grid-item" v-for="contact in contacts" :key="contact.id">
          <h2>{{ contact.title }}</h2>
          <p>
            Tel.: <span>{{ contact.phone }}</span>
          </p>
          <p>
            E-mail <span>{{ contact.mail }}</span>
          </p>
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
  width: 80%;
  display: grid;
  grid-column-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
}
.grid-item {
  display: flex;
  flex-direction: column;
}
</style>
