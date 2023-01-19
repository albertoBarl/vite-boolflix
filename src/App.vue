<template lang="">
  <div class="header">
    <appHeader @search="getLists" />
  </div>
  <div class="p-5">
    <appMain />
  </div>
  <div class="footer">
    <appFooter />
    <p>deisgned by A.B.</p>
  </div>
</template>
<script>
import axios from "axios";
import { store } from "./datas/store.js";
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";
import appFooter from "./components/appFooter.vue";

export default {
  components: {
    appHeader,
    appMain,
    appFooter,
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
  background: rgb(54, 0, 112);
  background: linear-gradient(
    180deg,
    rgba(54, 0, 112) 0%,
    rgba(0, 0, 0, 0.7749300403755253) 100%
  );
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background: rgb(54, 0, 112);
  background: linear-gradient(180deg, rgba(0, 0, 0) 0%, rgba(54, 0, 112) 100%);
  p {
    margin-top: 25px;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-size: xx-small;
  }
}
</style>
