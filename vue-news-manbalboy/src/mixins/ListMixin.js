import bus from '../utils/bus.js';
export default {
    mounted() {
        bus.$emit('end:spinner');
    },

    // created() {
    //     bus.$emit('start:spinner');

    //     // setTimeout(()=> {
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             bus.$emit('end:spinner');
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             bus.$emit('end:spinner');
    //         });
    //     // }, 3000)
    // },
}