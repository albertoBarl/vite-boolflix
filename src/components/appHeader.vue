<template lang="">
  <div
    class="container-fluid d-flex justify-content-center align-items-center ps-5 gap-5"
  >
    <div>
      <img
        src="/src/assets/img/b-logo-png-transparent.png"
        class="logo"
        alt=""
      />
    </div>
    <div class="search form-control d-flex" style="height: 75px; width: 500px">
      <input
        type="text"
        class="form-control border-0"
        v-model="qValue"
        @change="$emit('search', qValue)"
        placeholder="Type something..."
      />
      <button type="submit" class="btn btn-body">SEARCH</button>
    </div>
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
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.logo {
  width: 150px;
}

.search {
  border: none;
  color: $color-flix;
}
</style>
