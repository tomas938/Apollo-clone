<template>
  <div>
    <div class="big">
      <img
        :src="require(`../assets/parking/${parkingPageData.img[this.slide]}`)"
        alt="room image"
      />
    </div>
    <div class="small">
      <img
        v-for="(img, index) in parkingPageData.img"
        :key="index"
        :src="require(`../assets/parking/${parkingPageData.img[index]}`)"
        @click="slideImg(index)"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
