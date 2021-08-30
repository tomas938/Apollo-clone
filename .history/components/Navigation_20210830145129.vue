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
  justify-self: start;
  img {
    width: 4rem;
    height: 4rem;
  }
}
.logo {
  display: flex;
  justify-self: center;
  img {
  }
}
.language {
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 0.5rem;
  img {
    width: 1rem;
    height: 1rem;
  }
}
</style>
