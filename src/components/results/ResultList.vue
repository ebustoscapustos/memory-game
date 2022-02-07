<template>
    <ul>
        <li v-for="(result, index) of results" :key="index">{{+result}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        results: {
            type: Array,
            default: () => []
        }
    }
}
</script>