<template>
  <div>
    <Accommodation></Accommodation>
  </div>
</template>

<script>
import { accomadation } from '../assets/data'
import Accommodation from './Accommodation.vue'
export default {
  components: { Accommodation },
  data() {
    return {
      accomadation,
    }
  },
}
</script>

<style lang="scss" scoped></style>
