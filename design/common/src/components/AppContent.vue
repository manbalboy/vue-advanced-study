<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" v-bind:key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="$emit('renew')">renew items</button>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
            type: Array,
            required: true,
            },
        },
    }
</script>