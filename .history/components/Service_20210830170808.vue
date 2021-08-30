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
  props: ['service'],
}
</script>

<style lang="scss" scoped>
.service {
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
img {
  width: 8rem;
  height: 8rem;
}
p {
  font-size: 1.5rem;
  display: flex;
  align-items: flex-start;
  text-align: center;
}
</style>
