<template>
  <div class="grid">
    <Accommodation
      v-for="item in accomadations"
      :key="item.id"
      :item="item"
    ></Accommodation>
  </div>
</template>

<script>
import { accomadations } from '../assets/data'
export default {
  data() {
    return {
      accomadations,
    }
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 42rem);
  grid-gap: 4rem;
}
</style>
