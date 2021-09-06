<template>
  <div class="container">
    <section>
      <h1>Kontakt</h1>
      <div v-for="contact in contacts" :key="contact.id"></div>
    </section>
  </div>
</template>

<script>
import { contact } from '../assets/data'
export default {
  contacts = contact
}
</script>

<style lang="scss" scoped></style>
