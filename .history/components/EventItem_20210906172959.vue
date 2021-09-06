<template>
  <div class="event-item">
    <img :src="require(`../assets/svgs/${icon}.svg`)" alt="" />
    <span>{{ event }}</span>
    <a :href="path"
      >Viac info
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 476.213 476.213"
        style="enable-background: new 0 0 476.213 476.213"
        xml:space="preserve"
      >
        <polygon
          points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
	345.606,368.713 476.213,238.106 "
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ['event', 'icon', 'path'],
}
</script>

<style lang="scss" scoped>
.unicode {
  color: var(--heading);
  &:hover {
    animation: 1s beat46564 infinite;
  }
}
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
  color: var(--heading-page);
  font-size: 1.8rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  &:hover {
    transition: color 0.3s ease-in-out;
    color: var(--heading);
  }
}
#Layer_1 {
  transform: scale(0.3);
  position: absolute;
  transform: translateX(-10%);
  top: -100%;
}
</style>
