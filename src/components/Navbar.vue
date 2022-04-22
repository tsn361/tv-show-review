<template>
  <div class="">
    <b-navbar type="light" variant="light">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item><b-link :to="{ name: 'home' }">Home</b-link></b-nav-item>
        </b-navbar-nav>
        <form class="input-group w-auto my-auto d-none d-sm-flex" @submit.prevent="searchShows()">
          <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Search"
            style="min-width: 550px"
            v-model="searchQuery"
          />
          <span class="searchBtn input-group-text border-0 d-none d-lg-flex" @click="searchShows()">
            <font-awesome-icon icon="fas fa-search" />
          </span>
        </form>
      </div>
    </b-navbar>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  name: "NavbarView",
  data() {
    return {
      searchQuery: "" as string,
    };
  },
  methods: {
    searchShows() {

      if(this.searchQuery.trim() === "") {
        this.showToast();
        return;
      }

      this.$router.push({
        name: "search",
        query: {
          q: this.searchQuery,
        },
      });
    },
    showToast() {
      let instance = Vue.$toast.open(
          {
            message: 'Please type something to search!',
            type: 'info',
            position: 'top-right',
          }
        );
    }
  },
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
.searchBtn {
  cursor: pointer;
}
</style>
