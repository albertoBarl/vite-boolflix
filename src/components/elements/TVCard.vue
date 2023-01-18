<template lang="">
  <div>
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
@use "../../styles/generals.scss" as *;
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
div {
  @include cardStructure;
}
</style>
