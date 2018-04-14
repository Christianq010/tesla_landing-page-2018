<template>
  <div class="main-content">
    <h1>Quickest Acceleration.</h1>
    <h1>Longest Range. The Safest Cars Ever.</h1>
    <div class="btn-wrapper">
      <action-btn msg="Order yours"/>
      <action-btn msg="new inventory"/>
      <action-btn msg="used inventory"/>
      <action-btn msg="test drive"/>
    </div>
    <div class="small-wrapper-link">
      <a class="border-right small-link" href="#">GET THE NEWSLETTER
        <span><icon name="caret-right"></icon></span>
      </a>
    </div>
  </div>
</template>

<script>
import ActionButton from './ActionButton.vue'
// Import Font Awesome Icons
import 'vue-awesome/icons/caret-right'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'app',
  components: {
    ActionBtn: ActionButton,
    icon: Icon
  }
}

</script>

<style>
@import './../../assets/CSS/normalize.css';
@import './../../assets/CSS/webflow.css';

/* Test CSS */
body {
  background-color: grey;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 38px;
  line-height: 44px;
  font-weight: 400;
}

.main-content {
  position: absolute;
  left: 0px;
  top: 15%;
  right: 0px;
  bottom: 0px;
  display: block;
  width: 68%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

h1 {
  margin-bottom: 25px;
  font-family: Montserrat, sans-serif;
  font-size: 42.5px;
  font-weight: 200;
}

.small-wrapper-link {
  margin-top: 25px;
}

.small-link {
  display: inline-block;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px none #fff;
  font-family: Montserrat, sans-serif;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
}

.small-link:hover {
  transition: color 0.25s;
  color: red;
}

.small-link.border-right {
  border-style: none;
  border-right-width: 2px;
  font-weight: 300;
}

.btn-wrapper {
  display: block;
  width: 100%;
  margin-top: 0px;
  padding-top: 20px;
  padding-bottom: 5px;
}

/* Icon */
.fa-icon {
  padding: 0.3em 0 0 0;
}
</style>