<template lang="">
<div>
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products
    This is our products elmanhdi
    This is our products elmanhdi
    This is our products elmanhdi
    This is our products elmanhdi
    This is our products elmanhdi
</div>
</template>
<script setup>
const {data,error} =  useFetch('https://dummyjson.com/products');
definePageMeta({
    middleware:[
        (to,from)=>{

            if(from.name == 'index'){
                return navigateTo('/elmahdi');
                // return console.log('Yes i come from index page /');
            }
            return console.log('No I Come from other page')
        }
    ],
});
</script>
<style scoped>
    
</style>