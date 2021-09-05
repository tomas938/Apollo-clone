<template>
  <div class="container">
    <section>
      <h1>Wellness</h1>
      <SubGrid :grid="wellnesData"></SubGrid>
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

<style lang="scss" scoped>
section {
  flex-direction: column;
}
</style>
