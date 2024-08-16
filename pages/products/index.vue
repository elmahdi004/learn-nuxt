<template lang="">
<div v-if="data">
    <div v-for="ele in data">
        {{
            ele[0]
        }}
    </div>
</div>
</template>
<script setup>
const {data,error} =  useFetch('https://dummyjson.com/products');
</script>
<style scoped>
    
</style>