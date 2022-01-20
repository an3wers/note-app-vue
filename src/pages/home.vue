<template>
  
    <h1 class="mb-3 ">Home page</h1>

    <Form @onSubmit="handleSubmit" />
  
</template>


<script>
import Form from '@/components/notes/Form'

export default {
  components: {
    Form
  },

  methods: {
      handleSubmit(value) {
          console.log(value)
      }
  }
}
</script>
