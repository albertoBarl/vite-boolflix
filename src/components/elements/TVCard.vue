<template lang="">
  <div class="myCard bg-danger">
    <h4>{{ tv.name }}</h4>
    <p>"{{ tv.original_name }}"</p>
    <img
      :alt="`${tv.original_language}`"
      :src="`https://unpkg.com/language-icons/icons/${tv.original_language}.svg`"
    />
    <br />
    <span>{{ tv.vote_average }}</span>
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
.myCard {
  width: calc(90% / 5);
  height: 300px;
  padding: 10px;
  img {
    width: 25px;
  }
}
</style>
