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

<style lang="scss" scoped>
section {
  flex-direction: column;
}
h1,
h2,
p {
  padding-bottom: 0;
}
.flex {
  display: flex;
  width: 66%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
  gap: 3rem;
}
.left {
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
}
.right {
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
}
</style>
