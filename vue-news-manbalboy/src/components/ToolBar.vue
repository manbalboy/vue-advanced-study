<template>
    <div class="header">
        <img src="../assets/logo.svg" alt="logo" class="logo">
        <div class="floatR">
            <router-link to="/news">News</router-link> |
            <router-link to="/ask">Ask</router-link>  |

            <!-- 현재 2021-02-19 기준으로 API 오류있어서 ... 주석처리함 -->
            <router-link to="/jobs">Jobs</router-link> 
        </div>
        <div class="floatL">prod by manbalboy </div>
        <img src="../assets/logo3.png" alt="logo" class="logo">
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header {
        background-color: #42b883;
        color: white;
        padding: 8px 8px 8px 25px;
        display: flex;
        align-items: center;
    }

    .header .router-link-exact-active {
        color : #35495e ;
        
    }

    .header a {
        color: white;
    }
    
    .fixed {
        position: fixed;
        width: 100%;
        z-index: 999;
    }

    .logo {
        width: 30px;
        margin-right: 18px;
        
    }

    a {
        margin: 0 5px;
    }

    .header .floatL {
       float: left;
       width: 40%;
       text-align: right;
    }
    .header .floatR {
       float: right;
       width: 59%;
       margin: 0;
       padding: 0;
    }

    
</style>