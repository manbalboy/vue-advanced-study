<template>
    <div>
        news
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
            axios.get('https://api.hnpwa.com/v0/news/1.json')
                .then(function (response) {
                    console.log('gg >' , response);
                })
                .catch(function (){})
        }
    }
</script>

<style>

</style>
