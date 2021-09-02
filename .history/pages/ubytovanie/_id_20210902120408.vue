<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>{{ category.title }}</h1>
        <p>{{ category.aboutRoom }}</p>
        <p>{{ category.description }}</p>
        <p>{{ category.animalDescription }}</p>
        <h2>{{ category.serviceTitle }}</h2>
        <ul>
          <li v-for="(service, index) in category.services" :key="index">
            {{ service }}
          </li>
        </ul>
      </div>
      <div class="right">
        <img
          v-for="(img, index) in category.roomImg"
          :key="index"
          :src="
            require(`../../assets/rooms/komfort/${
              category.roomImg[index] || 'komfort-1.jpg'
            }`)
          "
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
section {
  display: flex;
}
.left {
  width: 50%;
}
.right {
  display: grid;
  width: 50%;
}
</style>
