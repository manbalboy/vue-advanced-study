<template>
    <div>

        <p>name : {{this.$store.state.user.id}}</p>
        <p>karma : {{this.$store.state.user.karma}}</p>
        <p>created : {{this.$store.state.user.created}}</p>

    </div>
</template>

<script>
    export default {
        created() {
            const sId = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', sId);
        },
    }
</script>

<style>

</style>
