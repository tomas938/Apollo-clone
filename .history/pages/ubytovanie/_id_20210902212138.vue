<template>
  <div class="container">
    <section>
      <accomodation-page-content
      <Slider :data="category"></Slider>
    </section>
  </div>
</template>

<script>
import AccomodationPageContent from '../../components/AccomodationPageContent.vue'
export default {
  components: { AccomodationPageContent },
  data() {
    return {
      slide: 0,
    }
  },
  methods: {
    getIndex(index) {
      this.slide = index
    },
  },
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
.big {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 3rem;
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
}
.small {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s ease-in;
}
h1 {
  padding-top: 0;
}
</style>
