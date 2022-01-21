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
    <TagList @onItemClick="handleClickTag" :items="tags" />
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
      tags: ['home', 'work', 'travel']
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      // this.$emit('test', 20)
      this.value = ''
    },
    handleClickTag(tag){
      console.log(tag)
    }
  }
}
</script>
