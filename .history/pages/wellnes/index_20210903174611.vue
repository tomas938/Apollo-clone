<template>
  <div class="container">
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
