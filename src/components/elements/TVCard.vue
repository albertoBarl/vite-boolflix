<template lang="">
  <div class="myCard bg-danger">
    <h4>{{ tv.name }}</h4>
    <p>"{{ tv.original_name }}"</p>
    <span>{{ tv.original_language }}</span
    ><br />
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
}
</style>
