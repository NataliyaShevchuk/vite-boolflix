<script>
import axios from 'axios';
import CardMovies from './CardMovies.vue';
import CardSeries from './CardSeries.vue';
import {store, fetchMovies, fetchSeriesTv} from "../store";

export default{
    components: { CardMovies, CardSeries },
    data(){
        return{
            store,
            
            // userSearch: " ",
        }
    },
    // emits: ["performSearch"],
    // methods: {
    //     onButtonSearch (){
    //         this.store.searchText = this.userSearch;
    //         this.$emit("performSearch");
    //     }
    // },
    created() {
        fetchMovies();
        fetchSeriesTv();
    }
}
</script>


<template>
    
    <div class="container">
        <ul  class="d-flex gap-4 flex-wrap">
            <li class="list-unstyled col" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <CardMovies :movie="singleMovie"></CardMovies>
            </li>
        </ul>  

        <!-- <div v-for="(movie, index) in store.moviesList" :key="index">
            <CardMovies :singleMovie="movie"/>
        </div> -->
        
        <ul  class="d-flex gap-4 flex-wrap">
            <li class="list-unstyled col" v-for="(singleSeries, index) in store.seriesTvList" :key="index">
                <img :src="store.img.link + store.img.size + singleSeries.poster_path" alt="">
                <h3> {{singleSeries.name}} </h3>
                <h4> {{singleSeries.original_name}} </h4>
                <h5> {{singleSeries.original_language}} </h5>
                <h6> {{singleSeries.vote_average}} </h6>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

</style>