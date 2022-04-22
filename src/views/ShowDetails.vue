<template>
  <div class="ShowDetailsView">
    <div class="container mt-4 text-center m-auto" v-if="!isLoading">
      <div class="row">
        <b-col cols="12" lg="8">
          <b-card no-body class="overflow-hidden mainCard">
            <b-row no-gutters class="text-start">
              <b-col md="4">
                <b-card-img
                  v-if="showDetails.image"
                  :src="showDetails.image.original"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="showDetails.name">
                  <div class="test-muted" v-html="showDetails.summary"></div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" lg="4">
          <b-card class="mainCard" title="Show Info">
            <ul class="list-unstyled text-start">
              <li v-if="showDetails.network">
                <b>Network:</b> {{ showDetails.network.country.name }}, {{ showDetails.network.name }}
              </li>
              <li>
                <b>Schedule:</b> {{ showDetails.schedule.days[0] }} At {{ showDetails.schedule.time }} ({{
                  showDetails.averageRuntime
                }}min)
              </li>
              <li><b>Status:</b> {{ showDetails.status }}</li>
              <li><b>Show Type:</b> {{ showDetails.type }}</li>
              <li><b>Genres:</b> {{ showDetails.genres.join("| ") }}</li>
              <li v-if="showDetails.network">
                <b>Official site:</b> <a :href="showDetails.officialSite"></a>{{ showDetails.network.officialSite }}
              </li>
            </ul>
          </b-card>
        </b-col>
      </div>
      <div class="row">
        <b-col cols="12" class="text-start text-white mb-4" style="">
          <h3 class="mb-0 p-3 header-bg">Casts</h3>
        </b-col>
        <b-col cols="12">
          <b-row>
            <b-col cols="6" lg="3" v-for="(val, i) in showDetails._embedded.cast" :key="i">
              <div class="card">
                <img :src="val.person.image.medium" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{{ val.person.name }}</h5>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </div>
    <div class="container mt-4 text-center" style="margin: 0 auto" v-else>
      <loader which-page="grid"></loader>
    </div>
  </div>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
// @ is an alias to /src
import Show from "@/types/Show";
import APIService from "@/services/APIService";
const API = APIService.getInstance();

export default {
  name: "ShowDetailsView",
  components: {
    Loader,
  },
  data() {
    return {
      showDetails: {} as Show,
      isLoading: true as boolean,
    };
  },
  async mounted() {
    this.showDetails = await API.getShowDetails(this.$route.params.id);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.card {
  background: #222;
  /* border: 1px solid #dd2476; */
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
  cursor: pointer;
}
.mainCard {
  max-height: 300px;
  height: 300px;
  min-height: 228px;
}
.card img {
  background-size: cover;
  max-height: 300px;
}
.ShowDetailsView {
  min-height: 600px;
}
.header-bg{
  background: #212529
}
</style>
