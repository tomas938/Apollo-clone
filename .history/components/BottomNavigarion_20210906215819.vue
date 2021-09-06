<template>
  <div class="bottom">
    <div class="link">
      <nuxt-link to="">
        <span>Volať</span>
      </nuxt-link>
    </div>
    <div class="link">
      <nuxt-link to="">
        <span>Mapa</span>
      </nuxt-link>
    </div>
    <div class="link">
      <nuxt-link to="">
        <span>Rezervácia</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom {
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 9rem;
  background: var(--heading-text);
}
</style>
