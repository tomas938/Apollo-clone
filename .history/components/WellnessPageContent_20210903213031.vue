<template>
  <div class="conatainer">
    <section>
      <h1>{{ wellnessData.title }}</h1>
      <p>{{ wellnessData.description }}</p>
      <h2>{{ wellnessData.listTitle }}</h2>
      <ul>
        <li v-for="(list, index) in wellnessData.listItems" :key="index">
          {{ list }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ['wellnessData'],
}
</script>

<style lang="scss" scoped></style>
