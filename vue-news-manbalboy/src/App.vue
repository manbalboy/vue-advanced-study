<template>
    <div id="app">
        <tool-bar></tool-bar>
        <router-view></router-view>
        <footer-comp></footer-comp>
    </div>
</template>



<script>
    import ToolBar from './components/ToolBar.vue';
    import FooterComp from './components/FooterComp.vue';
    export default {
        name: 'App',
        components : {
            ToolBar,
            FooterComp,
        },
    }
</script>


<style>
    body {
        padding: 0;
        margin: 0;
    }
</style>
