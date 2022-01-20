<template>
  <form @submit.prevent="onSubmit">
    <textarea
      class="form-control mb-3"
      type="text"
      required
      v-model="value"
      placeholder="Type your note"
    />
    <button class="btn" type="submit">Add new note</button>
  </form>

</template>


<script>
export default {
  data() {
    return {
      value: ''
    }
  },


  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      // this.$emit('test', 20)
      this.value = ''
    }
  }
}
</script>

