<template>
  <div>
    <div class="reservation">
      <div class="reservation__description">
        <span
          >Dvojlôžková Deluxe izba s king size posteľou a bufetovými raňajkami,
          A/C, ZDARMA Minibar, WiFi, Káva/Čaj</span
        >
      </div>
      <div class="reservation__content">
        <img src="../assets/deluxe/deluxe-1.jpg" alt="" />
        <div class="description">
          <span
            >Dvojposteľová izba Deluxe - Zostaňte dlhšie za menej (s raňajkami,
            bezplatné storno)</span
          >
          <span class="green">Zostaňte min. 3 noci a získajte 7 %</span>
        </div>
        <div class="order">
          <span>Izba cena</span>
          <h3>€98.20</h3>
          <div class="option-item">
            <label for="rooms">Vyberte izby</label>
            <select id="rooms">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
reservation__description {
}
.reservation__content {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
img {
  width: 50rem;
}
</style>
