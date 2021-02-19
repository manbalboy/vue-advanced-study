<template>
    <div>
        <button @click="loginUser1">login</button>
        <h1>List</h1>
        <ul>
            <li v-for="(item,index) in items" v-bind:key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                items: [],
            }
        },

        methods: {
            loginUser() {
                axios.get('https://jsonplaceholder.typicode.com/users/1')
                    .then(response => {
                            console.log('사용자 인증');
                            
                            if(response.data.id === 1) {
                                axios.get('https://jsonplaceholder.typicode.com/users/1')
                                    .then(response => {
                                            console.log('DATA 확인');
                                            this.items = response.data;
                                        })
                                    .catch(error => console.log(error));
                            }

                        })
                    .catch(error => console.log(error));
            },

            async loginUser1 () {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                    if(response.data.id === 1) {
                        const list = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                        this.items = list.data;
                    }
                } catch(err) {
                    console.log(err);
                } 
            }
        },
    }

</script>