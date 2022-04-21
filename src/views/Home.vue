<template>
  <div class="home">
    <div class="container mt-4 text-center" style="margin: 0 auto">
      <div class="row" v-if="filteredHorrorShows.length > 0">
        <b-col cols="12" class="text-start text-white mb-4" style="background: #212529">
          <h1 class="mb-0 py-3">Horror</h1>
        </b-col>
        <b-col cols="6" lg="3" v-for="val in filteredHorrorShows.slice(0, 8)" :key="val.id">
          <b-link :to="{ name: 'show', params: { id: val.id } }">
            <div class="card">
              <img :src="val.image.medium" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ val.name }}</h5>
                <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                  <small class="card-text mb-0 w-75">Premiered: {{ val.premiered }}</small>
                  <p class="card-text w-25"><i class="fas fa-link"></i> &#11088;{{ val.rating.average }}</p>
                </div>
              </div>
            </div>
          </b-link>
        </b-col>
      </div>
      <div class="row" v-if="filteredActionShows.length > 0">
        <b-col cols="12" class="text-start text-white mb-4" style="background: #212529">
          <h1 class="mb-0 py-3">Action</h1>
        </b-col>
        <b-col cols="6" lg="3" v-for="val in filteredActionShows.slice(0, 8)" :key="val.id">
          <b-link :to="{ name: 'show', params: { id: val.id } }">
            <div class="card">
              <img :src="val.image.medium" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ val.name }}</h5>
                <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                  <small class="card-text mb-0 w-75">Premiered: {{ val.premiered }}</small>
                  <p class="card-text w-25"><i class="fas fa-link"></i> &#11088;{{ val.rating.average }}</p>
                </div>
              </div>
            </div>
          </b-link>
        </b-col>
      </div>
      <div class="row" v-if="filteredThrillerShows.length > 0">
        <b-col cols="12" class="text-start text-white mb-4" style="background: #212529">
          <h1 class="mb-0 py-3">Thriller</h1>
        </b-col>
        <b-col cols="6" lg="3" v-for="val in filteredThrillerShows.slice(0, 8)" :key="val.id">
          <b-link :to="{ name: 'show', params: { id: val.id } }">
            <div class="card">
              <img :src="val.image.medium" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ val.name }}</h5>
                <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                  <small class="card-text mb-0 w-75">Premiered: {{ val.premiered }}</small>
                  <p class="card-text w-25"><i class="fas fa-link"></i> &#11088;{{ val.rating.average }}</p>
                </div>
              </div>
            </div>
          </b-link>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      filteredHorrorShows: [],
      filteredThrillerShows: [],
      filteredActionShows: [],
    };
  },
  mounted() {
    // javascript call to the api
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        let shows = data.slice(0, 40);
        // javascript array filter by genre and rating and sort by rating descending

        this.filteredHorrorShows = shows.filter((show) => {
          return show.genres.includes("Horror") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
        });
        this.filteredThrillerShows = shows.filter((show) => {
          return show.genres.includes("Thriller") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
        });
        this.filteredActionShows = shows.filter((show) => {
          return show.genres.includes("Action") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
        });
        console.log("filteredHorrorShows == ", this.filteredHorrorShows);
        console.log("filteredThrillerShows == ", this.filteredThrillerShows);
        console.log("filteredActionShows == ", this.filteredActionShows);
      });
  },
};
</script>

<style scoped>
.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
  cursor: pointer;
}

.card img {
  background-size: cover;
  max-height: 300px;
}
</style>
