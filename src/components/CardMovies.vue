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
    <div>
        <img :src="store.img.link + store.img.size + singleMovie.poster_path" alt="">
        <h3> {{singleMovie.title}} </h3>
        <h4> {{singleMovie.original_title}} </h4>
        <h5> {{singleMovie.original_language}} </h5>
        <h6> {{singleMovie.vote_average}} </h6>
    </div>
</template>


<style lang="scss">
@use "../style/general.scss" as *;

</style>