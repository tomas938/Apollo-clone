<template>
  <div class="container">
    <section>
      <h1>Kontakt</h1>
      <div class="grid">
        <div class="grid-item" v-for="contact in contacts" :key="contact.id">
          <h2>{{ contact.title }}</h2>
          <p v-if="contact.name">
            {{ contact.name }}
          </p>
          <p v-if="contact.phone">
            Tel.: <span>{{ contact.phone }}</span>
          </p>
          <p v-if="contact.mail">
            E-mail: <span>{{ contact.mail }}</span>
          </p>
          <p v-if="contact.lang">Longitude: {{ contact.lang }}</p>
          <p v-if="contact.lat">Latitude: {{ contact.lat }}</p>
          <p v-if="contact.bank">{{ contact.bank }}</p>
          <p v-if="contact.name">{{ contact.name }}</p>
          <p v-if="contact.adress">{{ contact.adress }}</p>
          <p v-if="contact.town">{{ contact.town }}</p>
          <p v-if="contact.code">{{ contact.code }}</p>
          <p v-if="contact.iban">{{ contact.iban }}</p>
          <p v-if="contact.ico">{{ contact.ico }}</p>
          <p v-if="contact.dic">{{ contact.dic }}</p>
          <p v-if="contact.dph">{{ contact.dph }}</p>
          <p v-if="contact.register">{{ contact.register }}</p>
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
h2,
p {
  padding-bottom: 0;
}
.grid {
  // display: flex;
  // flex-direction: column;
  width: 80%;
  display: grid;
  grid-column-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
}
.grid-item {
}
</style>
