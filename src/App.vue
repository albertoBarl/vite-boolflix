<template lang="">
  <div class="bg-dark p-2">
    <appHeader @search="getLists" />
  </div>
  <div class="bg-dark p-5">
    <appMain />
  </div>
</template>
<script>
import axios from "axios";
import { store } from "./datas/store.js";
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
    this.getLists("");
  },
  methods: {
    getLists(query) {
      let movieUrl = `${store.movieUrl}${query}`;
      axios.get(movieUrl).then((response) => {
        store.movieList = response.data.results;
      });
      let tvUrl = `${store.tvUrl}${query}`;
      axios.get(tvUrl).then((response) => {
        store.TVList = response.data.results;
      });
    },
  },
};
</script>
<style lang="scss"></style>
