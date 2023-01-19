<template lang="">
  <section>
    <h2>Movies</h2>
    <div class="myList container-fluid">
      <movieCard
        v-for="(item, index) in store.movieList"
        :key="index"
        :movie="item"
      />
    </div>
  </section>
  <section class="mt-5">
    <h2>TV Shows</h2>
    <div class="myList container-fluid">
      <TVCard v-for="(item, index) in store.TVList" :key="index" :tv="item" />
    </div>
  </section>
</template>
<script>
import movieCard from "./elements/movieCard.vue";
import TVCard from "./elements/TVCard.vue";
import { store } from "../datas/store.js";
export default {
  components: {
    movieCard,
    TVCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<style lang="scss" scoped>
.myList {
  height: 400px;
  width: 80vw;
  display: flex;
  overflow-x: auto;
  background-color: black;
  gap: 10px;
  margin-top: 25px;
}

h2 {
  color: white;
  padding: 10px;
  background: rgb(54, 0, 112);
  background: linear-gradient(
    90deg,
    rgb(54, 0, 112) 0%,
    rgba(0, 0, 0, 0.7749300403755253) 33%
  );
}
</style>
