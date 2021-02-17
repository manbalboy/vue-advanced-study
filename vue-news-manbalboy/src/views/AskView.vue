<template>
    <div>
        <div v-for="item in this.$store.state.ask" v-bind:key="item">
            {{item.title}}
        </div>
    </div>
</template>

<script>
    export default {
        // 라이프사이클 훅 mounted, beforeMount created ....
        created() {
            this.$store.dispatch('FETCH_ASK');
        }


    }
</script>

<style>

</style>
