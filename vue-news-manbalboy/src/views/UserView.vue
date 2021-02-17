<template>
    <div>
        <user-profile v-bind:info="userInfo"></user-profile>
        <!-- <p>name : {{userInfo.id}}</p>
        <p>karma : {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p> -->
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
