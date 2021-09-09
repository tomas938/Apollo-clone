<template>
  <div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-modal ref="my-modal" hide-footer title="Bookni si termín uý dnes !!!">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
        <vc-date-picker
          color="yellow"
          :mode="dark"
          is-range
          :value="null"
          class="calendar"
        />
      </div>
    </b-modal>
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
