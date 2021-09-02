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
        <div class="big">
          <img
            :src="
              require(`../../assets/rooms/komfort/${
                category.roomImg[0] || 'komfort-1.jpg'
              }`)
            "
            alt="room image"
          />
        </div>
        <div class="small">
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
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}
.big {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr;
  img {
    width: 100%;
    height: 100%;
  }
}
.small {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem 10rem;
  grid-gap: 3rem;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
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
</style>
