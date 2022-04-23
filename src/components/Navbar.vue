<template>
  <div class="">
    <b-navbar type="light" variant="light" class="px-0">
      <div class="container px-0 d-flex">
        <b-navbar-nav>
          <b-nav-item><b-link :to="{ name: 'home' }">Home</b-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>
            <form class="input-group w-auto my-auto d-flex" @submit.prevent="searchShows()">
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder="Search"
                v-model="searchQuery"
              />
              <span class="searchBtn input-group-text border-0 d-flex" @click="searchShows()">
                <font-awesome-icon icon="fas fa-search" />
              </span>
            </form>
          </b-nav-item>
        </b-navbar-nav>
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
.search-box{

}
</style>
