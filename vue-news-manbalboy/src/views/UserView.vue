<template>
    <div>
        <user-profile>
            <div slot="username"> {{ userInfo.id }} </div>
            <span slot="time">{{ 'joined ' + userInfo.created }}, </span>
            <span slot="karma"> {{ userInfo.karma }} </span>
        </user-profile>
    </div>
</template>

<script>
    import UserProfile from '../components/UserProfile.vue';
    export default {
        components : {
            UserProfile
        },

        computed : {
            userInfo(){ 
                return this.$store.state.user;
            }
        },
        
        created() {
            const sId = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', sId);
        },
    }
</script>

<style>
    
</style>
