<template>
  <div class="tag-list">
    <div
      class="tag-list__item"
      :class="{isPreview: isPreview}"
      v-for="item in items"
      :key="item.id"
      @click="$emit('onItemClick', item.name, item.tagIsActive, item.id)"
    >
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
    },

    // data() {
    //     return {

    //     }
    // }

    // как менять этот флаг?
    // Что-то нужно передать из родителя сюда, что будет тригерить этот флаг
    // Сравнивать два массива?
    isActive: {
        type: Boolean,
        default: false
    }
  },

//   computed: {
//       isActive() {
//           return isActive = 
//       }
//   }
}
</script>


<style lang="scss">
.tag-list {
  display: flex;
  margin-bottom: 1rem;

  :not(:last-child) {
    margin-right: 0.5rem;
  }
}

.tag-list__item {
  cursor: pointer;

  // Класс для тэгов, которые в листе задач
  &.isPreview {
    cursor: default;
    font-size: 0.875rem;
    opacity: 0.7;
    &:before {
      content: '#';
    }
  }

 
}

 .isActive {
    font-weight: 600;
  }
</style>