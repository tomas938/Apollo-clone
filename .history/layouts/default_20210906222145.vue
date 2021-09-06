<template>
  <div>
    <Navigation></Navigation>
    <Nuxt />
    <Footer></Footer>
    <BottomNavigation></BottomNavigation>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowWidth: null,
      mobile: null,
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted() {
    window.addEventListener('scroll', this.upatadeScroll)
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 950) {
        this.mobile = true
      }
    },
  },
}
</script>
