<template>
  <div class="tag-list">
    <div
      class="tag-list__item"
      :class="{ isPreview: isPreview }"
      v-for="item in items"
      :key="item.id"
      @click="$emit('onItemClick', item.id)"
    >
      <!-- Добавляем класс к нажатому тэгу -->
      <span :class="item.tagIsActive ? 'isActive' : ''">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onItemClick']
}
</script>


<style lang="scss">
.tag-list {
  display: flex;

  :not(:last-child) {
    margin-right: 0.5rem;
  }
}

.tag-list__item {
  cursor: pointer;
  margin-bottom: 1rem;
  color: #0d6efd;

  // Класс для тэгов в списке заметок
  &.isPreview {
    cursor: default;
    font-size: 0.875rem;
    opacity: 0.7;
    margin-bottom: 0.5rem;
    color:#202020;
    &:before {
      content: '#';
    }
  }
}
// Класс для активного тега в форме
.isActive {
  font-weight: 700;
}
</style>