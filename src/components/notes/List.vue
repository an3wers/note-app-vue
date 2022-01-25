<template>
  <div class="note-list">
    <div class="note-list__item" v-for="(note, index) in items" :key="index">
      <div class="note-list__header">{{ note.title }}</div>
      <div v-if="note.tags  && note.tags.length > 0" class="note-list__tag">

        <!-- props items мы передаем в компонент TagList, в котором у нас есть цикл, который нам и рендерит в заметку нужные теги -->

        <!-- Меняем isPreview с false на true -->
        <TagList isPreview :items="note.tags" />

      </div>
      <div class="note-list__footer">
        <span
          ><a @click.prevent="$emit('onRemove', index)" href="#"
            >Удалить</a
          ></span
        >
        <span><a href="#">Изменить</a></span>
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

  //   Принимаем пропсы
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.note-list {
  margin: 1rem 0;
}

.note-list__item {
  padding: 0.5rem 0;
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
