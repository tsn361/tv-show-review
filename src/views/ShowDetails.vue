<template>
  <div class="ShowDetailsView">
    <div class="container mt-4 text-center" style="margin: 0 auto" v-if="!isLoading">
      <div class="row">
        <b-col cols="12" lg="8">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters class="text-start">
              <b-col md="4">
                <b-card-img :src="showDetails.image.original" alt="Image" class="rounded-0"></b-card-img>
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
          <b-card title="Show Info">
            <ul class="list-unstyled text-start">
              <li><b>Network:</b> {{ showDetails.network.country.name }}, {{ showDetails.network.name }}</li>
              <li>
                <b>Schedule:</b> {{ showDetails.schedule.days[0] }} At {{ showDetails.schedule.time }} ({{
                  showDetails.averageRuntime
                }}min)
              </li>
              <li><b>Status:</b> {{ showDetails.status }}</li>
              <li><b>Show Type:</b> {{ showDetails.type }}</li>
              <li><b>Genres:</b> {{ showDetails.genres.join("| ") }}</li>
              <li>
                <b>Official site:</b> <a :href="showDetails.officialSite"></a>{{ showDetails.network.officialSite }}
              </li>
            </ul>
          </b-card>
        </b-col>
      </div>
      <div class="row">
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
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Show from "@/types/Show";
import APIService from "@/services/APIService";
const API = APIService.getInstance();

export default {
  name: "ShowDetailsView",
  components: {},
  data() {
    return {
      showDetails: {} as Show,
      isLoading: true as boolean
    }
  },
  methods: {
    async getShowDetails(showId: string){
     this.showDetails = await API.getShowDetails(showId);
     this.isLoading = false;
    }

  },
  mounted() {

    this.getShowDetails(this.$route.params.id)
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
