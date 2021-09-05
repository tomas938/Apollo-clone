<template>
  <div class="grid">
    <GridItem v-for="item in grid" :key="item.id" :item="item"></GridItem>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
