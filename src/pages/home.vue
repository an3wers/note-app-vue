<template>

    <h1 class="mb-3 ">Home page</h1>

    <Form @onSubmit="handleSubmit" />

    <!-- Передаем через props данные из массива notes в дочерний компонент -->
    <List @onRemove="handleRemove" :items="notes"/>
    

    
  
</template>


<script>
import Form from '@/components/notes/Form'
import List from '@/components/notes/List'

export default {
  components: {
    Form,
    List
  },

  data() {
    return {
      notes: ['task1 ', 'task 2', 'task 3']
    }
  },

  methods: {
      handleSubmit(value) {
          this.notes.push(value)
      },

      handleRemove(index) {
        this.notes.splice(index, 1)
      }
  
  }
}
</script>
