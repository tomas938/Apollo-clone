<template>
  <div class="container">
    <h1>Wellness</h1>
    <section>
      <accommodations :grid="wellnesData"></accommodations>
    </section>
  </div>
</template>

<script>
import { wellnes } from '../../assets/data'
export default {
  data() {
    return {
      wellnesData: wellnes,
    }
  },
}
</script>

<style lang="scss" scoped></style>
