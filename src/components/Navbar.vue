<template>
  <b-navbar type="light" variant="light">
    <b-navbar-nav>
      <b-nav-item><b-link :to="{ name: 'home' }">Home</b-link></b-nav-item>
    </b-navbar-nav>
    <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style="min-width: 550px;"
        />
        <span class="input-group-text border-0 d-none d-lg-flex">
          <font-awesome-icon icon="fas fa-search" />
        </span>
      </form>
  </b-navbar>
</template>

<script lang="ts">
export default {
  name: "NavbarView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
</style>
