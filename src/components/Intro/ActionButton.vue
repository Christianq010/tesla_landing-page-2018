<template>
    <button> {{msg}} </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './../../assets/CSS/normalize.css';
@import './../../assets/CSS/webflow.css';

button {
  color: white;
  width: 175px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 9px 10px;
  background-color: rgba(0, 0, 0, .5);
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: solid 1px transparent;
}

button:hover {
  transition: border-color .7s;
  border: 1px solid white;
}

.action-button.btn-grey {
  background-color: #5d5d5d;
}
</style>
