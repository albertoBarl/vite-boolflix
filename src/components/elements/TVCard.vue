<template lang="">
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w400${tv.poster_path}`" alt="-" />
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
      <div>
        <span>Rating: {{ tv.vote_average }}</span>
        <div class="d-flex justify-content-start">
          <span v-for="item in nStars" class="fs-3">&starf;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tv: Object,
  },
  computed: {
    nStars() {
      return Math.round(this.tv.vote_average / 2);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../styles/generals.scss" as *;
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
div {
  @include cardStructure;
}
.fs-3 {
  color: gold;
}
</style>
