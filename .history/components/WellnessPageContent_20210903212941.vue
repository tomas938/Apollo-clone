<template>
  <div>
    <h1>{{ wellnessData.title }}</h1>
    <p>{{ wellnessData.description }}</p>
    <h2>{{ wellnessData.listTitle }}</h2>
    <ul>
      <li v-for="list in wellnessData."></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['wellnessData'],
}
</script>

<style lang="scss" scoped></style>
