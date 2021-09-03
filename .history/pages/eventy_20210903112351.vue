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
        <p>
          Apollo Hotel má dlhoročné skúsenosti s úspešným organizovaním
          firemných a súkromných akcií rôzneho druhu. Naše priestory dlhodobo
          využívajú klienti ako Accenture, Mary Kay alebo News and Media
          Holding. Prepojením konferenčného centra, súkromných salónikov a
          reštaurácie Sv. Huberta je možné získať kapacitu až 350 hostí. Zo
          súkromných akcií pravidelne zabezpečujeme oslavy jubileí, krstín,
          svadby, promócie, stretávky. Či už máte záujem organizovať
          konferenciu, školenie, svadbu alebo chcete osláviť významnú udalosť v
          kruhu svojich blízkych, radi pre Vás pripravíme naše priestory.
        </p>
        <h2>Svadobná hostina v Reštaurácii Sv. Huberta</h2>
        <p>
          Od úvodného prípitku na šťastné manželstvo, až po odchod posledných
          spokojných hostí sa postaráme o svadbu plnú nádherných zážitkov.
        </p>
        <h2>Prečo zorganizovať svadbu v Apollo Hoteli?</h2>
        <ul></ul>
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
.left {
  width: 50%;
}
.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
