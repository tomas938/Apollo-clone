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
          <img src="../assets/svgs/laptop.svg" alt="laptop" />
          <div class="socials">
            <svg
              class="social"
              id="Bold"
              fill="#fff"
              enable-background="new 0 0 24 24"
              height="512"
              viewBox="0 0 24 24"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
              />
            </svg>
            <img class="social" src="../assets/svgs/gmail.svg" alt="gmail" />
            <img class="social" src="../assets/svgs/ig.svg" alt="instagram" />
          </div>
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
  padding: 5rem 4rem;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
}
.container {
  padding: 4rem;
  padding-top: 10rem;
  display: flex;
  @media only screen and (max-width: 300px) {
    padding: 4rem 0rem;
  }
}
.contact {
  width: 50%;
  display: grid;
  grid-row-gap: 7rem;
  grid-column-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 1100px) {
    width: 100%;
    justify-items: center;
    grid-row-gap: 5rem;
    grid-column-gap: 0rem;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 25rem;
  @media only screen and (max-width: 300px) {
    flex-direction: column;
    width: auto;
  }
}
.socials {
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 300px) {
    width: 15rem;
  }
}
.social {
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    background: red;
  }
}
.links {
  display: flex;
  width: 50%;
  @media only screen and (max-width: 1100px) {
    margin-top: 5rem;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
}
.first,
.second {
  width: 50%;
  gap: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .second {
    margin-top: 3rem;
  }
}
img {
  width: 5rem;
  height: 5rem;
}
span {
  color: #fff;
  @media only screen and (max-width: 300px) {
    text-align: center;
  }
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
