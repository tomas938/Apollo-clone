<template>
  <header>
    <div class="top-part container">
      <div class="phone">
        <img src="../assets/svgs/phone24.svg" alt="phone-icon" />
        <span>+421 255 968 922</span>
      </div>
      <div class="mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="logo">
        <img src="../assets/svgs/logo.svg" alt="apollo-logo" />
      </div>
      <div class="language">
        <span>SK</span>
        <img src="../assets/svgs/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
    <div class="down-part container">
      <NuxtLink class="" to="/">domov</NuxtLink>
      <NuxtLink class="" to="/">ubytovanie</NuxtLink>
      <NuxtLink class="" to="/">rezervácia</NuxtLink>
      <NuxtLink class="" to="/">parkovanie</NuxtLink>
      <NuxtLink class="" to="/">reštaurácia sv.Huberta</NuxtLink>
      <NuxtLink class="" to="/">konferenice a eventy</NuxtLink>
      <NuxtLink class="" to="/">wellness</NuxtLink>
      <NuxtLink class="" to="/">galéria</NuxtLink>
      <NuxtLink class="" to="/">kontakt</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 1;
  background-color: transparent;
}
.top-part {
  padding: 3rem 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.phone,
.logo,
.language {
  width: 33%;
}
.phone {
  gap: 0.5rem;
  display: flex;
  align-items: center;
  color: var(--heading);
  justify-self: start;
  img {
    width: 4rem;
    height: 4rem;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
}
.mobile {
  display: none;
  span {
    display: block;
    height: 0.28rem;
    width: 3rem;
    background: var(--heading);
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
    &:nth-child(2) {
      width: 2.5rem;
    }
  }
  @media only screen and (max-width: 800px) {
    display: block;
  }
}
.logo {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 18rem;
  @media only screen and (max-width: 800px) {
    width: 15rem;
    top: 30%;
  }
  @media only screen and (max-width: 330px) {
    top: 35%;
    width: 10rem;
  }
}
.language {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  img {
    width: 1rem;
    height: 1rem;
  }
  span {
    color: #fff;
  }
}
.down-part {
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  a {
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;

    &:hover {
      transition: color 0.3s ease-in-out;
      color: var(--heading);
    }
  }
}
</style>
