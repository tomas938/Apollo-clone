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
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },
  },
}
</script>
