<template lang="">
  <div class="myCard bg-danger">
    <h4>{{ movie.title }}</h4>
    <p>"{{ movie.original_title }}"</p>
    <span>{{ movie.original_language }}</span
    ><br />
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
.myCard {
  width: calc(90% / 5);
  height: 300px;
}
</style>
