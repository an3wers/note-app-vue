<template>
  <form @submit.prevent="onSubmit">
    <textarea
      class="form-control mb-3"
      type="text"
      required
      v-model="value"
      placeholder="Type your note"
    />
    <!--Передаем через пропс в TagList массив с тегами-->
    <!-- Мне нужно по клику передать параметр в дочерний компонент -->
    <TagList @onItemClick="handleClickTag" :items="tagsTwo" />

    <button class="btn" type="submit">Add new note</button>
  </form>
</template>

<script>
import TagList from '@/components/notes/TagList'
// import {tagsTwo} from '@/main.js'

export default {
  components: {
    TagList
  },

  data() {
    return {
      value: '',
      // tagsTwo: tagsTwo,
      // tags: ['home', 'work', 'travel'],
      tagsTwo: [
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
      activeTags: [],
      isActiveTag: false
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value, this.activeTags)
      this.value = ''
    },
    handleClickTag(tag, isActive, id) {
      // console.log(tag, active)
      // Работает передачу булевого параметра, но отмечаются все табы, а не тот по которому кликнули
      // if (active) {
      //   this.isActiveTag = false
      // } else {
      //   return (this.isActiveTag = true)
      // }

      const correnTagIndex = this.tagsTwo.findIndex(el => el.id === id)
      console.log(this.tagsTwo)
     
      if (correnTagIndex !== -1) {
        const correntTag = this.tagsTwo[correnTagIndex]
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
