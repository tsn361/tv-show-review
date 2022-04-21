<template>
    <div class="container text-center" style="margin: 0 auto">
        <div class="row" v-if="movies.length > 0">
            <b-col cols="12" class="text-start text-white mt-4" style="background: #212529">
                <h1 class="mb-0 py-3">{{genre}}</h1>
            </b-col>
            <b-col cols="12" lg="3" class="mt-4" v-for="val in movies.slice(0, 8)" :key="val.id">
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
</template>

<script lang="">

export default{
    name: "homeMovieThumb",
    props: {
        movies: {
            type: Array,
            required: true
        },
        genre: {
            type: String,
            required: true
        }
    }
}
</script>
