<template lang="">
  <div class="myCard bg-danger">
    <p>{{ tv.name }}</p>
    <p>{{ tv.original_name }}</p>
    <span> {{ tv.original_language }}</span
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
  width: 200px;
  height: 300px;
}
</style>
