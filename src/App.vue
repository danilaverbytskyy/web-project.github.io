<template>
  <div id="app">
    <AppNav />
    <AppComp />
    <AppSupport />
    <AppExpert />
    <AppRates />
    <AppOurDevs />

  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppComp from './components/AppComp.vue'
import AppSupport from './components/AppSupport.vue'
import AppExpert from './components/AppExpert.vue'
import AppRates from './components/AppRates.vue'
import AppOurDevs from "@/components/AppOurDevs.vue"

export default {
  components: {

    AppNav,
    AppComp,
    AppSupport,
    AppExpert,
    AppRates,
    AppOurDevs,

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
