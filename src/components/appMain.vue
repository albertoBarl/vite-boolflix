<template lang="">
  <div
    class="movie-list container-fluid d-flex flex-row flex-wrap overflow-auto bg-dark gap-3"
  >
    <movieCard
      v-for="(item, index) in store.movieList"
      :key="index"
      :movie="item"
    />
  </div>
  <div
    class="tv-list container-fluid d-flex flex-row flex-wrap overflow-auto bg-dark gap-3 mt-3"
  >
    <TVCard v-for="(item, index) in store.TVList" :key="index" :tv="item" />
  </div>
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
.movie-list {
  height: 400px;
  width: 80vw;
}
.tv-list {
  height: 400px;
  width: 80vw;
}
</style>
