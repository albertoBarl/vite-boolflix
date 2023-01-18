<template lang="">
  <div class="bg-danger">
    <img
      :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
      alt="not available"
    />
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
div {
  min-width: calc(100% / 5);
  height: 400px;
  position: relative;
  overflow: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    position: absolute;
    &:active {
      display: none;
    }
  }
  .myCard {
    width: 100%;
    height: 100%;
    padding: 10px;
    z-index: 1;
    .myTitle {
      width: 100%;
      height: max-content;
    }
    img.myLogo {
      width: 25px;
      height: auto;
    }
  }
}
</style>
