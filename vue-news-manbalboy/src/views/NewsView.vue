<template>
    <div>
        <div v-for="user in this.users" v-bind:key="user">
             {{user.id}}
        </div>
    </div>
</template>

<script>
    import { fetchNewsList } from '../api/index.js';
    export default {
        data () {
            return {
                users : []
            }
        },
        created() {
            fetchNewsList()
                .then(response =>this.users = response.data)
                .catch(err => console.log('str  >>>>> ', err))
        }
    }
</script>

<style>

</style>
