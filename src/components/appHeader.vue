<template lang="">
  <div class="form-control d-flex">
    <input
      type="text"
      class="form-control"
      v-model="store.movieQuery"
      @change="$emit('search')"
    />
    <button type="submit" class="btn btn-body">CERCA</button>
  </div>
</template>
<script>
import { store } from "../datas/store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
<style lang="scss"></style>
