<template>
    <div>
        <button @click="loginUser">login</button>
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
                            console.log(response);
                            
                            if(response.data.id === 1) {
                                axios.get('https://jsonplaceholder.typicode.com/users/1')
                                    .then(response => {
                                            this.items = response.data;
                                        })
                                    .catch(error => console.log(error));
                            }

                        })
                    .catch(error => console.log(error));
            },
        },
    }

</script>