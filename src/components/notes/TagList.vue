<template>
    <div class="tag-list">
        <div class="tag-list__item" :class="{isPreview: isPreview}" v-for="item in items" :key="item" @click="$emit('onItemClick', item)"><span>{{ item }}</span></div>
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
    }
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

        &.isPreview {
            cursor: default;
            font-size: 0.875rem;
            opacity: 0.7;
            &:before {
                content: '#';
            }
        }
    
}

</style>