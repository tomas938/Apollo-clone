<template>
  <div>
    <div>
      <b-modal id="modal-center" centered title="🚨Book🚨">
        <div class="content">
          <h3 class="my-4">Rezervujte si termín ešte dnes!!!</h3>
          <vc-date-picker
            v-model="range"
            color="yellow"
            is-dark
            is-range
            :value="null"
            class="calendar2"
          />
        </div>
        <div class="booking-dates">
          <p>
            Rezervácia začína :
            <span
              >{{ range.start.getDate() }}.{{ range.start.getMonth() }}.{{
                range.start.getFullYear()
              }}</span
            >
          </p>
          <p>
            Rezervácia končí :
            <span>
              {{ range.end.getDate() }}.{{ range.end.getMonth() }}.{{
                range.end.getFullYear()
              }}</span
            >
          </p>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: black;
    font-weight: bold;
  }
}
.booking-dates {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding: 0;
  }
}
</style>
