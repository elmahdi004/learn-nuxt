<template>
    <div>
        <h3>
            Homa Page
        </h3>
    </div>
</template>
<script setup>
useCookie('name-2',{
    expires : new Date(Date.now() + 1000 * 60 * 60),
    maxAge : 2000
    
}).value = 'elmahdi'
// useCookie('name').value = 'elmahdi'
</script>