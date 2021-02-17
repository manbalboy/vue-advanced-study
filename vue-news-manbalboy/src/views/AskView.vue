<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <router-link v-bind:to="`/vue-newspage/item/${item.id}`">
                {{item.title}} 
            </router-link>
            <small>
                {{item.time_ago}} by 
                <router-link v-bind:to="`/vue-newspage/user/${item.user}`">
                    {{item.user}}
                </router-link>
            </small>
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
