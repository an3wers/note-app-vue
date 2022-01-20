<template>
  <div class="note-list">
    <div class="note-list__item" v-for="(note, index) in items" :key="index">
      <div class="note-list__header">{{ note }}</div>
      <div class="note-list__footer">
        <span><a @click.prevent="$emit('onRemove', index)" href="#">Удалить</a></span>
        <span><a href="#">Изменить</a></span>
      </div>
      </div>
  </div>
</template>

<script>
export default {
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
   border-bottom: 1px solid #ccc;
 }

.note-list__footer{
  display: flex;

  :not(:last-child) {
    margin-right: 0.5rem;
  }

  
    font-size: 0.875rem;
  
}

.note-list__header {
  font-size: 1.125rem;
}

</style>