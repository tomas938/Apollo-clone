<template>
  <div class="container">
    <section>
      <h1>Rezervácie</h1>
      <div class="options">
        <div class="option-item">
          <label for="adults">Dospelí</label>
          <select id="adults">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="option-item">
          <label for="children">Deti</label>
          <select id="children">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="option-item">
          <label for="rooms">Izby</label>
          <select id="rooms">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="rent-item"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  flex-direction: column;
}
.rent-item {
  width: 100%;
}
.options {
  padding: 4rem;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  gap: 4rem;
}
.option-item {
  display: flex;
  flex-direction: column;
}
</style>
