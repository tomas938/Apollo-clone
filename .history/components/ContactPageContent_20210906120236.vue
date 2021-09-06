<template>
  <div class="container">
    <section>
      <h1>Kontakt</h1>
      <div class="flex">
        <div class="left">
          <div
            class="grid-item-left"
            v-for="contact in contacts"
            :key="contact.id"
          >
            <h2>{{ contact.title }}</h2>
            <p v-if="contact.name">
              {{ contact.name }}
            </p>
            <p v-if="contact.phone">
              Tel.: <span>{{ contact.phone }}</span>
            </p>
            <p v-if="contact.mail">
              E-mail: <span>{{ contact.mail }}</span> {{ contact.restriction }}
            </p>
            <p v-if="contact.lang">Longitude: {{ contact.lang }}</p>
            <p v-if="contact.lat">Latitude: {{ contact.lat }}</p>
            <p v-if="contact.bank">{{ contact.bank }}</p>
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
        <div class="right">
          <div
            class="grid-item-right"
            v-for="contact in contacts2"
            :key="contact.id"
          >
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
            <p v-if="contact.adress">{{ contact.adress }}</p>
            <p v-if="contact.town">{{ contact.town }}</p>
            <p v-if="contact.code">{{ contact.code }}</p>
            <p v-if="contact.iban">{{ contact.iban }}</p>
            <p v-if="contact.ico">IČO: {{ contact.ico }}</p>
            <p v-if="contact.dic">DIČ: {{ contact.dic }}</p>
            <p v-if="contact.dph">IČ DPH: {{ contact.dph }}</p>
            <p v-if="contact.register">{{ contact.register }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['contacts', 'contacts2'],
}
</script>

<style lang="scss" scoped>
section {
  flex-direction: column;
}
h1,
h2,
p {
  padding-bottom: 0;
}
.flex {
  display: flex;
  width: 66%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
  gap: 3rem;
}
.left {
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
}
.right {
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
}
span {
  color: var(--heading-text);
}
</style>
