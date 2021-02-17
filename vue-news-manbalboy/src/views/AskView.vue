<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <a v-bind:href="item.url"> {{item.title}} </a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed : {
            ...mapGetters(['fetchedAsk'])
        },
        // 라이프사이클 훅 mounted, beforeMount created ....
        created() {
            this.$store.dispatch('FETCH_ASK');
        }
    }
</script>

<style>

</style>
