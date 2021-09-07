<template>
  <div class="offer">
    <nuxt-link class="image-link" to="">
      <img src="../assets/rooms/room-1.jpg" alt="room" />
    </nuxt-link>
    <div class="description">
      <div class="title">Zostante dlhšie za menej</div>
      <p>Rezervujte si min. 3 noci a dostanete 7 % zľavu !</p>
      <nuxt-link to="/rezervacia">Zistiť dostupnosť</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.offer {
  padding: 2rem;
  width: 100%;
  &:hover {
    a {
      color: var(--heading);
      transition: color 0.3s ease-in-out;
    }
    a::after {
      transition: transform 0.3s ease-in-out;
      transform: translateY(-50%) translateX(100%);
    }
    img {
      transition: all 0.3s ease-in-out;
      filter: brightness(80%);
      transform: scale(1.02);
    }
  }
}
img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
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
  transition: color 0.3s ease-in-out;
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    content: '\2192';
    transform: translateY(-50%) translateX(80%);
    transition: transform 0.3s ease-in-out;
  }
}
.image-link {
  &::after {
    display: none;
  }
}
</style>
