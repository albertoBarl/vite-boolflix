<template lang="">
  <div class="d-flex">
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
<style lang="scss"></style>
