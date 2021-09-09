<template>
  <div>
    <section>
      <h1>The page you're looking for can't be found</h1>
      <nuxt-link to="/">Go back to home 💛💛💛</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  text-align: center;
}
a {
  border-radius: 1.5rem;
  padding: 2rem;
  background-color: var(--heading-text);
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
}
</style>
