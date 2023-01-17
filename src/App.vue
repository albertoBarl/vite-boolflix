<template lang=""></template>
<script>
import { store } from "./datas/store.js";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    getMovieList() {
      axios.get(store.url).then((response) => {
        store.movieList = response.data.results;
      });
    },
  },
};
</script>
<style lang=""></style>
