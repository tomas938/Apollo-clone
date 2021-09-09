<template>
  <div class="book">
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-modal ref="my-modal" hide-footer title="🚨Book today !!!🚨">
      <div class="d-block text-center flex">
        <div class="content">
          <h3>Zvoľte si termín ubytovania</h3>
          <vc-date-picker
            color="yellow"
            is-dark
            is-range
            :value="null"
            class="calendar"
          />
        </div>
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

<style lang="scss" scoped>
.book {
  margin-top: 10rem;
}
.content {
  padding: 2rem 0;
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
