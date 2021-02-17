<template>
    <div>
        <section>
            <user-profile>
                <router-link slot="username" v-bind:to="`/vue-newspage/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }} 
                </router-link>
                
                <template slot="time">{{ 'Posted ' +  fetchedItem.time_ago }}</template>
            </user-profile>
        </section>

        <section>
            <h2>
                {{ fetchedItem.title }}
            </h2>
        </section>

        <section>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
    import UserProfile from '../components/UserProfile.vue';
    import {mapGetters} from 'vuex';

    export default {
        components : {
            UserProfile
        },
        computed : {
            ...mapGetters(['fetchedItem'])
        },

        created() {
            const sId = this.$route.params.id;
            this.$store.dispatch('FETCH_ITEM', sId);
        },
    }
</script>

<style>

</style>
