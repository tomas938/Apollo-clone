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
  display: flex;
  align-items: center;
  color: var(--heading);
  justify-self: start;
  img {
    width: 4rem;
    height: 4rem;
  }
}
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 30rem;
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
}
</style>
