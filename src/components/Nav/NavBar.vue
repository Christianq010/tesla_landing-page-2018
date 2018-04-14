<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="container-2 w-container">
      <!-- Nav Item List right -->
      <div class="small-nav-menu">
        <a href="#" class="small-nav-item">Shop</a>
        <a href="#" class="small-nav-item">Sign in</a>
        <!-- Side Menu -->
        <a href="#" class="small-nav-item" id="hamburger-menu">
          <hamburger-menu />
        </a>
      </div>
      <!-- Tesla Logo -->
      <logo />
      <!-- Nav Items center -->
      <nav role="navigation" class="nav-menu w-nav-menu">
        <a href="#" class="nav-item w-nav-link">Model S</a>
        <a href="#" class="nav-item w-nav-link">Model X</a>
        <a href="#" class="nav-item w-nav-link">Model 3</a>
        <a href="#" class="nav-item w-nav-link">Roadster</a>
        <a href="#" class="nav-item w-nav-link">energy</a>
      </nav>
    </div>
  </div>
</template>

<script>
// Import Tesla Logo
import teslaLogo from './Logo.vue'
import Hamburgermenu from './Menu.vue'

export default {
    components: {
        logo: teslaLogo,
        hamburgerMenu: Hamburgermenu
    }
}

</script>

<style scoped>
@import './../../assets/CSS/normalize.css';
@import './../../assets/CSS/webflow.css';
@import './../../assets/CSS/custom.css';

nav {
  margin-top: 1.3em;
}

a:hover {
    color: #666;
}

/* Ignore hover on Hamburger */
#hamburger-menu:hover {
  color: white;
}

.small-nav-item {
    padding: 12% 10px;
}

</style>
