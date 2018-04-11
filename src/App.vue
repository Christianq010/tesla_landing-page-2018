<template>
  <div>
    <nav-bar />
    <intro-section-block />
  </div>
</template>

<script>
// Import our components from component directory
import IntroSection from './components/Intro/IntroSection.vue'
import NavBar from './components/Nav/NavBar.vue'

// use our components in our App.vue template
export default {
  components: {
    introSectionBlock: IntroSection,
    navBar: NavBar
  }
}
</script>

<style>

</style>
