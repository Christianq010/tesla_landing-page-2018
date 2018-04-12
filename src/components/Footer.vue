<template>
    <div class="footer">
        <div class="container w-container">
            <a href="#" class="footer-link">Tesla © 2018
                <span><icon name="circle"></icon></span>
            </a>
            <a href="#" class="footer-link">Privacy &amp; Legal
                <span><icon name="circle"></icon></span>
            </a>
            <a href="#" class="footer-link">Contact
                <span><icon name="circle"></icon></span>
            </a>
            <a href="#" class="footer-link">Careers
                <span><icon name="circle"></icon></span>
            </a>
            <a href="#" class="footer-link">Forums
                <span><icon name="circle"></icon></span>
            </a>
            <a href="#" class="footer-link">Locations
                <span><icon name="circle"></icon></span>
            </a>
            <!-- Flag Icons Declared Globally -->
            <a href="#" class="footer-link">
                <span><flag iso="us" /></span>
            </a>
        </div>
    </div>  
</template>

<script>
// Import Font Awesome Icons
import 'vue-awesome/icons/circle'
import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon
        }
    }
</script>

<style scoped>
@import './../assets/CSS/normalize.css';
@import './../assets/CSS/webflow.css';
@import './../assets/CSS/custom.css';

    .footer-link {
        font-size: 12px;
    }
    span {
        display: inline-flex;
    }

    /* Icon */
    svg.fa-icon {
        fill: white;
        padding: 6.5px 7px 0px 6px;
        margin: 0em 0.2em;
    }
</style>
