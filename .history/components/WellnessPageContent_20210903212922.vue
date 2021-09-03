<template>
  <div>
    <h1>{{ wellnessData.title }}</h1>
    <p>{{ wellnessData.description }}</p>
    <h2>{{ wellnessData.description }}</h2>
  </div>
</template>

<script>
export default {
  props: ['wellnessData'],
}
</script>

<style lang="scss" scoped></style>
