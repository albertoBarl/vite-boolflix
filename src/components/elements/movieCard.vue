<template lang="">
  <div class="myCard bg-danger">
    <h4>{{ movie.title }}</h4>
    <p>"{{ movie.original_title }}"</p>
    <img
      :alt="`${movie.original_language}`"
      :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`"
    />
    <br />
    <span>{{ movie.vote_average }}</span>
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
.myCard {
  width: calc(90% / 5);
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 25px;
  }
}
</style>
