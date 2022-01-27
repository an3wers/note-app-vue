<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <textarea
        class="form-control mb-3"
        type="text"
        required
        v-model="value"
        placeholder="Type your note"
      />

      <TagList @onItemClick="handleClickTag" :items="tags" />

      <button class="btn" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagList from '@/components/notes/TagList'

export default {
  components: {
    TagList
  },

  emits: ['onSubmit'],

  data() {
    return {
      value: '',
      tags: [
        {
          id: 1,
          name: 'home',
          tagIsActive: false
        },
        {
          id: 2,
          name: 'work',
          tagIsActive: false
        },
        {
          id: 3,
          name: 'travel',
          tagIsActive: false
        }
      ],
      activeTags: []
      
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value, this.activeTags)
      this.value = ''
      // Сбрасываем активное состояние Тэгов
      this.tags.forEach(el => {
        el.tagIsActive = false
      })
    },
    handleClickTag(id) {
      const correnTagIndex = this.tags.findIndex(el => el.id === id)

      if (correnTagIndex !== -1) {
        const correntTag = this.tags[correnTagIndex]
        if (correntTag.tagIsActive) {
          correntTag.tagIsActive = false

          this.activeTags.splice(correnTagIndex, 1)
        } else {
          correntTag.tagIsActive = true
          this.activeTags.push(correntTag)
        }
      }
    }
  }
}
</script>
