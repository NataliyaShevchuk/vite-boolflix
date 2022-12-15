<script>
import axios from 'axios';
import {store, fetchMovies, fetchSeriesTv} from "../store";
export default{
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
        <!-- <header class="d-flex m-3">
            <input v-model="userSearch" class="form-control w-100 mx-2" type="text" placeholder="Ciao! Cosa avevi in mente?" name="title">
            <button class="btn btn-primary"
            @click="onButtonSearch">
                <i class="fa-solid fa-magnifying-glass"></i> 
            </button>
        </header> -->
        <ul  class="d-flex gap-4 flex-wrap">
            <li class="list-unstyled col" v-for="(singleMovie, index) in store.moviesList" :key="index">
                <img :src="store.img.link + store.img.size + singleMovie.poster_path" alt="">
                <h3> {{singleMovie.title}} </h3>
                <h4> {{singleMovie.original_title}} </h4>
                <h5> {{singleMovie.original_language}} </h5>
                <h6> {{singleMovie.vote_average}} </h6>
            </li>
        </ul>
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