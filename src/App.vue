<script>
import axios from 'axios';
import TheMain from "./components/TheMain.vue";
import TheHeader from "./components/TheHeader.vue";
// import CardMovies from "./components/CardMovies.vue";
import {fetchMovies, fetchSeriesTv, store} from "./store";

export default {
  components: {TheMain, TheHeader },
  data() {
    return {
      store,
    }
  },
  methods: {
    performSearchOn (){
      fetchMovies();
      fetchSeriesTv();
    }
  },
}
</script>

<template>

    <TheHeader @performSearch="performSearchOn"/>
      <TheMain />

</template>

<style lang="scss">
@use "./style/general.scss" as *;


</style>
