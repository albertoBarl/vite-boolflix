<template lang="">
  <div class="bg-danger">
    <img
      :src="`https://image.tmdb.org/t/p/w400${tv.poster_path}`"
      alt="not available"
    />
    <div class="myCard">
      <div class="myTitle">
        <h4>{{ tv.name }}</h4>
        <p>"{{ tv.original_name }}"</p>
      </div>
      <img
        class="myLogo"
        :alt="`${tv.original_language}`"
        :src="`https://unpkg.com/language-icons/icons/${tv.original_language}.svg`"
      />
      <br />
      <span>Rating: {{ tv.vote_average }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tv: Object,
  },
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
