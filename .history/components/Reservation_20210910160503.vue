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
          <div>
            Dvojposteľová izba Deluxe - Zostaňte dlhšie za menej (s raňajkami,
            bezplatné storno)
          </div>
          <div class="green">Zostaňte min. 3 noci a získajte 7 %</div>
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
.reservation__description {
  background-color: #fef9ef;
  padding: 3rem 0;
  span {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 3rem;
  }
}
.reservation__content {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  .description {
    display: flex;
  }
}
img {
  width: 11rem;
  height: 11rem;
  object-fit: cover;
}
</style>
