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
          class="first"
          :src="
            require(`../../assets/rooms/komfort/${
              category.roomImg[0] || 'komfort-1.jpg'
            }`)
          "
          alt=""
        />
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
  gap: 3rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
}
.left {
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
.right {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem 10rem;
  grid-gap: 3rem;
  width: 50%;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-rows: 15rem 15rem;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.first {
  width: 50rem;
  height: 50rem;
  img {
    width: 100%;
  }
}
</style>
