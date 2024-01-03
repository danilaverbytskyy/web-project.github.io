<template>
  <div id="app">
    <AppNav />
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
export default {
  components: {
    AppNav
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 0;
  margin: 0;
  width: 100%;
}

h1, h2, h3 {
  font-weight: bold;
}

h1 {
  color: white;
  font-size: 24px;
  line-height: 1.1;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}

h2 {
  color: #050c33;
  font-size: 24px;
}

h3 {
  color: #050c33;
  font-size: 18px;
}

</style>
