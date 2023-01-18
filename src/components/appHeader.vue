<template lang="">
  <div class="form-control d-flex">
    <input
      type="text"
      class="form-control"
      v-model="qValue"
      @change="$emit('search', qValue)"
      placeholder="Cerca..."
    />
    <button type="submit" class="btn btn-body">CERCA</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qValue: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
