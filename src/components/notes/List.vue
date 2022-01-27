<template>
  <div class="list-container note-list">
    <div class="note-list__item" v-for="(note, index) in items" :key="index">
      <div class="note-list__header">{{ note.title }}</div>
      <div v-if="note.tags && note.tags.length > 0" class="note-list__tag">
        <!-- Меняем isPreview с false на true -->
        <TagList isPreview :items="note.tags" />
      </div>
      <div class="note-list__footer">
        <span
          ><a @click.prevent="$emit('onRemove', index)" href="#"
            >Удалить</a
          ></span
        >
        <!-- Изменение заметки -->
        <!-- <span><a href="#">Изменить</a></span> -->
      </div>
    </div>
  </div>
</template>

<script>
import TagList from '@/components/notes/TagList'
export default {
  components: {
    TagList
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  },
  emits: ['onRemove']
}
</script>

<style lang="scss">
.note-list {
  padding: 2rem 0;
}

.note-list__item {
  padding: 1rem 0;
  border-bottom: 1px solid #c0c0c0;
}

.note-list__footer {
  display: flex;

  :not(:last-child) {
    margin-right: 0.5rem;
  }

  font-size: 0.875rem;
}

.note-list__header {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
