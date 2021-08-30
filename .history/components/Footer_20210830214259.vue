<template>
  <footer>
    <div class="contact container">
      <div class="contact-item">
        <img src="../assets/svgs/phone24.svg" alt="phone" />
        <span>+421 255 968 922</span>
      </div>
      <div class="contact-item">
        <img src="../assets/svgs/messagge.svg" alt="phone" />
        <span>hotel@apollohotel.sk</span>
      </div>
      <div class="contact-item">
        <img src="../assets/svgs/pointer.svg" alt="phone" />
        <span>
          Dulovo nám. 1, 821 08 Bratislava, Slovensko Domov Ubytovanie
          Reštaurácia Sv. Huberta
        </span>
      </div>
      <div class="contact-item">
        <img src="../assets/svgs/phone24.svg" alt="phone" />
        <img src="../assets/svgs/fb.svg" alt="facebook" />
        <img src="../assets/svgs/gmail.svg" alt="gmail" />
        <img src="../assets/svgs/ig.svg" alt="instagram" />
      </div>
    </div>
    <div class="links">
      <div class="first">
        <NuxtLink class="" to="/">domov</NuxtLink>
        <NuxtLink class="" to="/">ubytovanie</NuxtLink>
        <NuxtLink class="" to="/">rezervácia</NuxtLink>
        <NuxtLink class="" to="/">parkovanie</NuxtLink>
      </div>
      <div class="second"></div>
      <NuxtLink class="" to="/">reštaurácia sv.Huberta</NuxtLink>
      <NuxtLink class="" to="/">konferenice a eventy</NuxtLink>
      <NuxtLink class="" to="/">wellness</NuxtLink>
      <NuxtLink class="" to="/">galéria</NuxtLink>
      <NuxtLink class="" to="/">kontakt</NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
}
.contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.links {
  display: flex;
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
