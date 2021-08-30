<template>
  <header>
    <div class="top-part container">
      <div class="phone">
        <img src="../assets/svgs/phone24.svg" alt="phone-icon" />
        <span>+421 255 968 922</span>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  align-items: center;
}
.phone,
.logo,
.language {
  width: 33%;
}
.phone {
  img {
    width: 4rem;
    height: 4rem;
  }
}
.logo {
  img {
    width: 100%;
  }
}
.language {
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
