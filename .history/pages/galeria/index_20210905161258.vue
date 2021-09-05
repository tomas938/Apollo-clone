<template>
  <div class="container">
    <section>
      <h1>Wellness</h1>
      <Grid :grid="galleryData"></Grid>
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
