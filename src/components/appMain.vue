<template lang="">
  <div
    class="movie-list container bg-dark justify-content-center d-flex flex-row flex-wrap gap-3"
  >
    <movieCard
      v-for="(item, index) in store.movieList"
      :key="index"
      :movie="item"
    />
  </div>
</template>
<script>
import movieCard from "./elements/movieCard.vue";
import { store } from "../datas/store.js";
export default {
  components: {
    movieCard,
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
  overflow-x: auto;
}
</style>
