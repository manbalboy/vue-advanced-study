<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
    // import bus from '../utils/bus.js';
    import ListItem from '../components/ListItem.vue';
    import ListMixin from '../mixins/ListMixin.js';
    export default {
        components : {
            ListItem,
        },

        
        mixins : [ListMixin]
    }
</script>

<style>
  
</style>
