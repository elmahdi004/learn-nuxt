<template lang="">
    <div>
        Page Not Founded , Please try again >3
    </div>
    <div>
        {{
            error.message
        }}
    </div>
</template>
<script setup>
defineProps([
    'error'
]);
</script>
<style lang="">
    
</style>