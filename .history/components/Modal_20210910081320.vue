<template>
  <div>
    <div>
      <b-modal id="modal-center" centered title="🚨Book🚨">
        <div class="content">
          <h3 class="my-4">Rezervujte si termín ešte dnes!!!</h3>
          <!-- <vc-date-picker
            color="yellow"
            is-dark
            is-range
            :value="null"
            class="calendar2"
          /> -->
          <v-date-picker v-model="date">
            <template #default="{ inputValue, inputEvents }">
              <input
                class="px-3 py-1 border rounded"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return  {
      date: new Date(),
    }
  }
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
