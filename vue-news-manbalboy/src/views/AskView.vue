<template>
    <div>
        <div v-for="item in ask" v-bind:key="item">
            {{item.title}}
        </div>
    </div>
</template>

<script>
    import { fetchAskList } from '../api/index.js';
    export default {
        data() {
            return {
                ask : []
            }
        },
        // 라이프사이클 훅 mounted, beforeMount created ....
        created() {
            fetchAskList()
            .then(respons => this.ask = respons.data)
            .catch(err => console.log('str >>>>> ',  err) );
        }


    }
</script>

<style>

</style>
