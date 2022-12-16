<script>
import axios from 'axios';
import CardMovies from './CardMovies.vue';
import CardSeries from './CardSeries.vue';
import {store, fetchMovies, fetchSeriesTv } from "../store";


export default{
    components: { CardMovies, CardSeries },
    data(){
        return{
            store,
        }
    },
    methods: {

    },
    created() {
        fetchMovies();
        fetchSeriesTv();
    }
}


</script>



<template>
    
    <div class="container">

        <!-- v-for per le CardMovies --> 
        <section  class="row gap-4"> 
            <div class="col d-flex justify-content-center" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <CardMovies :singleMovie="singleMovie"></CardMovies>
            </div>
        </section>

        <!-- V-for per le CardSeries -->
        <section  class="row gap-4">
            <div class="col d-flex justify-content-center" v-for="(singleSeries, index) in store.seriesTvList" :key="index">
                <CardSeries :singleSeries="singleSeries" />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;


</style>