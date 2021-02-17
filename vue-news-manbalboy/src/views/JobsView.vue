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
            fetchJobsList() 
            . then (response => this.jobs = response.data) 
            . catch(err => console.log('err >>>>> ',  err ));
        },
    }
</script>

<style>

</style>
