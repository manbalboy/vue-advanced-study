<template>
    <div>
        <div v-for="item in this.$store.state.jobs" v-bind:key="item">
            {{item.id}}
        </div>
    </div>
</template>

<script>

    export default {
        created() {
            this.$store.dispatch('FETCH_JOBS');
        },
    }
</script>

<style>

</style>
