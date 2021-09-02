<template>
  <div class="container">
    <section>
      <accomodationPageContent :category="category"></accomodationPageContent>
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
</style>
