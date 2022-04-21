<template>
  <div class="home">
    <home-movie-thumb :movies="filteredActionShows" genre="Action"></home-movie-thumb>
    <home-movie-thumb :movies="filteredThrillerShows" genre="Thriller" class="mt-4"></home-movie-thumb>
    <home-movie-thumb :movies="filteredHorrorShows" genre="Horror" class="mt-4"></home-movie-thumb>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import APIService from "@/services/APIService";
import HomeMovieThumb from '@/components/homeMovieThumb.vue';
const API = APIService.getInstance();

export default {
  name: "HomeView",
  components: {HomeMovieThumb},
  data() {
    return {
      filteredHorrorShows: [] as any,
      filteredThrillerShows: [] as any,
      filteredActionShows: [] as any,
    };
  },
  async mounted() {

    let shows = await API.getShows();
    shows = shows.slice(0, 40);

    this.filteredHorrorShows = shows.filter((show: any) => {
      return show.genres.includes("Horror") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });

    this.filteredThrillerShows = shows.filter((show: any) => {
      return show.genres.includes("Thriller") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });

    this.filteredActionShows = shows.filter((show: any) => {
      return show.genres.includes("Action") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });

    //console.log("shows=> ", shows);

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
.home{
  min-height: 600px;
}
</style>
