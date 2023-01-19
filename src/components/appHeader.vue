<template lang="">
  <div
    class="container-fluid d-flex justify-content-center align-items-center ps-5 gap-5"
  >
    <a href="/">
      <img
        src="/src/assets/img/b-logo-png-transparent.png"
        class="logo"
        alt=""
      />
    </a>
    <div class="search form-control" style="height: 75px; width: 500px">
      <input
        type="text"
        class="form-control border-0"
        v-model="qValue"
        @change="$emit('search', qValue)"
        placeholder="Type something..."
      />
      <button type="submit" class="btn btn-body">SEARCH</button>
    </div>
    <div class="d-flex gap-5">
      <select name="" id="" class="p-1">
        <option v-for="item in store.movieGens">{{ item.name }}</option>
      </select>
      <a
        href="/"
        class="d-flex flex-column align-items-center text-decoration-none text-white"
      >
        <i class="fa-solid fa-user text-white fs-1"></i><label>LOGIN</label>
      </a>
    </div>
  </div>
</template>
<script>
import { store } from "../datas/store.js";

export default {
  data() {
    return {
      store,
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
  filter: invert(1);
}

.search {
  display: flex;
  border: none;
  color: $color-flix;
}
</style>
