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
}
</script>
