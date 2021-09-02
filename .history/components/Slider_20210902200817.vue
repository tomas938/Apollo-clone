<template>
  <div>
    <div class="big">
      <img :src="require(`../assets/parking/${bigImg}`)" alt="parking image" />
    </div>
    <div class="small">
      <img
        :src="require(`../assets/parking/${smallImgs}`)"
        alt="parking image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parkingPageData: parking,
      slide: 0,
    }
  },
  props: ['bigImg', 'smallImgs'],
}
</script>

<style lang="scss" scoped>
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
