<template>
  <div class="container">
    <section>
      <div class="left">
        <h1>{{ categoriesPageData[0].title }}</h1>
        <h1>{{ categoriesPageData[0].title }}</h1>
        <h1>{{ categoriesPageData[0].title }}</h1>
        <h1>{{ categoriesPageData[0].title }}</h1>
        <h1>{{ categoriesPageData[0].title }}</h1>
      </div>
      <!-- <p>{{ categoriesPageData.aboutRoom }}</p>
        <p v-if="categoriesPageData.description">
          {{ categoriesPageData.description }}
        </p>
        <p>{{ categoriesPageData.animalDescription }}</p>
        <h2>{{ categoriesPageData.serviceTitle }}</h2>
        <ul>
          <li
            v-for="(service, index) in categoriesPageData.services"
            :key="index"
          >
            {{ service }}
          </li>
        </ul>
        <h2 v-if="categoriesPageData.bonusTitle">
          {{ categoriesPageData.bonusTitle }}
        </h2>
        <ul v-if="categoriesPageData.bonuses">
          <li
            v-for="(bonuse, index) in categoriesPageData.bonuses"
            :key="index"
          >
            {{ bonuse }}
          </li>
        </ul>
      </div>
      <div class="right">
        <Slider :data="categoriesPageData"></Slider>
      </div> -->
      <!-- <div class="big">
        <img
          :src="
            require(`../../assets/rooms/${category.type}/${
              category.roomImg[this.slide]
            }`)
          "
          alt="room image"
        />
      </div>
      <div class="small">
        <img
          @click="getIndex(index)"
          v-for="(img, index) in category.roomImg"
          :key="index"
          :src="
            require(`../../assets/rooms/${category.type}/${category.roomImg[index]}`)
          "
        />
      </div> -->
    </section>
  </div>
</template>

<script>
import { categories } from '../../assets/data'
export default {
  data() {
    return {
      slide: 0,
      categoriesPageData: categories,
    }
  },
  methods: {
    getIndex(index) {
      this.slide = index
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  gap: 3rem;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
}
.left {
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
}
.right {
  width: 50%;
  @media only screen and (max-width: 1100px) {
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
