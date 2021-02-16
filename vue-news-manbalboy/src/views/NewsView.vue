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
            var vm = this;
            fetchNewsList()
                .then(function (response) {
                    console.log('gg >' , response);
                    vm.users = response.data;
                })
                .catch(function(err){
                    console.log('str  >>>>> ', err);
                })
        }
    }
</script>

<style>

</style>
