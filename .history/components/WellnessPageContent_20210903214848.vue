<template>
  <div class="left">
    <h1>{{ wellnessData.title }}</h1>
    <p>{{ wellnessData.description }}</p>
    <h2>{{ wellnessData.listTitle }}</h2>
    <ul>
      <li v-for="(list, index) in wellnessData.listItems" :key="index">
        {{ list }}
      </li>
    </ul>
    <p class="last">{{ wellnessData.reservation }}</p>
    <p>{{ wellnessData.price }}</p>
    <p>{{ wellnessData.price }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: ['wellnessData'],
}
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
.last {
  margin-top: 3rem;
}
</style>
