<template>
  <div>
    <Accommodation v-for="item in accomadations" :key="item.id"></Accommodation>
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

<style lang="scss" scoped></style>
