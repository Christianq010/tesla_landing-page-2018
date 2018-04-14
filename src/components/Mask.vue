<template>
    <!-- This Mask covers all content except SideBav when Menu Icon is Clicked -->
    <span id="mask"></span>
</template>

<script>
    export default {
    
    }
</script>

<style>

    /* BG Cover */
    /* Cover other screen content when Menu is clicked */
    #mask {
        top: 0;
        right: 200px;
        height: 100vh;
        width: 100%;
        position: fixed;
        overflow: hidden;
        z-index: 20;
        opacity: 1;
        cursor: default;
        background-color: rgba(34,34,34,0.25);
        transition: opacity 300ms ease-in-out;
    }

</style>
