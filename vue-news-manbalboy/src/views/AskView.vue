<template>
    <div>
        <list-item></list-item> 
    </div>
</template>

<script>
    import bus from '../utils/bus.js';
    import ListItem from '../components/ListItem.vue';
    export default {
        components : {
            ListItem,
        },
        created() {
            bus.$emit('start:spinner');

            setTimeout(()=> {
                this.$store.dispatch('FETCH_ASK')
                    .then(() => {
                        bus.$emit('end:spinner');
                    })
                    .catch(error => {
                        console.log(error);
                        bus.$emit('end:spinner');
                    });
            }, 3000)
        }

    }
</script>

<style>
  
</style>