<script>
    import {store} from "../store";
    import axios from "axios";


    export default {
        props:{
            singleMovie: {
                type: Object,
                required: true,
            }
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="">
        <img class="position-relative " :src="store.img.link + store.img.size + singleMovie.poster_path" alt="">
        <div class=" overlay">
            <h3> {{singleMovie.title}} </h3>
            <h4> {{singleMovie.original_title}} </h4>
            <h5> {{singleMovie.original_language}} </h5> 
            <h6 v-for="star in starsRate"> <i  :class="star" class="fa-solid fa-star"></i> </h6>
            <p> {{singleMovie.overview}} </p>
        </div>
    </div>
</template>


<style lang="scss">
@use "../style/general.scss" as *;

</style>