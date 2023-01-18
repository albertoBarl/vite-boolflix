<template lang="">
  <div class="bg-danger">
    <img :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`" alt="-" />
    <div class="myCard">
      <div class="myTitle">
        <h4>{{ movie.title }}</h4>
        <p>"{{ movie.original_title }}"</p>
      </div>
      <img
        class="myLogo"
        :alt="`${movie.original_language}`"
        :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`"
      />
      <br />
      <span>Rating: {{ movie.vote_average }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@use "../../styles/generals.scss" as *;
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
div {
  @include cardStructure;
}
</style>
