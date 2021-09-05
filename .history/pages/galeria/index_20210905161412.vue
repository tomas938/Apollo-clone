<template>
  <div class="container">
    <section>
      <h1>Galéria</h1>
      <Grid :grid="galleryData"></Grid>
    </section>
  </div>
</template>

<script>
import { gallery } from '../../assets/data'
export default {
  data() {
    return {
      galleryData: gallery,
    }
  },
}
</script>

<style lang="scss" scoped></style>
