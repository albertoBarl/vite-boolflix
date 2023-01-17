<template lang="">
  <div class="myList container-fluid">
    <movieCard
      v-for="(item, index) in store.movieList"
      :key="index"
      :movie="item"
    />
  </div>
  <div class="myList container-fluid">
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
.myList {
  height: 350px;
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background-color: black;
  gap: 10px;
  margin-top: 25px;
  padding: 15px;
}
</style>
