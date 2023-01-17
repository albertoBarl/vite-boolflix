<template lang="">
  <div class="card">
    <!-- <img :src="movie.poster_path" alt="not available" /> -->
    <p>[ {{ movie.title }} ]</p>
    <p>- {{ movie.original_title }} -</p>
    <span> {{ movie.original_language }}</span>
    <span>{{ movie.vote_average }}</span>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
<style lang="scss" scoped>
div.card {
  width: 200px;
  height: 300px;
}
</style>
