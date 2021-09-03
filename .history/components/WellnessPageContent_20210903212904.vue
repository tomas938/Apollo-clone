<template>
  <div>
    <h1>{{ wellnessData.title }}</h1>
    <p>{{ wellnessData.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['wellnessData'],
}
</script>

<style lang="scss" scoped></style>
