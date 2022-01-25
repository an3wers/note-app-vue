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
    <TagList @onItemClick="handleClickTag" :is-active="isActiveTag" :items="tags" />

    <button class="btn" type="submit">Add new note</button>
  </form>
</template>

<script>
import TagList from '@/components/notes/TagList'


export default {
  components: {
    TagList
  },

  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags:[],
      isActiveTag: false
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      this.value = ''
    },
    handleClickTag(tag, active){
      // console.log(tag, active)
      // Работает передачу булевого параметра, но отмечаются все табы, а не тот по которому кликнули
      if (active) {
        this.isActiveTag = false
      } else {
        return this.isActiveTag = true
      }
    }
  },

}
</script>
