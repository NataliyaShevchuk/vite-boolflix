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
        // starsRate(){
        //     let decimalRate = Math.round(this.singleMovie.vote_average / 2);
        //     console.log(decimalRate, "rate");
        //     const starsRating = [];

        //     for(let i=0; i < 5; i++){
        //         // this.starsRating.push(  i < decimalRate) da cancellare
        //         // let fullStar = i < decimalRate;

        //         // if( decimalRate === i && i === 5){
        //         //     fullStar.push("fa-solid fa-star");
        //         // }else {
        //         //     fullStar.push("fa-regular fa-star");
        //         // }
        //         // starsRating.push(fullStar);
        //     }

        //     // return this.starsRating;
            
        // }
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
            <div class="col" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <CardMovies :singleMovie="singleMovie"></CardMovies>
            </div>
        </section>

        <!-- V-for per le CardSeries -->
        <section  class="row gap-4">
            <div class="col" v-for="(singleSeries, index) in store.seriesTvList" :key="index">
                <CardSeries :singleSeries="singleSeries" />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;


</style>