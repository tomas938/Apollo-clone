<template>
  <div class="container">
    <section class="intro">
      <h1>{{ weddingData.title }}</h1>
      <div class="events">
        <EventItem
          :event="'Svadba'"
          :icon="'wedding-event'"
          :path="'#wedding'"
        ></EventItem>
        <EventItem
          :event="'Oslava'"
          :icon="'party-event'"
          :path="'#party'"
        ></EventItem>
        <EventItem
          :event="'Kongres'"
          :icon="'conference-event'"
          :path="'#kongres'"
        ></EventItem>
      </div>
      <p>
        Apollo Hotel má dlhoročné skúsenosti s úspešným organizovaním firemných
        a súkromných akcií rôzneho druhu. Naše priestory dlhodobo využívajú
        klienti ako Accenture, Mary Kay alebo News and Media Holding. Prepojením
        konferenčného centra, súkromných salónikov a reštaurácie Sv. Huberta je
        možné získať kapacitu až 350 hostí. Zo súkromných akcií pravidelne
        zabezpečujeme oslavy jubileí, krstín, svadby, promócie, stretávky. Či už
        máte záujem organizovať konferenciu, školenie, svadbu alebo chcete
        osláviť významnú udalosť v kruhu svojich blízkych, radi pre Vás
        pripravíme naše priestory.
      </p>
    </section>
    <section class="wedding">
      <div class="left">
        <h2 id="wedding">{{ weddingData.subTitle }}</h2>
        <p>
          {{ weddingData.description }}
        </p>
        <h2>{{ weddingData.listTitle }}</h2>
        <ul>
          <li v-for="(list, index) in weddingData.listDescription" :key="index">
            {{ list }}
          </li>
        </ul>
      </div>
      <Slider :data="weddingData"></Slider>
    </section>
    <section id="party">
      <div class="left">
        <h2>{{ partyData.subtitle }}</h2>
        <p>{{ partyData.description }}</p>
        <ul>
          <li v-for="(list, index) in partyData.listDescription" :key="index">
            {{ list }}
          </li>
        </ul>
      </div>
      <Slider :data="partyData"></Slider>
    </section>
    <section id="kongres">
      <div class="left">
        <h2>{{ conferenceData.subtitle }}</h2>
        <ul>
          <li
            v-for="(list, index) in conferenceData.listDescription"
            :key="index"
          >
            {{ list }}
          </li>
        </ul>
      </div>
      <Slider :data="conferenceData"></Slider>
    </section>
  </div>
</template>

<script>
import { wedding } from '../assets/data'
import { party } from '../assets/data'
import { conference } from '../assets/data'
import EventItem from '../components/EventItem.vue'
export default {
  components: { EventItem },
  data() {
    return {
      weddingData: wedding,
      partyData: party,
      conferenceData: conference,
    }
  },
}
</script>

<style lang="scss" scoped>
.wedding {
  .right {
    align-self: flex-end;
  }
}
.intro {
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
#party,
#kongres,
#wedding {
  scroll-margin-top: 18rem;
  @media only screen and (max-width: 790px) {
    scroll-margin-top: 10rem;
  }
  @media only screen and (max-width: 790px) {
    scroll-margin-top: 10rem;
  }
}
.left {
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
}
h2 {
  padding-top: 0rem;
}
</style>
