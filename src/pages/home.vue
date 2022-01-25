<template>
  <h1 class="mb-3">Add new note</h1>

  <Form @onSubmit="handleSubmit" />

  <!-- Передаем через props данные из массива notes в дочерний компонент -->
  <List @onRemove="handleRemove" :items="notes" />

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
      notes: [
        { title: 'Learn vue 3', tags: ['work'] },
        { title: 'Finish this course', tags: ['work', 'home'] },
        { title: 'Test', tags: [] }
      ]
    }
  },

  watch: {
    notes: {
      handler(list) {
        // console.log(list)

        localStorage.setItem('notes', JSON.stringify(list))
      },
      deep: true
    }
  },

  // Рендерим на экран список
  mounted() {
    this.getList()
  },

  methods: {
    // Добавляем заметку
    handleSubmit(value) {
      const note = { title: value, tags: [] }

      this.notes.push(note)
    },
    // Удаляем заметку
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    getList() {
      const notesFromLS = localStorage.getItem('notes')

      if (notesFromLS) {
        this.notes = JSON.parse(notesFromLS)
      } else {
        this.notes
      }
    }
  }
}
</script>
