<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
    import bus from '../utils/bus.js';
    import ListItem from '../components/ListItem.vue';
    export default {
        components : {
            ListItem,
        },

        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_NEWS');
            bus.$emit('end:spinner');
        },
    }
</script>

<style>
  
</style>
