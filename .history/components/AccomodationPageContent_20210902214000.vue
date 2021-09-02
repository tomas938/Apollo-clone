<template>
  <section>
    <div class="left">
      <h1>{{ category.title }}</h1>
      <p>{{ category.aboutRoom }}</p>
      <p v-if="category.description">{{ category.description }}</p>
      <p>{{ category.animalDescription }}</p>
      <h2>{{ category.serviceTitle }}</h2>
      <ul>
        <li v-for="(service, index) in category.services" :key="index">
          {{ service }}
        </li>
      </ul>
      <h2 v-if="category.bonusTitle">{{ category.bonusTitle }}</h2>
      <ul v-if="category.bonuses">
        <li v-for="(bonus, index) in category.bonuses" :key="index">
          {{ bonus }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['category'],
}
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
</style>
