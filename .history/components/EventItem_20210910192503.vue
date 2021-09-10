<template>
  <div class="event-item">
    <img :src="require(`../assets/svgs/${icon}.svg`)" alt="" />
    <span>{{ event }}</span>
    <a :href="path">Viac info </a>
  </div>
</template>

<script>
export default {
  props: ['event', 'icon', 'path'],
}
</script>

<style lang="scss" scoped>
.event-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 1rem;
  margin-bottom: 8rem;
}
img {
  width: 8rem;
  height: 8rem;
}
span {
  color: var(--text);
  font-weight: 500;
  font-size: 1.8rem;
}
a {
  position: relative;
  padding-right: 3rem;
  color: var(--heading-page);
  font-size: 1.8rem;
  font-weight: 400;
  transition: color 0.3s ease-in-out;
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    content: '\2192';
    transition: right 0.5s;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transition: transform 0.3s ease-in-out;
    transform: translateY(-50%) translateX(30%);
  }
  &:hover {
    transition: color 0.3s ease-in-out;
    color: var(--heading);
  }
}
</style>
