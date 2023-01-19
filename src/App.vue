<template lang="">
  <div class="header">
    <appHeader @search="getLists" />
  </div>
  <div class="p-5">
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
  computed() {
    this.getLists();
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
<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/mixins" as *;
@use "./styles/partials/variables" as *;

.header {
  padding-top: 25px;
  height: 250px;
  background: rgb(0, 182, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 182, 0, 1) 0%,
    rgba(0, 0, 0, 0.7749300403755253) 100%
  );
}
</style>
