<template>
  <div class="container">
    <section>
      <div class="left">
        <nuxt-link to="/">Home</nuxt-link>
        <h1>Ubytovanie</h1>
        <p>
          Komfortné a príjemné ubytovanie nájdete v rôznych typoch izieb podľa
          vašich preferencií. Hotel sa nachádza na útulnom námestí so známou
          fontánou Milencov.
        </p>
        <p>
          Hotel disponuje niekoľkými druhmi izieb, ktoré sú zaradené v dvoch
          kategóriách, <nuxt-link to="">Komfort</nuxt-link> a
          <nuxt-link to="">Deluxe</nuxt-link>. V Komfort kategórii si môžete
          vybrať dvojlôžkové a trojlôžkové. Deluxe kategória ponúka dvojlôžkové
          izby a <nuxt-link to="">apartmány</nuxt-link>.
        </p>
        <p>
          Hosť s rezerváciou cez hotelovú stránku má k dispozícii vstup do
          <nuxt-link to="">Fitness centra</nuxt-link>a
          <nuxt-link to="">Soľnej jaskyne</nuxt-link>, kávu a čaj zdarma, wifi v
          priestore celého hotela a 10% zľavu v hotelovej
          <nuxt-link to="">reštaurácii</nuxt-link> s vychýrenou kuchyňou.
        </p>
        <p>
          <strong>Vážení hostia,</strong>
        </p>
        <p>
          <strong
            >ako špeciálnu ponuku sme pre Vás pripravili zvýhodnené ceny na
            dlhodobé ubytovanie poprípade prenájom izieb od 8.00 do 17.00.
            Ponuku môžete nájsť kliknutím na odkaz nižšie s názvom – Ponuka
            ubytovania. V prípade, že Vás ponuka zaujala prosím kontaktujte nás
            e-mailom na marketing@apollohotel.sk.</strong
          >
        </p>
        <p>
          <strong>Tešíme sa na Vašu návštevu.</strong>
        </p>
        <p>
          <strong>Ponuka ubytovania</strong>
        </p>
      </div>
      <div class="right">
        <img src="../../assets/bg/ubytovanie-bg.jpg" alt="" />
      </div>
    </section>
    <section class="grid">
      <accommodations></accommodations>
    </section>
  </div>
</template>

<script>
import Accommodations from '../../components/Accommodations.vue'
export default {
  components: { Accommodations },
}
</script>

<style lang="scss" scoped>
.right {
  position: absolute;
  top: 16.5rem;
  @media only screen and (max-width: 1100px) {
    top: 10.5rem;
  }
  @media only screen and (max-width: 800px) {
    top: 8.5rem;
  }
  right: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  z-index: -1;
  height: 53rem;
}
a {
  color: #b6b6b5;
}
.left {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
}
strong {
  font-weight: 800;
}
.grid {
  display: grid;
}
</style>
