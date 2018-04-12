<template>
  <div>
      <!-- Our Nav Bar Component -->
      <nav-bar />
      <!-- Main Content and Buttons -->
      <intro-section-block />
  </div>
</template>

<script>
// Import our components from component directory
import NavBar from './components/Nav/NavBar.vue'
import IntroSection from './components/Intro/IntroSection.vue'
// import BGVideo from './components/VideoBG.vue'

// Use our components in our App.vue template
export default {
  components: {
    introSectionBlock: IntroSection,
    navBar: NavBar
  }
}
</script>

<style>

</style>
