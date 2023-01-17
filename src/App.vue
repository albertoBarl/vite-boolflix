<template lang="">
  <div class="bg-dark p-2">
    <appHeader @search="getMovieList" />
  </div>
  <appMain />
</template>
<script>
import { store } from "./datas/store.js";
import axios from "axios";
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";

export default {
  components: {
    appHeader,
    appMain,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      let myUrl = `${store.url}${store.movieQuery}`;
      axios.get(myUrl).then((response) => {
        store.movieList = response.data.results;
      });
    },
  },
};
</script>
<style lang="scss"></style>
