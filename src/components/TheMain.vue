<script>
import { objectToString } from '@vue/shared';
import axios from 'axios';
// import CardMovies from './CardMovies.vue';
// import CardSeries from './CardSeries.vue';
import {store, fetchMovies, fetchSeriesTv } from "../store";


export default{

    data(){
        return{
            store,
            // userSearch: " ",
        }
    },
    // emits: ["performSearch"],
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
        // onButtonSearch (){
        //     this.store.searchText = this.userSearch;
        //     this.$emit("performSearch");
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
        
        <!-- <ul  class="d-flex gap-4 flex-wrap">
            <li class="list-unstyled col" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <CardMovies :movie="singleMovie"></CardMovies>
            </li>
        </ul>   -->

        <section  class="row gap-4 justify-content-center">
            <div class="col" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <div>
                    <img :src="store.img.link + store.img.size + singleMovie.poster_path" alt="">
                    <div class="overlay">
                        <h3> {{singleMovie.title}} </h3>
                        <h4> {{singleMovie.original_title}} </h4>
                        <h5> {{singleMovie.original_language}} </h5>
                        <h6 v-for="star in starsRate"> <i  :class="star" class="fa-solid fa-star"></i> </h6>
                        <p> {{singleMovie.overview}} </p>
                    </div>
                </div>
            </div>
        </section> 

        <!-- V-for per le CardSeries -->

        <!-- <ul  class="d-flex gap-4 flex-wrap">
            <li class="list-unstyled col" v-for="(singleSeries, index) in store.seriesTvList" :key="index">
                <CardSeries :serie="singleSeries" />
            </li>
        </ul> -->
        


        <section  class="row gap-4">
            <div class="col" v-for="(singleSeries, index) in store.seriesTvList" :key="index">
                <div class="overlay">
                    <img class="position-relative overlay" :src="store.img.link + store.img.size + singleSeries.poster_path" alt="">
                    <div class="position">
                        <h3> {{singleSeries.name}} </h3>
                        <h4> {{singleSeries.original_name}} </h4>
                        <h5> {{singleSeries.original_language}} </h5>
                        <h6> {{singleSeries.vote_average}} </h6>
                        <p> {{singleMovie.overview}} </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;


</style>