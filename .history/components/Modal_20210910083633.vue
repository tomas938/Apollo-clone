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
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      today: new Date(),
      range: {
        start: new Date(),
        end: new Date().setDate(new Date().getDate() + 7),
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
</style>
