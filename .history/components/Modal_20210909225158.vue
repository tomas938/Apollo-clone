<template>
  <div>
    <div>
      <b-button v-b-modal.modal-center>Launch centered modal</b-button>
      <b-modal id="modal-center" centered title="BootstrapVue">
        <div class="content">
          <p class="my-4">Vertically centered modal!</p>
          <vc-date-picker
            color="yellow"
            is-dark
            is-range
            :value="null"
            class="calendar2"
          />
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
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
  gap: 2rem;
  h3 {
    color: black;
    font-weight: bold;
  }
}
</style>
