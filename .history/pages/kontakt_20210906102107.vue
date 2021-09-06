<template>
  <ContactPageContent
    :contacts="contacts"
    :contacts2="contacts2"
  ></ContactPageContent>
</template>

<script>
import { contact } from '../assets/data'
import { contact2 } from '../assets/data'
export default {
  data() {
    return {
      contacts: contact,
      contacts2: contact2,
    }
  },
}
</script>

<style lang="scss" scoped></style>
