<template>
  <div id="app">
    <IntroSection />
  </div>
</template>

<script>
import IntroSection from './components/Intro/IntroSection.vue'

export default {
  name: 'app',
  components: {
    IntroSection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
