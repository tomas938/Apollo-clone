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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40rem 40rem;
  grid-gap: 4rem;
}
</style>
