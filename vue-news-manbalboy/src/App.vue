<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="page">
            <router-view></router-view>
        </transition>
        <footer-comp></footer-comp>
        <spinner :loading="loadingStatus"></spinner>
     
    </div>
</template>



<script>
    import ToolBar from './components/ToolBar.vue';
    import Spinner from './components/Spinner.vue';
    import FooterComp from './components/FooterComp.vue';
    import bus from './utils/bus.js';
    export default {
        head : {
            title :{
                inner: 'title',
            }
        },
        name: 'App',
        components : {
            ToolBar,
            FooterComp,
            Spinner
        },
        data () {
            return {
                loadingStatus : false,
            }
        },
        methods: {
            startSpinner() {
                this.loadingStatus = true;
            },
            endSpinner() {
                this.loadingStatus = false;
            }
        },

        created() {
            bus.$on('start:spinner', this.startSpinner);
            bus.$on('end:spinner', this.endSpinner);
        },
        
        beforeDestroy() {
            bus.$off('start:spinner', this.startSpinner);
            bus.$off('end:spinner', this.endSpinner);
        },


    }
</script>


<style>
    body {
        padding: 0;
        margin: 0;
    }

    a {
        color : #34495e;
        text-decoration: none;
    }

    a.router-link-exact-active {
        text-decoration: underline;
    }
    
    a:hover {
        color: #42b883;
        text-decoration: underline;
    }

    .page-enter-active, .page-leave-active {
        transition: opacity .5s;
    }

    .page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
