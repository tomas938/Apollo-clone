<template>
  <div>
    <Grid :grid="galleryData"></Grid>
  </div>
  <div class="container">
    <section>
      <h1>Wellness</h1>
      <Grid :grid="wellnesData"></Grid>
    </section>
  </div>
</template>

<script>
import { gallery } from '../../assets/data'
export default {
  galleryData: gallery,
}
</script>

<style lang="scss" scoped></style>
