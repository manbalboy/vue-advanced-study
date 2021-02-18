<template>
    <ul class="news-list">
        <li class="post" v-for="(item,index) in listItems" v-bind:key="index">
            <!-- 포인트영역 -->
            <div class="points">
                {{ item.points || 0 }}
            </div>

            <!-- 기타 정보영역 -->
            <div>
                <!-- 타이틀영역 -->
                <p class="news-tilte">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url"> 
                            {{item.title}} 
                        </a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`/vue-newspage/item/${item.id}`">
                            {{item.title}} 
                        </router-link>
                    </template>
                </p>

                <small class="link-text">

                    {{item.time_ago}} by 
                    <router-link v-if="item.user" v-bind:to="`/vue-newspage/user/${item.user}`">
                        {{item.user}}
                    </router-link>

                    <a v-else v-bind:href="item.url">
                        {{item.domain}}
                    </a>
                </small>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        computed :{
            listItems () {
                const name = this.$route.name;
                let data = "";
                if(name === 'news') {
                    data = this.$store.state.news;
                } else if(name === 'ask'){
                    data = this.$store.state.ask;
                } else if(name === 'jobs') {
                    data = this.$store.state.jobs;
                }
                return data;
            }

        },
    }
</script>

<style>
    .news-list{
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .news-tilte {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>