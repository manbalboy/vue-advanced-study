<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in fetchedAsk" v-bind:key="item.id">
                <!-- 포인트영역 -->
                <div class="points">
                    {{ item.points }}
                </div>

                <!-- 기타 정보영역 -->
                <div>
                    <p class="news-tilte">
                        <router-link v-bind:to="`/vue-newspage/item/${item.id}`">
                            {{item.title}} 
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{item.time_ago}} by 
                        <router-link v-bind:to="`/vue-newspage/user/${item.user}`">
                            {{item.user}}
                        </router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed : {
            ...mapGetters(['fetchedAsk'])
        },
        // 라이프사이클 훅 mounted, beforeMount created ....
        created() {
            this.$store.dispatch('FETCH_ASK');
        }
    }
</script>

<style scoped>
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
