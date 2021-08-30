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
      <nuxt-link></nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
