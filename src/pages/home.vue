<template>
  <div class="header-container">
    <h1 class="mb-3">Add new note</h1>
  </div>
  

  <Form @onSubmit="handleSubmit" />
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
      // Заметки по умолчанию
      notes: [
        { title: 'Learn vue 3', tags: [{ name: 'work' }] },
        {
          title: 'Finish this course',
          tags: [{ name: 'work' }, { name: 'home' }]
        },
        { title: 'Test', tags: [] }
      ]
    }
  },

  watch: {
    notes: {
      handler(list) {
        
        localStorage.setItem('notes', JSON.stringify(list))
      },
      deep: true
    }
  },

  mounted() {
    this.getList()
  },

  methods: {
    // Добавляем заметку
    handleSubmit(value, activeTags) {
      const note = { title: value, tags: activeTags }

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
