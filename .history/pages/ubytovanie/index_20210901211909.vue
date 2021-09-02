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
          kategóriách, Komfort a Deluxe. V Komfort kategórii si môžete vybrať
          dvojlôžkové a trojlôžkové. Deluxe kategória ponúka dvojlôžkové izby a
          apartmány.
        </p>
        <p>
          Hosť s rezerváciou cez hotelovú stránku má k dispozícii vstup do
          Fitness centra a Soľnej jaskyne, kávu a čaj zdarma, wifi v priestore
          celého hotela a 10% zľavu v hotelovej reštaurácii s vychýrenou
          kuchyňou.
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
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  background-image: url('../../assets/bg/ubytovanie-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
a {
  color: #b6b6b5;
}
.left {
  width: 50%;
}
strong {
  font-weight: 800;
}
</style>
