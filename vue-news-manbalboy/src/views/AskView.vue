<template>
    <div>
        <list-item></list-item> 
        <!-- <ul class="news-list">
            <li class="post" v-for="item in fetchedAsk" v-bind:key="item.id">
                
                <div class="points">
                    {{ item.points }}
                </div>

               
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
        </ul> -->
    </div>
</template>

<script>
    import ListItem from '../components/ListItem.vue';
    export default {
        components : {
            ListItem,
        }
    }
    // import { mapGetters } from 'vuex';

    // export default {
    //     computed : {
    //         ...mapGetters(['fetchedAsk'])
    //     },
    //     // 라이프사이클 훅 mounted, beforeMount created ....
    //     created() {
    //         this.$store.dispatch('FETCH_ASK');
    //     }
    // }
</script>

<style scoped>
  
</style>