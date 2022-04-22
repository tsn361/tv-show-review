<template>
  <div class="seachRelultPage">
    <div class="container mt-4" v-if="isLoading">
      <loader which-page="grid"></loader>
    </div>
    <div class="container mt-4 text-center" style="margin: 0 auto" v-else>
      <div class="row" v-if="searchResults.length > 0">
        <div class="col-12 text-start mt-5">
          <h3 class="text-white">Search Results for "{{searchKey}}"</h3>
        </div>
        <b-col cols="6" lg="3" class="mt-4" v-for="val in searchResults" :key="val.id">
          <b-link :to="{ name: 'show', params: { id: val.id } }">
            <div class="card">
              <img :src="val.image.medium" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ truncate(val.name, 45) }}</h5>
                <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                  <small class="card-text mb-0 w-75 premiered"
                    >Premiered: {{ val.premiered ? val.premiered : "not mensioned" }}</small
                  >
                  <p class="card-text w-25 rating">
                    <i class="fas fa-link"></i> &#11088;{{ val.rating.average ? val.rating.average : 0.0 }}
                  </p>
                </div>
              </div>
            </div>
          </b-link>
        </b-col>
      </div>
      <div v-else class="text-center mt-5">
        <h3 class="text-white">No results found</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
import APIService from "@/services/APIService";
const API = APIService.getInstance();

export default {
  name: "SearchResult",
  data() {
    return {
      searchResults: [] as any[],
      isLoading: true as boolean,
      searchKey: "" as string,
    };
  },
  components: {
    Loader,
  },
  methods: {
    truncate(str: string, n: number) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },
    async search(query?: string | any) {
      const searchResults = await API.getSearchResult(query);
      let newResults = [] as any[];
      //console.log("searchResults ", searchResults)

      searchResults.forEach((result: any) => {
        if (result.show.image) {
          newResults.push(result.show);
        }
      });
      this.searchResults = newResults;
    },
  },
  async mounted() {

    this.searchKey = this.$route.query.q;
    this.isLoading = true;
    await this.search(this.$route.query.q);
    this.isLoading = false;
  },
  watch: {
    // watch route params change
    $route: async function (to, from) {
      if (to.query.q !== from.query.q) {
        this.isLoading = true;
        await this.search(this.$route.query.q);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 415px;
}

.seachRelultPage {
  min-height: 600px;
}

@media (max-width: 767px) {
  .card {
    min-height: 300px;
  }
  .card-title {
    font-size: 16px;
  }
  .card img {
    max-height: 200px;
  }
  .premiered {
    width: 100% !important;
    font-size: 12px;
  }
  .rating {
    width: 100% !important;
  }
}
</style>
