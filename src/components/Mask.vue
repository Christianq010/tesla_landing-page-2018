<template>
    <!-- This Mask covers all content except SideBav when Menu Icon is Clicked -->
    <transition name="fade" type="animation ">
        <span id="mask"></span>
    </transition>
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
        cursor: default;
        background-color: rgba(34,34,34,0.25);
    }
    /* BG Cover Animations */
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 300ms ease-in-out;
    }
    .fade-leave {
        /* opacity: 1; */
    }
    .fade-leave-active {
        /* transition: opacity 1s; */
        opacity: 0;
    }

</style>
