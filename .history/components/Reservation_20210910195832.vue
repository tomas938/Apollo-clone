<template>
  <div>
    <div class="reservation">
      <div class="reservation__description">
        <p>
          Dvojlôžková Deluxe izba s king size posteľou a bufetovými raňajkami,
          A/C, ZDARMA Minibar, WiFi, Káva/Čaj
        </p>
      </div>
      <div class="reservation__content">
        <img src="../assets/deluxe/deluxe-1.jpg" alt="" />
        <div class="description">
          <strong
            >Dvojposteľová izba Deluxe - Zostaňte dlhšie za menej (s raňajkami,
            bezplatné storno)</strong
          >
          <span class="green">Zostaňte min. 3 noci a získajte 7 %</span>
        </div>
        <div class="order">
          <span>Izba cena</span>
          <h3>{{ price }}€</h3>
          <div class="option-item">
            <label for="rooms">Vyberte izby</label>
            <select v-model="val" id="rooms" @change="finalPrice()">
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
export default {
  data() {
    return {
      price: 98.6,
      val: null,
    }
  },
  computed: {
    finalPrice() {
      this.price * this.val
    },
  },
}
</script>

<style lang="scss" scoped>
.reservation {
  border: 1px solid rgba(0, 0, 0, 0.199);
}
.reservation__description {
  background-color: #fef9ef;
  padding: 3rem 0;
  p {
    color: black;
    font-weight: 600;
    font-size: 1.8rem;
    padding: 0rem 3rem;
  }
}
.reservation__content {
  background-color: #f9f9f9;
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  grid-auto-rows: 15rem;
  .description {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (max-width: 650px) {
      justify-content: center;
      align-items: center;
    }
  }
  strong {
    font-weight: 600;
    @media only screen and (max-width: 650px) {
      text-align: center;
    }
  }

  .green {
    color: green;
    font-weight: 600;
  }
  h3 {
    color: red;
  }
}
img {
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 650px) {
    width: 80%;
    margin: auto;
  }
  object-fit: cover;
}
.order {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  @media only screen and (max-width: 650px) {
    align-items: center;
  }
}
</style>
