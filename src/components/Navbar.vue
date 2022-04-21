<template>
  <b-navbar type="light" variant="light">
    <b-navbar-nav>
      <b-nav-item><b-link :to="{ name: 'home' }">Home</b-link></b-nav-item>
    </b-navbar-nav>
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
