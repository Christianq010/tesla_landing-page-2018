<template>
    <div class="menu">
    <!-- Hamburger Menu Button -->
        <span 
            class="nav-slideout-opener"
            v-on:click="toggle">
            <icon name="bars"></icon>
        </span>
        <div 
            class="sidenav"
            v-show="isOpen">
            <!-- Close Icon -->
            <span 
                class="x-icon"
                v-on:click="toggle">
                    <icon name="times"></icon>
            </span>
            <!-- Nav Menu Items -->
            <ul>
                <li class="nav-slideout-item"
                    v-for="item in menu" :key="item">
                        <a href="#">
                            {{item}}
                        </a>
                </li>
            </ul>
        </div>
        <!-- BG Mask Component-->
        <bg-mask v-show="isOpen"></bg-mask>
    </div>
</template>

<script>
    // Import Font Awesome Icons
    import 'vue-awesome/icons/bars'
    import 'vue-awesome/icons/times'
    import Icon from 'vue-awesome/components/Icon'
    import BGMask from './../Mask.vue';

    export default {
        data: function () {
            return {
                isOpen: false,
                menu: [
                        'NEWS', 'NEW INVENTORY', 'USED INVENTORY', 
                        'CHARGING', 'FIND US', 'SEMI',
                        'CARBON IMPACT', 'SUPPORT'
                        ]
            }
        },
        components: {
            icon: Icon,
            BgMask: BGMask
        },
        methods: {
            open() {
                this.isOpen = true
            },
            close() {
                this.isOpen = false
            },
            toggle() {
                // console.log('button clicked');
                if (this.isOpen) {
                    this.close();
                } else {
                    this.open();
                }
            }
        }
    }
</script>

<style scoped>

    /* Side Menu Navigation */
    .sidenav {
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: rgba(255,255,255,0.95);
        border-left: 1px solid #f2f2f2;
        overflow-x: hidden;
        padding-top: 20px;
    }
    .sidenav ul {
        transition: right 300ms ease-in-out;
    }
    .sidenav li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidenav a {
        margin: 0;
        padding: 20px 10px;
        color: #141414;
        font-size: 13px;
        border-bottom: 1px solid #ddd;
        text-decoration: none;
        display: block;
        transition: 0.3s;
    }

    /* Icon */
    .menu {
        background: transparent;
    }
    .x-icon {
        margin: 0 0 0 80%;
        color: #141414;
    }
    svg {
        width: 25px;
        height: 20px;
    }
    svg.fa-icon {
        /* fill: white; */
        padding: 5px 0 0 0;
    }
</style>