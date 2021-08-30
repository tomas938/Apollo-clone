<template>
  <footer class="container">
    <div class="contact">
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
        <NuxtLink class="" to="/">Domov</NuxtLink>
        <NuxtLink class="" to="/">Ubytovanie</NuxtLink>
        <NuxtLink class="" to="/">Reštaurácia sv.Huberta</NuxtLink>
        <NuxtLink class="" to="/">Konferenice a eventy</NuxtLink>
      </div>
      <div class="second">
        <NuxtLink class="" to="/">Kontakt</NuxtLink>
        <NuxtLink class="" to="/">Parkovanie</NuxtLink>
        <NuxtLink class="" to="/">Cookies</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  padding: 5rem 4rem;
}
.contact {
  width: 50%;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.links {
  display: flex;
  width: 50%;
}
.first,
.second {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
