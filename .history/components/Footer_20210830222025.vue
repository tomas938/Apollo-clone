<template>
  <div class="root">
    <footer class="container">
      <div class="contact">
        <div class="contact-item">
          <img src="../assets/svgs/phone24.svg" alt="phone" />
          <span>+421 255 968 922</span>
        </div>
        <div class="contact-item">
          <img src="../assets/svgs/messagge.svg" alt="message" />
          <span>hotel@apollohotel.sk</span>
        </div>
        <div class="contact-item">
          <img src="../assets/svgs/pointer.svg" alt="map pointer" />
          <span> Dulovo nám. 1, 821 08 Bratislava, Slovensko </span>
        </div>
        <div class="contact-item">
          <img src="../assets/svgs/phone24.svg" alt="phone" />
          <img class="social" src="../assets/svgs/fb.svg" alt="facebook" />
          <img class="social" src="../assets/svgs/gmail.svg" alt="gmail" />
          <img class="social" src="../assets/svgs/ig.svg" alt="instagram" />
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

    <p>
      Made with 🤍 2021 icons from
      <a href="https://www.flaticon.com/"> Flaticon 🤍</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  background-color: var(--footer-bg);
}
footer {
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
  padding: 5rem 4rem;
  width: 100%;
}
.container {
  padding: 4rem;
  padding-top: 10rem;
  display: flex;
}
.contact {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  display: grid;
  grid-row-gap: 7rem;
  grid-column-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.social {
  width: 2.5rem;
  height: 2.5rem;
}
.links {
  display: flex;
  width: 50%;
}
.first,
.second {
  width: 50%;
  gap: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
img {
  width: 5rem;
  height: 5rem;
}
span {
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease-in-out;
  &:hover {
    transition: color 0.3s ease-in-out;
    color: var(--heading);
  }
}
p {
  padding: 5rem 0;
  text-align: center;
  color: #54524d;
  font-weight: 500;
}
</style>
