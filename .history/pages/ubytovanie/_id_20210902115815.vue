<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>{{ category.title }}</h1>
        <p>{{ category.aboutRoom }}</p>
        <p>{{ category.description }}</p>
        <p>{{ category.animalDescription }}</p>
      </div>
      <h2>{{ category.serviceTitle }}</h2>
      <ul>
        <li v-for="(service, index) in category.services" :key="index">
          {{ service }}
        </li>
      </ul>
      <div class="right">
        <img
          :src="require(url(`../../assets/rooms/komfort/${category.img}`))"
          alt=""
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
  },
}
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
}
</style>
