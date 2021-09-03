<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>Konferencie a Eventy</h1>
        <div class="events">
          <EventItem :event="'Svadba'" :icon="'wedding-event'"></EventItem>
          <EventItem :event="Oslava" :icon="'party-event'"></EventItem>
          <EventItem :event="Kongres" :icon="'conference-event'"></EventItem>
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
        <ul>
          <li>
            jedinečná atmosféra priestorov s výhľadom na námestie so sochou
            „Milencov“
          </li>
          <li>výber z rôznych druhov svadobných sedení</li>
          <li>možnosť prípravy obradnej miestnosti priamo v hoteli</li>
          <li>vychýrená kuchyňa</li>
          <li>ubytovanie pre mladomanželov s raňajkami na izbu grátis</li>
          <li>pohodlné parkovanie pred hotelom</li>
          <li>poradenstvo a dlhoročné skúsenosti pri organizácii svadieb</li>
          <li>
            dar Apollo Hotela pre novomanželov – darčekový poukaz na slávnostnú
            večeru s prípitkom v reštaurácii Sv. Huberta k 1. výročiu sobáša
          </li>
          <li>cenovo výhodné svadobné menu od 39 € / osoba</li>
        </ul>
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
