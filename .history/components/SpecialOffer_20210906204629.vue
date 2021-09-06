<template>
  <div class="offer">
    <img src="../assets/rooms/room-1.jpg" alt="" />
    <div class="description">
      <div class="title">Zostante dlhšie za menej</div>
      <p>Rezervujte si min. 3 noci a dostanete 7 % zľavu !</p>
      <nuxt-link to="/">Zistiť dostupnosť</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  cursor: pointer;
}
.offer {
  padding: 2rem;
  width: 100%;
  &:hover {
    a {
      color: var(--heading);
    }
    a::after {
      transition: transform 0.3s ease-in-out;
      transform: translateY(-50%) translateX(100%);
    }
  }
}
.description {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
}
.title {
  font-size: 2.1rem;
  font-weight: 500;
  color: var(--heading-text);
}
p {
  line-height: 2.8rem;
}
a {
  position: relative;
  text-decoration: none;
  color: var(--heading-text);
  font-weight: 600;
  padding-right: 3rem;
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    content: '\2192';
    transition: right 0.5s;
    transform: translateY(-50%) translateX(80%);
    transition: transform 0.3s ease-in-out;
  }
}
</style>
