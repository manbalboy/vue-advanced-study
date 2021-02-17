<template>
    <div>
        <div v-for="item in jobs" v-bind:key="item">
            {{item.id}}
        </div>
    </div>
</template>

<script>
    import { fetchJobsList } from '../api/index.js';
    export default {
        data(){
            return  {
                jobs : []
            }
        },

        created() {
            let vm = this;
            fetchJobsList() 
            . then (response => {
                vm.jobs = response.data;
            }) 
            . catch(err => {
                console.log('str  >>>>> ',  err );
            })
        },
    }
</script>

<style>

</style>
