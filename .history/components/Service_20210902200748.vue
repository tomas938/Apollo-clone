<template>
  <div class="service">
    <img
      :src="require(`../assets/home-icons/${service.img || 'home-1.svg'}`)"
      alt="service"
    />
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  return {
      parkingPageData: parking,
      slide: 0,
    }
  props: ['service'],
}
</script>

<style lang="scss" scoped>
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
}
img {
  width: 6rem;
  height: 6rem;
}
p {
  line-height: 2.2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: flex-start;
  text-align: center;
}
</style>
