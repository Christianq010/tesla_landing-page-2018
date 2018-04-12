<template>
    <!-- Hamburger Menu Button -->
    <button class="menu" @click="openNav">
        <span><icon name="bars"></icon></span>
    </button>
</template>

<script>
    // Import Font Awesome Icons
    import 'vue-awesome/icons/bars'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon
        },
        methods: {
            openNav() {
                console.log('clicked button');
            }
        }
    }
</script>

<style scoped>
    /* Icon */
    .menu {
        background: transparent;
    }
    svg {
        width: 25px;
        height: 20px;
    }
    svg.fa-icon {
        fill: white;
        padding: 5px 0 0 0;
    }
</style>