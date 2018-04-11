<template>
  <div id="app">
    <cardioid />
  </div>
</template>

<script>
import Cardioid from "./components/Cardioid";

export default {
  name: "App",
  components: {
    Cardioid
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
html {
  height: 100%;
  overflow: hidden;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
