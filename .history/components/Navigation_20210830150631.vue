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
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
    height: 0.5rem;
    width: 5rem;
    background: red;
  }
  @media only screen and (max-width: 800px) {
    display: block;
  }
}
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 23rem;
  height: 23rem;
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
}
</style>
